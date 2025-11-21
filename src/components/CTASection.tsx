import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-8 relative overflow-hidden" id="cta">
      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 md:p-16" hover={false}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm">Join the Future</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl mb-6"
            >
              <span className="text-gradient-cosmic glow-cyan">
                Ready to Build
              </span>
              <br />
              <span className="text-gradient-cosmic glow-magenta">
                Something Amazing?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-foreground-secondary mb-12 max-w-2xl mx-auto"
            >
              Get early access to our cosmic design system and start creating stunning 
              web experiences with cutting-edge animation libraries.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-tertiary" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 glass-card border-white/20 focus:border-accent-cyan/50 h-12"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-[#08AEEA] to-[#FF5ACD] border-0 hover:shadow-2xl hover:shadow-accent-cyan/50 transition-all duration-300 group h-12"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground-secondary">
                <div className="w-2 h-2 rounded-full bg-accent-magenta animate-pulse" />
                <span>24/7 support</span>
              </div>
            </motion.div>

            {/* Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-12"
            >
              <Button
                variant="outline"
                className="glass-card border-white/20 hover:border-accent-cyan/50 hover:bg-accent-cyan/10"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with us
              </Button>
              <Button
                variant="outline"
                className="glass-card border-white/20 hover:border-accent-green/50 hover:bg-accent-green/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email support
              </Button>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Large Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #08AEEA, #2AF598)' }}
        animate={{
          scale: [1, 1.5, 1],
          x: [-50, 50, -50],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #FF5ACD, #9D4EDD)' }}
        animate={{
          scale: [1.5, 1, 1.5],
          x: [50, -50, 50],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating Light Rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(8, 174, 234, 0.3), transparent 30%)',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
