import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { GlassCard } from './GlassCard';

export function HeroSection() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative px-8"
      id="hero"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
          >
            <Sparkles className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm text-foreground-secondary">
              Next-Generation Web Development
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
            <span className="block text-gradient-cosmic glow-cyan">
              Build the
            </span>
            <span className="block text-gradient-cosmic glow-magenta mt-2">
              Future
            </span>
          </h1>

          <p className="text-lg md:text-xl text-foreground-secondary max-w-xl leading-relaxed">
            Experience cutting-edge web development with cosmic design aesthetics, 
            advanced animations, and next-generation technology stack for 2025.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg"
              className="relative overflow-hidden group bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] border-0 hover:shadow-2xl hover:shadow-accent-cyan/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Zap className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2AF598] to-[#9D4EDD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="glass-card border-white/20 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {['React', 'Three.js', 'Motion', 'GSAP'].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (i * 0.1),
                  type: "spring",
                  stiffness: 200
                }}
                className="px-3 py-1 rounded-full text-sm glass-card border border-accent-cyan/30"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <GlassCard className="p-8 space-y-6" hover={false}>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Cosmic Design System</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    Leveraging the latest animation libraries and design patterns for an immersive experience.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Performance', value: '60 FPS' },
                  { label: 'Animations', value: '120+' },
                  { label: 'Components', value: '50+' },
                  { label: 'Speed', value: 'Ultra Fast' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="text-2xl text-gradient-cyber mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-foreground-tertiary">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Floating orbs */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: 'linear-gradient(135deg, #08AEEA, #2AF598)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-30"
            style={{ background: 'linear-gradient(135deg, #FF5ACD, #9D4EDD)' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm text-foreground-tertiary">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5 text-accent-cyan glow-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
