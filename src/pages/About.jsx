import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';

// --- Assets ---
const partners = [
  { name: "Google", url: "/images/logos/google.svg" },
  { name: "Meta", url: "/images/logos/meta.png" },
  { name: "Microsoft", url: "/images/logos/microsoft.svg" },
  { name: "MIT", url: "/images/logos/mit.png" },
  { name: "TechCrunch", url: "/images/logos/TechCrunch.svg" },
  { name: "Unicef", url: "/images/logos/unicef.png" },
  { name: "Verge", url: "/images/logos/verge.svg" },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Architect",
    content: "EchoSee changed my professional life. I can finally follow board meetings without a sign language interpreter. The glass design is so discreet!",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Student",
    content: "The real-time subtitles are a game changer for lectures. It's like having the world captioned in front of my eyes.",
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Rodriguez",
    role: "Retired Teacher",
    content: "I can finally hear my grandkids' stories again. It's not just technology; it's a reconnection to my family.",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

// --- Sub-Components ---
const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4 md:py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group gap-4"
      >
        <span className={`text-base md:text-lg font-medium transition-colors ${isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-300'}`}>
          {question}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-cyan-500 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 pb-2 text-slate-400 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden bg-[#020617]">
      
      {/* 1. GLOBAL BACKGROUND GRADIENT & BLUR BLOBS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617]" />
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10">
        
        {/* 2. HERO SECTION WITH GLASS DISTORTION */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 backdrop-blur-[1px] pointer-events-none" 
               style={{ maskImage: 'radial-gradient(circle, transparent 40%, black 100%)', WebkitMaskImage: 'radial-gradient(circle, transparent 40%, black 100%)' }} 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-cyan-400 font-mono tracking-widest uppercase text-[10px] md:text-xs mb-8 backdrop-blur-md">
              Seeing is Believing
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter bg-gradient-to-b from-white via-white to-blue-500 bg-clip-text text-transparent leading-tight">
              Our Story. <br />Your Vision.
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light px-4">
              EchoSee was founded to erase the boundaries of communication, turning every spoken word into a visual bridge.
            </p>
          </motion.div>
        </section>

        {/* 3. PROBLEM & SOLUTION GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-blue-400 mb-4 italic">The Reality</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Over 460 million people live with disabling hearing loss. Traditional aids often fail in noisy environments.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 italic">The EchoSee Way</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our AR Waveguide technology projects real-time speech-to-text directly onto your field of vision.
                </p>
              </div>
            </div>
            <motion.div style={{ y: yParallax }} className="relative flex justify-center">
              <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full scale-75" />
              <img src="/images/front.jpg" alt="EchoSee AR" className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl" />
            </motion.div>
          </div>
        </section>

        {/* 4. IMPACT COUNTERS */}
        <section className="py-20 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: "20", s: "M+", label: "Global Reach" },
              { val: "50", s: "+", label: "Dialects" },
              { val: "98", s: "%", label: "AI Accuracy" },
              { val: "12", s: "h", label: "Battery Life" }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-2"><Counter value={stat.val} suffix={stat.s} /></h3>
                <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. COMMUNITY REVIEWS (GLASS LOOK) */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Voices of Change</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Real stories from the community empowered by EchoSee technology.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl flex flex-col h-full transition-colors hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-cyan-500/30 object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed flex-grow">"{t.content}"</p>
                <div className="mt-6 flex text-cyan-500 text-xs gap-1">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. TIMELINE */}
        <section className="py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">Our Evolution</h2>
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
            {[
              { year: "2022", title: "The Foundation", desc: "First prototype developed in a Zurich lab." },
              { year: "2023", title: "AI Patent", desc: "Patented our 'Zero-Lag' speech engine." },
              { year: "2024", title: "Beta Phase", desc: "Tested by 500 adopters in 12 countries." },
              { year: "2026", title: "Global Launch", desc: "The gold standard in assistive AR." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative mb-16 md:w-1/2 ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:-left-[50%]' : 'md:pl-12 md:left-0'}`}
              >
                <div className="absolute top-2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] -left-[38px] md:left-auto md:right-[-6.5px] ring-4 ring-[#020617] z-10" />
                <span className="text-cyan-400 font-mono text-xs uppercase mb-1 block">{step.year}</span>
                <h4 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. LOGO SLIDER */}
        <section className="py-20 bg-white/5 overflow-hidden">
          <p className="text-center text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-12 px-4">
            As Seen In & Partnered With
          </p>
          <div className="flex w-[200%] md:w-[150%] animate-infinite-scroll items-center">
            {[...partners, ...partners].map((logo, i) => (
              <div key={i} className="flex-1 px-8 md:px-16 flex justify-center items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100  transition-all duration-500">
                <img src={logo.url} alt={logo.name} className="h-6 md:h-20 w-auto object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* 8. FAQ SECTION */}
        <section className="py-32 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Questions? We have answers.</h2>
          <div className="bg-white/[0.03] rounded-3xl p-6 md:p-8 border border-white/[0.08] backdrop-blur-xl">
            <AccordionItem 
              question="How fast are the subtitles?" 
              answer="Our AI processes speech in under 50ms, appearing almost instantly as someone speaks."
            />
            <AccordionItem 
              question="Is it distraction-free while driving?" 
              answer="Yes. The AR display is positioned in the lower-peripheral field of view and features a dedicated 'Drive Mode'."
            />
            <AccordionItem 
              question="Does it work offline?" 
              answer="The core subtitling engine uses Edge AI, meaning it works perfectly without an internet connection."
            />
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="py-24 text-center border-t border-white/5 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">Ready to see the world differently?</h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-12 py-5 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold shadow-[0_0_30px_rgba(8,145,178,0.3)] transition-all"
          >
            Order Your EchoSee
          </motion.button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;