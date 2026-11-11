import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()

import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  buildDeepSeekPayload,
  parseDeepSeekResponse,
  DEPLOY_BASE_URL,
  DEPLOY_DEEPSEEK_MODEL
} from './src/modules/triaj/domain/deepseek'

function triajDevApiPlugin(): Plugin {
  return {
    name: 'triaj-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        let urlStr = req.url || '';
        if (urlStr.startsWith('/api/ticktick/')) {
          urlStr = urlStr.replace('/api/ticktick/', '/api/triaj/ticktick/');
        }
        if (!urlStr.startsWith('/api/triaj/') && !urlStr.startsWith('/api/ai/')) {
          return next();
        }

        try {
          const urlObj = new URL(urlStr, 'http://localhost:5173');
          const pathname = urlObj.pathname;

          // 1. Deploy.com DeepSeek v4.1 Flash API Status Rotaları (DusTriaj ile birebir uyumlu)
          if (pathname === '/api/ai/status' || pathname === '/api/triaj/ai/status') {
            const deployApiKey = process.env.DEPLOY_API_KEY || process.env.DEEPSEEK_API_KEY || '';
            const deployBaseUrl = (process.env.DEPLOY_BASE_URL || DEPLOY_BASE_URL).replace(/\/$/, '');
            const deployModel = process.env.DEPLOY_MODEL || DEPLOY_DEEPSEEK_MODEL;

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              configured: Boolean(deployApiKey),
              provider: 'deploy.com',
              baseUrl: deployBaseUrl,
              model: deployModel,
            }));
            return;
          }

          // 2. Deploy.com DeepSeek v4.1 Flash API Chat Completion Rotaları (DusTriaj server.ts ile birebir)
          if (pathname === '/api/ai/deepseek' || pathname === '/api/triaj/ai/deepseek') {
            const deployApiKey = process.env.DEPLOY_API_KEY || process.env.DEEPSEEK_API_KEY || '';
            const deployBaseUrl = (process.env.DEPLOY_BASE_URL || DEPLOY_BASE_URL).replace(/\/$/, '');
            const deployModel = process.env.DEPLOY_MODEL || DEPLOY_DEEPSEEK_MODEL;

            if (!deployApiKey) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: 'DEPLOY_API_KEY yapılandırılmamış. .env.local dosyasını kontrol edin.'
              }));
              return;
            }

            // Body oku
            const chunks: Buffer[] = [];
            for await (const chunk of req) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            const rawBody = Buffer.concat(chunks).toString('utf-8');
            const input = rawBody ? JSON.parse(rawBody) : {};

            const payload = buildDeepSeekPayload(input);
            payload.model = deployModel;

            const apiRes = await fetch(`${deployBaseUrl}/chat/completions`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${deployApiKey}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify(payload),
            });

            if (!apiRes.ok) {
              const errText = await apiRes.text();
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                error: `Deploy.com API HTTP ${apiRes.status}: ${errText}`,
              }));
              return;
            }

            const rawJson = (await apiRes.json()) as Record<string, unknown>;
            const parsed = parseDeepSeekResponse(rawJson);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(parsed));
            return;
          }

          // 3. Diğer Serverless API Rotaları (api/triaj/...)
          if (pathname.startsWith('/api/triaj/')) {
            const relPath = pathname.replace(/^\/api\//, '');
            const filePath = resolve(process.cwd(), 'api', `${relPath}.ts`);
            if (!existsSync(filePath)) return next();

            // Body oku (POST ise)
            const chunks: Buffer[] = [];
            for await (const chunk of req) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }
            const bodyBuf = Buffer.concat(chunks);
            const body = ['GET', 'HEAD'].includes(req.method || '') ? undefined : bodyBuf;

            // Headers oluştur
            const headers = new Headers();
            for (const [k, v] of Object.entries(req.headers)) {
              if (v) {
                if (Array.isArray(v)) v.forEach(item => headers.append(k, item));
                else headers.set(k, v);
              }
            }

            const webReq = new Request(urlObj.href, {
              method: req.method,
              headers,
              body,
              // @ts-ignore
              duplex: 'half',
            });

            const mod = await server.ssrLoadModule(filePath);
            const fn = mod.handler || mod.default?.fetch || mod.default;
            if (typeof fn !== 'function') return next();

            const response: Response = await fn(webReq);
            res.statusCode = response.status;
            response.headers.forEach((v, k) => {
              res.setHeader(k, v);
            });
            const arrayBuffer = await response.arrayBuffer();
            res.end(Buffer.from(arrayBuffer));
            return;
          }

          return next();
        } catch (err: any) {
          console.error('[triaj dev-api error]', err);
          res.statusCode = err?.status || 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err?.message || 'Internal dev API error' }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      tailwindcss(),
      react(),
      triajDevApiPlugin(),
    ],
    server: {
      proxy: {
        // Harici mock veya diğer backend rotaları için fallback
        '/api/external': {
          target: 'http://localhost:5175',
          changeOrigin: true,
        },
      },
    },
  };
})
