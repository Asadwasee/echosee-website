import { motion } from "framer-motion";

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
            {/* 👉 ICON HERE */}
            <div className="text-3xl text-indigo-600 mb-3">
              {f.icon}
            </div>

            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
