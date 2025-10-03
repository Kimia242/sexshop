import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'elegant';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'elegant',
  className,
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 rounded-full border-2 transition-all duration-300 bg-white text-neutral-700 placeholder-neutral-400 focus:outline-none';

  const variantClasses = {
    default: 'border-neutral-200 focus:border-love-red',
    elegant: 'border-neutral-200 focus:border-love-red',
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-trust-blue">
          {label}
        </label>
      )}
      <input
        className={cn(
          baseClasses,
          variantClasses[variant],
          error && 'border-error',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error mt-1">{error}</p>
      )}
    </div>
  );
};