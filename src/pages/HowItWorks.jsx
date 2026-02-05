import { motion } from "framer-motion";
import { FaMicrophone, FaRobot, FaGlasses } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaMicrophone />,
      title: "1. Mic Captures Speech",
      desc: `The built-in noise-cancelling microphone actively listens to your voice in real time. 
      It filters background noise, isolates your speech, and continuously streams clean audio 
      data to the AI engine without any noticeable delay.`,
    },
    {
      icon: <FaRobot />,
      title: "2. AI Converts Speech to Text",
      desc: `Advanced AI speech recognition models instantly analyze your spoken words and 
      convert them into accurate, readable text. The system understands context, grammar, 
      accents, and multiple languages, ensuring highly reliable transcription.`,
    },
    {
      icon: <FaGlasses />,
      title: "3. Subtitles Appear on AR Lens",
      desc: `Live subtitles are projected directly onto your AR glasses in a clean, readable format. 
      Smart visual cues and expressive icons appear alongside the text, helping you understand 
      both the meaning and emotion behind the speech in real time.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-6">
      {/* PAGE HEADER */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          How It Works
        </h1>
        <p className="text-lg text-slate-400">
          A seamless three-step process that transforms your speech into live,
          intelligent subtitles inside your AR glasses.
        </p>
      </motion.div>

{/* VERTICAL STEP FLOW (Top → Bottom) WITH ARROWS */}
<div className="max-w-3xl mx-auto">
  {steps.map((step, i) => (
    <div key={i}>
      {/* Step Card */}
      <motion.div
        className="bg-slate-800 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
<div className="flex justify-center mb-6">
  <div className="text-6xl text-indigo-400">
    {step.icon}
  </div>
</div>

        <h3 className="text-2xl font-semibold mb-3">
          {step.title}
        </h3>

        <p className="text-slate-300 leading-relaxed text-lg">
          {step.desc}
        </p>
      </motion.div>

      {/* Animated Arrow (only if not last card) */}
      {i < steps.length - 1 && (
        <div className="flex justify-center my-8">
          <motion.div
            className="text-4xl text-indigo-400"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      )}
    </div>
  ))}
</div>


      {/* SUBTITLE PREVIEW (Still at bottom) */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          Live Subtitle Preview
        </h2>

        <motion.div
          className="bg-black text-white p-5 rounded-xl font-mono text-lg"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Blinking live dot */}
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="mr-2 text-red-500"
          >
            ●
          </motion.span>

          {/* Subtitle text mock */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! Welcome to smart subtitles
          </motion.span>

          {/* Icon pop animation */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
            className="ml-3 inline-flex gap-2 text-indigo-400"
          >
            <FaGlasses />
            <FaRobot />
          </motion.span>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition">
          Try Demo Now
        </button>
      </motion.div>
    </div>
  );
}
