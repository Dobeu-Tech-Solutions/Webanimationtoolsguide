import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({ children, className = '', delay = 0, hover = true }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={hover ? { y: -8 } : undefined}
      className={`glass-card rounded-2xl p-6 relative ${hover ? 'glass-card-hover' : ''} ${className}`}
    >
      {children}
      
      {/* Glow effect on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none">
          <div 
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{
              background: 'linear-gradient(45deg, rgba(8, 174, 234, 0.3), rgba(42, 245, 152, 0.3), rgba(255, 90, 205, 0.3), rgba(157, 78, 221, 0.3))',
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
