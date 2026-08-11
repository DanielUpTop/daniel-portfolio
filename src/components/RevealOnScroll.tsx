import type { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, className = '', delay = 0 }: RevealOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
