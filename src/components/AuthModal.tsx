/**
 * DUS Bankası — Auth Modal
 * Google OAuth + Email/Password giriş/kayıt.
 * Giriş yapılmışsa kullanıcı bilgisi + çıkış butonu gösterir.
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Envelope, Lock, SignIn, UserPlus, CircleNotch, SignOut, User } from '@phosphor-icons/react';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '../lib/auth';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { overlayFade, modalPop } from '../lib/motion';

import type { Theme } from '../theme';

type Props = {
  user: SupabaseUser | null;
  onClose: () => void;
  onSignOut: () => Promise<void>;
  theme: Theme;
};

type FormMode = 'login' | 'register';

/** Google renk logosu (SVG inline) */
function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function AuthModal({ user, onClose, onSignOut, theme }: Props) {
  const [formMode, setFormMode] = useState<FormMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleGoogleSignIn = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      // Google OAuth sayfayı yönlendirir — modal kapanır
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Google girişi başarısız.');
      setLoading(false);
    }
  }, []);

  const handleEmailSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim() || !password.trim()) return;
      setLoading(true);
      setError(null);
      setSuccessMsg(null);
      try {
        if (formMode === 'login') {
          await signInWithEmail(email, password);
          onClose();
        } else {
          await signUpWithEmail(email, password);
          setSuccessMsg('Kayıt başarılı! Email onayı gönderildi, ardından giriş yapabilirsin.');
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'İşlem başarısız.');
      } finally {
        setLoading(false);
      }
    },
    [email, password, formMode, onClose]
  );

  const handleSignOut = useCallback(async () => {
    setLoading(true);
    try {
      await onSignOut();
    } finally {
      setLoading(false);
      onClose();
    }
  }, [onSignOut, onClose]);

  const switchMode = useCallback((mode: FormMode) => {
    setFormMode(mode);
    setError(null);
    setSuccessMsg(null);
  }, []);

  return (
    <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center glass-overlay"
      variants={overlayFade}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className={`relative w-full max-w-sm mx-4 glass-card border border-[color:var(--color-border-default)] shadow-2xl shadow-black/40 p-6`}
        variants={modalPop}
        initial="initial"
        animate="animate"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[color:var(--color-text-secondary)] opacity-70 hover:opacity-100 hover:text-[color:var(--color-text-primary)] transition-all rounded-lg p-1 hover:bg-[color:var(--color-surface-2)]"
          aria-label="Kapat"
        >
          <X size={18} />
        </button>

        {/* Başlık */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-500/30">
            <span className="text-white font-black text-xl leading-none">?</span>
          </div>
          {user ? (
            <>
              <h2 className={`text-lg font-bold ${theme.text}`}>Hesabım</h2>
              <p className={`text-sm ${theme.subtext} mt-1`}>Çok cihaz senkronizasyonu aktif</p>
            </>
          ) : (
            <>
              <h2 className={`text-lg font-bold ${theme.text}`}>
                {formMode === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
              </h2>
              <p className={`text-sm ${theme.subtext} mt-1`}>
                İlerlemeni tüm cihazlarda senkronize et
              </p>
            </>
          )}
        </div>

        {/* ── Giriş yapılmış: kullanıcı kartı ── */}
        {user ? (
          <div className="space-y-4">
            <div className={`flex items-center gap-3 ${theme.surface} rounded-xl px-4 py-3`}>
              <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url as string}
                    className="w-9 h-9 rounded-full object-cover"
                    alt="Profil fotoğrafı"
                  />
                ) : (
                  <User size={16} className="text-white" />
                )}
              </div>
              <div className="min-w-0">
                <p className={`text-sm font-semibold truncate ${theme.text}`}>
                  {(user.user_metadata?.full_name as string) ?? user.email ?? 'Kullanıcı'}
                </p>
                <p className={`text-xs ${theme.subtext} truncate`}>{user.email}</p>
              </div>
            </div>

            <div className={`${theme.accentSoft} border border-[color:var(--color-accent-dim)] rounded-xl px-4 py-3 text-xs text-[color:var(--color-accent-soft)] text-center`}>
              ✓ İstatistikler tüm cihazlarda otomatik senkronize ediliyor
            </div>

            <button
              onClick={handleSignOut}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 ${theme.surface} hover:${theme.surface} ${theme.text} hover:text-white text-sm font-medium rounded-xl transition-all disabled:opacity-50`}
            >
              {loading ? <CircleNotch size={16} weight="thin" className="animate-spin" /> : <SignOut size={16} weight="thin" />}
              Çıkış Yap
            </button>
          </div>
        ) : (
          /* ── Giriş yapılmamış: login/register formu ── */
          <div className="space-y-4">
            {/* Google OAuth */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2.5 px-4 py-2.5 ${theme.surface} hover:${theme.inputBg} ${theme.text} text-sm font-semibold rounded-xl transition-all shadow-sm border ${theme.border} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? (
                <CircleNotch size={16} weight="thin" className={`animate-spin ${theme.subtext} opacity-70`} />
              ) : (
                <GoogleLogo />
              )}
              Google ile Giriş Yap
            </button>

            {/* Ayırıcı */}
            <div className="flex items-center gap-3">
              <div className={`flex-1 h-px ${theme.border}`} />
              <span className={`text-xs ${theme.subtext} opacity-70`}>veya</span>
              <div className={`flex-1 h-px ${theme.border}`} />
            </div>

            {/* Email + Şifre Formu */}
            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <div className="relative">
                <Envelope
                  size={15}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subtext} opacity-70 pointer-events-none`}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full glass-input rounded-xl pl-9 pr-4 py-2.5 text-sm text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-tertiary)]"
                />
              </div>
              <div className="relative">
                <Lock
                  size={15}
                  className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.subtext} opacity-70 pointer-events-none`}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifre (min. 6 karakter)"
                  autoComplete={formMode === 'login' ? 'current-password' : 'new-password'}
                  className="w-full glass-input rounded-xl pl-9 pr-4 py-2.5 text-sm text-[color:var(--color-text-primary)] placeholder:text-[color:var(--color-text-tertiary)]"
                />
              </div>

              {error && (
                <p className={`text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 leading-relaxed`}>
                  {error}
                </p>
              )}
              {successMsg && (
                <p className={`text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 leading-relaxed`}>
                  {successMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !email.trim() || !password.trim()}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <CircleNotch size={16} weight="thin" className="animate-spin" />
                ) : formMode === 'login' ? (
                  <SignIn size={16} weight="thin" />
                ) : (
                  <UserPlus size={16} />
                )}
                {formMode === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
              </button>
            </form>

            {/* Mod geçişi */}
            <p className={`text-center text-xs ${theme.subtext} opacity-70`}>
              {formMode === 'login' ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}{' '}
              <button
                type="button"
                onClick={() => switchMode(formMode === 'login' ? 'register' : 'login')}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                {formMode === 'login' ? 'Kayıt Ol' : 'Giriş Yap'}
              </button>
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
