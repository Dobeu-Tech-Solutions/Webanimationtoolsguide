import { useState, useEffect, useRef } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { ParticleField } from './components/ParticleField';
import { PageNavigation } from './components/PageNavigation';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { TechnologySection } from './components/TechnologySection';
import { TestimonialSection } from './components/TestimonialSection';
import { CTASection } from './components/CTASection';

const TOTAL_PAGES = 5;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Handle wheel scroll for pagination
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to detect end of scroll
      scrollTimeoutRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        
        setCurrentPage((prev) => {
          const next = prev + direction;
          if (next < 1 || next > TOTAL_PAGES) return prev;
          return next;
        });
      }, 50);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentPage((prev) => Math.min(prev + 1, TOTAL_PAGES));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentPage(TOTAL_PAGES);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to section when page changes
  useEffect(() => {
    const section = sectionsRef.current[currentPage - 1];
    if (section) {
      setIsScrolling(true);
      section.scrollIntoView({ behavior: 'smooth' });
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [currentPage]);

  // Intersection Observer to update current page based on visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrolling) {
            const index = sectionsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setCurrentPage(index + 1);
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [isScrolling]);

  const handleNavigate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Background Layers */}
      <CosmicBackground />
      <ParticleField />
      
      {/* Page Navigation */}
      <PageNavigation
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onNavigate={handleNavigate}
      />

      {/* Sections */}
      <main className="relative z-10">
        <div ref={(el) => el && (sectionsRef.current[0] = el)}>
          <HeroSection />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[1] = el)}>
          <FeatureSection />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[2] = el)}>
          <TechnologySection />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[3] = el)}>
          <TestimonialSection />
        </div>
        
        <div ref={(el) => el && (sectionsRef.current[4] = el)}>
          <CTASection />
        </div>
      </main>

      {/* Ambient Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-5">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(8, 174, 234, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(255, 90, 205, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5"
          style={{ 
            background: 'radial-gradient(circle, rgba(42, 245, 152, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
