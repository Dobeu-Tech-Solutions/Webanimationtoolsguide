import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';

const technologies = [
  { name: 'React 18+', category: 'Framework', logo: '⚛️' },
  { name: 'TypeScript', category: 'Language', logo: '📘' },
  { name: 'Tailwind CSS', category: 'Styling', logo: '🎨' },
  { name: 'Motion', category: 'Animation', logo: '✨' },
  { name: 'GSAP', category: 'Animation', logo: '🚀' },
  { name: 'Three.js', category: '3D Graphics', logo: '🎮' },
  { name: 'tsParticles', category: 'Effects', logo: '🌟' },
  { name: 'Next.js', category: 'Framework', logo: '▲' },
];

export function TechnologySection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-8" id="technology">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass-card text-sm text-accent-green">
                Technology Stack
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl">
              <span className="text-gradient-cyber glow-green">
                Powered by
              </span>
              <br />
              <span className="text-gradient-cosmic">
                Modern Tools
              </span>
            </h2>

            <p className="text-lg text-foreground-secondary leading-relaxed">
              Built with the most advanced and battle-tested technologies of 2025. 
              Every library is carefully selected for performance, developer experience, 
              and production readiness.
            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  title: 'Performance First',
                  description: '60fps animations with hardware acceleration and optimized rendering',
                },
                {
                  title: 'Developer Experience',
                  description: 'TypeScript support, excellent documentation, and active communities',
                },
                {
                  title: 'Production Ready',
                  description: 'Battle-tested in millions of websites with proven reliability',
                },
              ].map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                  className="flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-cyan to-accent-green mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">{point.title}</h4>
                    <p className="text-sm text-foreground-secondary">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.3 + (index * 0.05),
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <GlassCard className="text-center group cursor-pointer">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-4xl mb-3"
                    >
                      {tech.logo}
                    </motion.div>
                    <h4 className="mb-1">{tech.name}</h4>
                    <p className="text-xs text-foreground-tertiary">
                      {tech.category}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Floating gradient orbs */}
            <motion.div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #2AF598, #08AEEA)' }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #FF5ACD, #9D4EDD)' }}
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
