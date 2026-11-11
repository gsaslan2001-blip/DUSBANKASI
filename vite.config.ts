import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
dotenv.config()

import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
function triajDevApiPlugin(): Plugin {
  return {
    name: 'triaj-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlStr = req.url || '';
        if (!urlStr.startsWith('/api/triaj/') && !urlStr.startsWith('/api/ai/')) {
          return next();
        }

        try {
          const urlObj = new URL(urlStr, 'http://localhost:5173');
          const pathname = urlObj.pathname;

          // Use the production handlers for both canonical paths and compatibility aliases.
          if (/^\/api\/(?:triaj\/(?:ai\/(?:status|deepseek)|ticktick\/(?:connect|callback|disconnect|focus))|ai\/(?:status|deepseek))$/.test(pathname)) {
            const relPath = pathname.replace(/^\/api\//, '');
            const filePath = resolve(process.cwd(), 'api', `${relPath}.ts`);
            if (!existsSync(filePath)) return next();

            // Body oku (POST ise)
            const chunks: Buffer[] = [];
            let size = 0;
            for await (const chunk of req) {
              const buffer = typeof chunk === 'string' ? Buffer.from(chunk) : chunk;
              size += buffer.length;
              if (size > 32 * 1024) {
                res.statusCode = 413;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Cache-Control', 'no-store');
                res.end(JSON.stringify({ code: 'INPUT_TOO_LARGE', error: 'İstek boyutu sınırı aşıldı.' }));
                return;
              }
              chunks.push(buffer);
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
        } catch {
          // Never log private request or provider details.
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'TRİAJ geliştirme sunucusu isteği tamamlayamadı.' }));
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
