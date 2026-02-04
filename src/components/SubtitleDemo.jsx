import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  Volume2,
  Languages,
  Sparkles,
  Play,
  Pause,
  Hand,
  Mountain,
  Squirrel,
  Bird
} from 'lucide-react'

// Sample conversation data
const conversationScenes = [
  {
    speaker: 'Sarah',
    text: 'Hey! How was your weekend?',
    icon: Hand,
    language: 'English'
  },
  {
    speaker: 'Carlos',
    text: '¡Fue increíble! Went hiking in the mountains.',
    icon: Mountain,
    language: 'Spanish/English'
  },
  {
    speaker: 'Sarah',
    text: 'That sounds amazing! Did you see any wildlife?',
    icon: Squirrel,
    language: 'English'
  },
  {
    speaker: 'Carlos',
    text: 'Yes! We spotted a deer and some eagles.',
    icon: Bird,
    language: 'English'
  }
]

export default function SubtitleDemo() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)
  const [displayedWords, setDisplayedWords] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [showIcon, setShowIcon] = useState(false)

  const currentScene = conversationScenes[currentSceneIndex]
  const words = currentScene.text.split(' ')
  const IconComponent = currentScene.icon

  // Word-by-word typing animation
  useEffect(() => {
    if (!isPlaying) return

    setDisplayedWords([])
    setShowIcon(false)

    let wordIndex = 0
    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        setDisplayedWords((prev) => [...prev, words[wordIndex]])
        wordIndex++
      } else {
        // Show icon at the end
        setShowIcon(true)

        // Move to next scene after delay
        setTimeout(() => {
          setCurrentSceneIndex((prev) => (prev + 1) % conversationScenes.length)
        }, 2000)

        clearInterval(interval)
      }
    }, 300) // 300ms delay between words

    return () => clearInterval(interval)
  }, [currentSceneIndex, isPlaying, words, words.length]) // Fixed: added words and words.length

  // Animation variants
  const wordVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 25
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  }

  const glassVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="demo" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-800px h-800px bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Live Demo
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience <span className="text-cyan-400">Real-Time</span>{' '}
            Subtitles
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See conversations come to life with AR-powered subtitle technology
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          variants={glassVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {/* Glassmorphism Frame (AR Glasses View) */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Background Image Simulation */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-950">
              {/* Simulated camera view with subtle pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
                }}
              />

              {/* Decorative elements to simulate real-world view */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-slate-700/30 rounded-full blur-2xl" />
              <div className="absolute bottom-12 right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            {/* AR Overlay - Glassmorphism Subtitle Box */}
            <div className="absolute inset-0 flex items-end justify-center p-8">
              <motion.div
                key={currentSceneIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-2xl"
              >
                {/* Glassmorphism container */}
                <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Speaker & Language Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 font-semibold text-sm">
                          {currentScene.speaker}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                        <Languages className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-slate-300">
                          {currentScene.language}
                        </span>
                      </div>
                    </div>

                    {/* Animated Subtitle Text */}
                    <div className="min-h-80pxflex items-center">
                      <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
                        <AnimatePresence mode="wait">
                          {displayedWords.map((word, index) => (
                            <motion.span
                              key={`${currentSceneIndex}-${index}`}
                              variants={wordVariants}
                              initial="hidden"
                              animate="visible"
                              className="inline-block mr-2"
                            >
                              {word}
                            </motion.span>
                          ))}

                          {/* Icon animation */}
                          {showIcon && IconComponent && (
                            <motion.span
                              variants={iconVariants}
                              initial="hidden"
                              animate="visible"
                              className="inline-flex items-center ml-2"
                            >
                              <IconComponent className="w-8 h-8 text-cyan-400" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </p>
                    </div>

                    {/* Sound wave indicator */}
                    <div className="flex items-center gap-1 mt-4">
                      <Volume2 className="w-4 h-4 text-cyan-400" />
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              height: isPlaying ? [4, 12, 4] : 4
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              delay: i * 0.1
                            }}
                            className="w-1 bg-cyan-400 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glass reflection effect */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* AR Corner Markers */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50" />
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/30 transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Play
                </>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setCurrentSceneIndex(
                  (prev) => (prev + 1) % conversationScenes.length
                )
              }
              className="px-6 py-3 bg-slate-800/50 border border-white/10 rounded-full text-slate-300 font-semibold hover:bg-slate-800 transition-all"
            >
              Next Scene
            </motion.button>
          </div>

          {/* Scene Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {conversationScenes.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  width: currentSceneIndex === index ? 24 : 8,
                  backgroundColor:
                    currentSceneIndex === index ? '#22d3ee' : '#475569'
                }}
                className="h-2 rounded-full cursor-pointer"
                onClick={() => setCurrentSceneIndex(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Sparkles,
              title: 'Real-Time',
              desc: 'Zero latency subtitle display',
              color: 'text-cyan-400'
            },
            {
              icon: Languages,
              title: 'Multi-Language',
              desc: '50+ languages supported',
              color: 'text-purple-400'
            },
            {
              icon: Volume2,
              title: 'Context-Aware',
              desc: 'AI understands conversation flow',
              color: 'text-blue-400'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-slate-900/30 backdrop-blur-sm border border-white/5 rounded-xl"
            >
              <feature.icon
                className={`w-10 h-10 mx-auto mb-3 ${feature.color}`}
              />
              <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
