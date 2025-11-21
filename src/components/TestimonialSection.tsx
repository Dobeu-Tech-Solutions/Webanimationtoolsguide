import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { GlassCard } from './GlassCard';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    company: 'Digital Innovations',
    content: 'The cosmic design system has transformed how we approach web development. The animations are buttery smooth and the visual impact is incredible.',
    avatar: '👩‍💼',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer',
    company: 'Tech Ventures',
    content: 'Working with this tech stack has been a game-changer. The performance optimizations and modern tooling make development a joy.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Watson',
    role: 'UX Designer',
    company: 'Creative Studio',
    content: 'The glassmorphism effects and gradient animations create such an engaging user experience. Our clients love the futuristic aesthetic.',
    avatar: '👩‍🎨',
  },
];

const companies = [
  { name: 'TechCorp', logo: '🚀' },
  { name: 'Innovate', logo: '💡' },
  { name: 'Digital', logo: '💻' },
  { name: 'Cloud9', logo: '☁️' },
  { name: 'Nexus', logo: '🔷' },
  { name: 'Quantum', logo: '⚡' },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-8" id="testimonials">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full glass-card text-sm text-accent-magenta">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="text-gradient-cosmic">
              What People Say
            </span>
          </h2>

          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Trusted by developers and designers worldwide to create stunning web experiences.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <GlassCard className="max-w-2xl w-full" hover={false}>
                  <div className="relative">
                    <Quote className="w-12 h-12 text-accent-cyan/30 mb-6" />

                    <p className="text-lg md:text-xl text-foreground-secondary mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="text-4xl">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div>
                        <h4 className="mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-foreground-tertiary">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-accent-cyan/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-accent-cyan to-accent-magenta' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-accent-cyan/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm text-foreground-tertiary mb-8">
            Trusted by leading companies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-xl glass-card flex items-center justify-center text-3xl grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                {company.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
