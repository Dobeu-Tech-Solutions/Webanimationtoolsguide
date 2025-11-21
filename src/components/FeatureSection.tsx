import { motion } from 'motion/react';
import { Zap, Palette, Code2, Sparkles, Rocket, Shield } from 'lucide-react';
import { GlassCard } from './GlassCard';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with 60fps animations and sub-second load times.',
    color: 'from-[#08AEEA] to-[#2AF598]',
  },
  {
    icon: Palette,
    title: 'Cosmic Design',
    description: 'Stunning visual aesthetics with glassmorphism, gradients, and dynamic lighting.',
    color: 'from-[#FF5ACD] to-[#9D4EDD]',
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'Built with React, TypeScript, Tailwind CSS, and cutting-edge animation libraries.',
    color: 'from-[#2AF598] to-[#08AEEA]',
  },
  {
    icon: Sparkles,
    title: 'Rich Animations',
    description: 'Powered by Motion (Framer Motion), GSAP, and Three.js for immersive experiences.',
    color: 'from-[#9D4EDD] to-[#FF5ACD]',
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description: 'Battle-tested components with accessibility, responsiveness, and SEO optimization.',
    color: 'from-[#08AEEA] to-[#FF5ACD]',
  },
  {
    icon: Shield,
    title: 'Best Practices',
    description: 'Following 2025 web standards with TypeScript, ESLint, and modern development workflows.',
    color: 'from-[#2AF598] to-[#9D4EDD]',
  },
];

export function FeatureSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-8" id="features">
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
            <span className="px-4 py-2 rounded-full glass-card text-sm text-accent-cyan">
              Features
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl mb-6">
            <span className="text-gradient-cosmic">
              Next-Level Capabilities
            </span>
          </h2>
          
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Everything you need to create stunning, performant web experiences with modern tools and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <GlassCard 
                key={feature.title} 
                delay={index * 0.1}
                className="group"
              >
                <div className="relative">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none blur-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`} />
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-20">
          <motion.div
            className="absolute left-1/4 top-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'linear-gradient(135deg, #08AEEA, #2AF598)' }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 top-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: 'linear-gradient(135deg, #FF5ACD, #9D4EDD)' }}
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
