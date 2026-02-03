import { motion } from 'framer-motion'
import { ArrowRight, Glasses, Sparkles, Users } from 'lucide-react'
import ScrollReveal, { FadeIn, ScaleIn } from './ScrollReveal'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              maskImage:
                'radial-gradient(ellipse at center, black, transparent 70%)'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <ScaleIn delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">
              Launching Q2 2025
            </span>
          </motion.div>
        </ScaleIn>

        {/* Main Heading */}
        <FadeIn delay={0.4}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            See What You
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
              Cannot Hear
            </span>
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.6}>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AR smart glasses with real-time subtitle technology.
            Breaking communication barriers for millions worldwide.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#pricing"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-cyan-500 text-slate-950 rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-400 transition-all"
            >
              Pre-Order Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-500/10 transition-all backdrop-blur-sm"
            >
              Watch Demo
            </motion.a>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: '430M+', label: 'People Empowered' },
              { icon: Glasses, value: '50+', label: 'Languages' },
              { icon: Sparkles, value: 'Zero', label: 'Latency' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-xl"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="w-1 h-3 bg-cyan-400 rounded-full mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
