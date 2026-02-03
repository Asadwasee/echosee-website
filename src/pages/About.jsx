import { motion, useScroll, useTransform } from "framer-motion";

const partnerLogos = [
  "/images/logos/google.svg",
  "/images/logos/microsoft.svg",
  "/images/logos/meta.svg",
  "/images/logos/unicef.png",
];

export default function About() {
  const { scrollY } = useScroll();
  const bgParallax = useTransform(scrollY, [0, 800], [0, -160]);
  const imgSlow = useTransform(scrollY, [0, 800], [0, -60]);
  const imgFast = useTransform(scrollY, [0, 800], [0, -120]);

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <motion.div
          style={{ y: bgParallax }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_65%)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Built to help you
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              see conversation
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            EchoSee is an AR smart-glasses platform that converts speech
            into real-time subtitles — making communication effortless,
            inclusive, and human.
          </p>
        </motion.div>
      </section>

      {/* ================= GLASSES VISUAL ================= */}
      <section className="py-40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16 items-center">
          <motion.img
            src="/images/left.jpg"
            alt="EchoSee glasses side view"
            style={{ y: imgSlow }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="opacity-70"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-slate-900/60 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-12
                       shadow-[0_0_60px_rgba(34,211,238,0.18)]"
          >
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4">
              Live Subtitles
            </p>
            <p className="text-2xl leading-relaxed">
              “Let’s meet at 10:30 tomorrow.”
            </p>
            <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </motion.div>

          <motion.img
            src="/images/right.jpg"
            alt="EchoSee glasses worn"
            style={{ y: imgFast }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="opacity-70"
          />
        </div>
      </section>

      {/* ================= MISSION / STORY ================= */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              To remove communication barriers by transforming spoken
              language into instant visual understanding — without
              stigma, strain, or delay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-10"
          >
            <p className="text-slate-200 leading-relaxed">
              EchoSee was created after witnessing how often people with
              hearing loss miss important moments — not because they
              aren’t engaged, but because technology wasn’t designed
              to support them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-40">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-20">
            The EchoSee Journey
          </h3>

          <div className="relative border-l border-cyan-400/20 pl-12 space-y-16">
            {[
              ["2019", "Observed the communication gap"],
              ["2020", "Built subtitle prototypes"],
              ["2022", "Refined AI speech models"],
              ["2024", "EchoSee smart glasses unveiled"],
            ].map(([year, text]) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-cyan-400
                                 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                <p className="text-sm text-cyan-400">{year}</p>
                <p className="text-lg text-slate-300 mt-1">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-10">
            Trusted & Supported By
          </p>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-20 w-max mx-auto opacity-70"
          >
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <img key={i} src={logo} className="h-30" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 bg-white/2">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-14">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {[
              [
                "How is EchoSee different from hearing aids?",
                "EchoSee visualizes speech instead of amplifying sound, reducing fatigue."
              ],
              [
                "Does EchoSee work in noisy environments?",
                "Yes. AI-based noise filtering improves subtitle clarity."
              ],
              [
                "Is EchoSee accessible?",
                "Yes. It follows WCAG guidelines and respects reduced motion settings."
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6"
              >
                <summary className="cursor-pointer text-cyan-400 font-medium">
                  {q}
                </summary>
                <p className="mt-4 text-slate-300">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
