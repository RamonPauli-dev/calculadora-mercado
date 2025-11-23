'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  size = 'md',
  spacing = 'md',
}: CardProps) {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4', // Reduzido para mobile
    lg: 'p-6',
    xl: 'p-8',
  };

  const spacingClasses = {
    none: '',
    sm: 'mb-3', // Reduzido
    md: 'mb-4', // Reduzido
    lg: 'mb-6', // Reduzido
  };

  return (
    <div
      className={`border-white-500 rounded-xl border bg-gray-800 shadow-lg ${sizeClasses[size]} ${spacingClasses[spacing]} ${className} `}
    >
      {children}
    </div>
  );
}
