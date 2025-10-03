import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
  variant?: 'elegant' | 'gradient' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  className,
  children,
  variant = 'elegant',
  size,
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  const baseClasses = 'font-serif font-bold leading-tight';

  const variantClasses = {
    elegant: 'text-trust-blue',
    gradient: 'text-gradient',
    default: 'text-neutral-800',
  };

  const sizeClasses = size || {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  }[level];

  return (
    <Component
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses,
        className
      )}
    >
      {children}
    </Component>
  );
};