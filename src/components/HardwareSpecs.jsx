import { motion } from "framer-motion";

export default function HardwareSpecs() {
  const specs = [
    "AR lens + micro projector",
    "AI processor chip",
    "Noise-cancelling microphone",
    "Battery (10–12 hours)",
    "Optional camera",
  ];

  return (
    <section className="py-16 px-6 bg-slate-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Hardware Specifications
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex justify-center"
          animate={{ rotateY: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/images/front.jpg"
            alt="AR Glasses"
            className="w-120 h-auto"
          />
        </motion.div>

        <div className="space-y-4">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border-l-4 border-indigo-500 pl-4 py-2"
            >
              {spec}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
