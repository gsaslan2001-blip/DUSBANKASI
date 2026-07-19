import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { CircleNotch } from '@phosphor-icons/react';
import { cn } from '../../lib/cn';

/* ── Button — tek atom, tüm buton varyantlarının kaynağı (Faz 2) ──
   Mevcut .btn/.btn-{variant}/.btn-{size} CSS sistemi (App.css) korunur —
   görsel davranış birebir aynı kalır, buraya eklenen: loading (spinner +
   aria-busy), disabled durumunda whileTap iptali, icon boyutunda 44px
   zorunlu dokunma alanı. */

const buttonVariants = cva('btn inline-flex items-center justify-center gap-2 font-semibold', {
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      ghost: 'btn-ghost',
      danger: 'btn-danger',
      glass: 'glass',
      /** Renk sınıfı uygulamaz — tamamen özel (custom className) renklendirme için. */
      unstyled: '',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      icon: 'btn-md h-11 w-11 !p-0',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, children, ...props }, ref) => {
    const isDisabled = disabled || loading;
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={asChild ? undefined : isDisabled}
        aria-disabled={asChild ? isDisabled || undefined : undefined}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <CircleNotch size={16} weight="bold" className="animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
