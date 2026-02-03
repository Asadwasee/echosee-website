import { motion } from "framer-motion";

export default function ProductPage() {
  const features = [
    { title: "Real-time Transcription", desc: "Live captions as you speak with near-zero latency." },
    { title: "Adjustable Font Size", desc: "Increase or decrease subtitle size instantly." },
    { title: "Emoji Subtitles", desc: "Smart emoji suggestions based on speech emotion." },
    { title: "Multilingual Support", desc: "Urdu + English with 20+ premium languages." },
    { title: "Offline AI Processing", desc: "Works even without an internet connection." },
    { title: "Noise-Cancelling Mic", desc: "Crystal clear voice capture in noisy environments." },
    { title: "Stylish Design", desc: "Minimal, modern, and user-friendly UI." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Smart Live Subtitles</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Experience intelligent, real-time subtitles with AI-powered transcription, emojis, and multilingual support.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition">
            Try Demo
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Live Subtitle Preview</h2>
        <motion.div
          className="bg-black text-white p-4 rounded-xl font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          🎙️ "Hello! Welcome to our AI subtitle experience..."
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">Smart Emoji Subtitles</h2>
        <motion.div
          className="text-5xl mt-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          😊 🎉 🎙️
        </motion.div>
      </section>

      <section className="text-center py-16 bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold">Get Started Today</h2>
        <p className="mt-2">Download now and experience smart subtitles.</p>
        <button className="mt-4 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold">
          Download App
        </button>
      </section>
    </div>
  );
}
