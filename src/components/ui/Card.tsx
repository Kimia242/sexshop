import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'product' | 'elegant';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 border';

  const variantClasses = {
    default: 'bg-white border-neutral-100',
    product: 'bg-white border-neutral-100 shadow-sensual',
    elegant: 'bg-gradient-to-br from-white to-neutral-50 border-neutral-100 shadow-trust',
  };

  const hoverClasses = hover
    ? 'hover:shadow-discovery hover:-translate-y-2'
    : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
};