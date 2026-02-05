import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, Battery, Type, Smile } from 'lucide-react'
import { FadeIn, ScaleIn } from './ScrollReveal'


const FEATURES = [
  {
    id: 1,
    title: 'Real-time subtitles on AR lens',
    meta: 'Instant speech → text overlaid on lens',
    icon: Type,
    emoji: '🔤'
  },
  {
    id: 2,
    title: 'Adjustable font size',
    meta: 'Large, medium, small — your choice',
    icon: Smile,
  },
  {
    id: 3,
    title: 'Emoji-based emotion display',
    meta: 'Visual emotional cues in-lens',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Multilingual support',
    meta: 'Multiple languages, seamless switching',
    icon: Globe,
    emoji: '🌐'
  },
  {
    id: 5,
    title: 'Works offline with AI chip',
    meta: 'On-device inference — privacy & speed',
    icon: Battery,
  },
  {
    id: 6,
    title: 'Battery life: 10–12 hours',
    meta: 'All-day usage on single charge',
    icon: Battery,
  }
]

export default function Hero() {
  // Subtitle typing animation
  const [typedText, setTypedText] = useState('')
  const fullText = "See what you cannot hear... Real-time subtitles on your AR lens."

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i))
      i += 1
      if (i > fullText.length) clearInterval(interval)
    }, 38)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  const emojiHover = {
    scale: 1.25,
    rotate: [0, -8, 8, 0],
    transition: { duration: 0.5 }
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start bg-slate-950 overflow-hidden px-6 pt-20 pb-24">

      {/* Background subtle gradient motion */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 24, 0], opacity: [0.18, 0.36, 0.18] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-8%] left-[-10%] w-160 h-160 bg-linear-to-r from-cyan-500 to-blue-500/60 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.08, 1, 1.08], x: [0, -24, 0], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-6%] right-[-8%] w-160 h-160 bg-linear-to-r from-slate-700 to-cyan-600/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text */}
        <div className="pt-6 lg:pt-12">
          <FadeIn delay={0.16} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              See What You <br />
              <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#06b6d4,#60a5fa)]">
                Cannot Hear
              </span>
            </h1>
          </FadeIn>

          <div className="h-16 mb-8">
            <p className="text-lg md:text-xl text-slate-300 font-medium tracking-wide">
              {typedText}
              <motion.span
                aria-hidden
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block align-middle ml-1 w-1 h-6 bg-cyan-400"
              />
            </p>
          </div>

          <FadeIn delay={0.6}>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#preorder"
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(34,211,238,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-3 bg-cyan-500 text-slate-950 rounded-full font-semibold text-base shadow-md"
                aria-label="Pre-order EchoSee"
              >
                Pre-Order Now
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#product"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(34,211,238,0.06)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-8 py-3 border border-cyan-500/30 text-cyan-300 rounded-full font-semibold text-base"
                aria-label="Learn more about EchoSee"
              >
                Learn More
              </motion.a>
            </div>
          </FadeIn>

        </div>

        {/* RIGHT: Visual */}
        <FadeIn delay={0.34} direction="left">
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-500/14 rounded-3xl blur-3xl opacity-40 group-hover:opacity-65 transition-opacity pointer-events-none" />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl border border-white/8 shadow-2xl overflow-hidden bg-linear-to-b from-slate-900/60 to-black/40"
              style={{ minHeight: 380 }}
            >
              <img
                src="/images/front.jpg"
                alt="Person wearing EchoSee AR smart glasses showing subtitles"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                style={{ aspectRatio: '4 / 3' }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur rounded-2xl border border-cyan-500/30 p-4 shadow-[0_10px_30px_rgba(6,182,212,0.16)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <div className="flex-1">
                    <p className="text-[10px] text-cyan-300 font-mono uppercase tracking-widest mb-1">Live Translation</p>
                    <p className="text-white text-sm md:text-base font-semibold leading-snug">"Welcome to the future of communication!"</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </FadeIn>

      </div>

      {/* PRODUCT HIGHLIGHTS */}
      <div id="product" className="relative z-10 mt-20 max-w-6xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Product Highlights</h2>
            <p className="text-slate-400 mt-1">Quick overview of key features — high impact, fast to scan.</p>
          </div>
          <div className="text-slate-500 text-sm hidden md:block">Works offline • Multilingual • 10–12h battery</div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <motion.article key={f.id} variants={cardVariants} className="relative bg-slate-900/80 border border-white/6 rounded-2xl p-5 hover:shadow-[0_10px_30px_rgba(2,6,23,0.6)] transition-shadow">
                <div className="flex items-start gap-4">
                  <motion.div whileHover={{ scale: 1.08 }} className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg flex items-center gap-3">
                      {f.title}
                      <motion.span whileHover={emojiHover} className="text-2xl leading-none">{f.emoji}</motion.span>
                    </h3>
                    <p className="text-slate-400 mt-1 text-sm">{f.meta}</p>
                  </div>
                </div>

                <style jsx>{`
                  article:hover svg{ transform: translateY(-3px); transition: transform 250ms ease; }
                `}</style>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}
