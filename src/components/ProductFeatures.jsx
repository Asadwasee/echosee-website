import { motion } from "framer-motion";
import { FaSmile, FaStar } from "react-icons/fa";

export default function ProductFeatures({ features }) {
  return (
    <section className="py-16 px-6">
      
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl text-indigo-600 mb-3">
              {f.icon}
            </div>

            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto mb-12">
  <motion.div
    className="bg-black text-white p-4 rounded-xl font-mono text-lg text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    {/* Blinking "live" dot */}
    <motion.span
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
      className="mr-1 text-red-500"
    >
      ●
    </motion.span>

    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2 }}
      className="inline-block"
    >
      Hello! This is amazing
    </motion.span>

    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2.2, type: "spring", stiffness: 300 }}
      className="ml-3 inline-flex gap-2 text-indigo-400"
    >
      <FaSmile />
      <FaStar />
    </motion.span>
  </motion.div>
</div>
    </section>
  );
}
