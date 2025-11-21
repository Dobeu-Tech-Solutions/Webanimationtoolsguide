import { motion } from 'motion/react';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

export function PageNavigation({ currentPage, totalPages, onNavigate }: PageNavigationProps) {
  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
      aria-label="Page navigation"
    >
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = i + 1;
        const isActive = currentPage === pageNumber;
        
        return (
          <button
            key={pageNumber}
            onClick={() => onNavigate(pageNumber)}
            className="relative group"
            aria-label={`Go to page ${pageNumber}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <motion.div
              className={`rounded-full transition-all duration-300 ${
                isActive 
                  ? 'w-3 h-3' 
                  : 'w-2 h-2 opacity-30 group-hover:opacity-60 group-hover:w-2.5 group-hover:h-2.5'
              }`}
              style={{
                background: isActive 
                  ? 'linear-gradient(135deg, #08AEEA 0%, #FF5ACD 100%)'
                  : '#ffffff',
              }}
              animate={{
                scale: isActive ? [1, 1.2, 1] : 1,
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full blur-md"
                style={{
                  background: 'linear-gradient(135deg, #08AEEA 0%, #FF5ACD 100%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            
            <span className="sr-only">
              Page {pageNumber} {isActive && '(current)'}
            </span>
          </button>
        );
      })}
      
      {/* Progress Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/10 -z-10">
        <motion.div
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#08AEEA] to-[#FF5ACD]"
          initial={{ height: '0%' }}
          animate={{ 
            height: `${((currentPage - 1) / (totalPages - 1)) * 100}%` 
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </nav>
  );
}
