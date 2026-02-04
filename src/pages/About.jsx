import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';

// --- Sub-Component: Social Impact Counter ---
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

// --- Sub-Component: FAQ Accordion ---
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-blue-500/20 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-cyan-400' : 'text-white group-hover:text-cyan-300'}`}>
          {question}
        </span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-cyan-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-400 leading-relaxed text-base">
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
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-[#020617] text-white min-h-screen selection:bg-cyan-500/30 font-sans">
      
      {/* 1. HERO & MISSION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <motion.span 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
             className="text-cyan-400 font-mono tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Seeing is Believing
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter bg-gradient-to-b from-white via-white to-blue-500 bg-clip-text text-transparent">
            Our Story. <br />Your Vision.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
            EchoSee was founded to erase the boundaries of communication, 
            turning every spoken word into a visual bridge.
          </p>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM & SOLUTION (Split Section) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 italic">The Reality</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Over 460 million people live with disabling hearing loss. Traditional aids amplify sound, but in the chaos of a crowded cafe or a busy office, clarity is often lost.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/20 to-transparent border border-white/5 backdrop-blur-md">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 italic">The EchoSee Way</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                We use proprietary AR Waveguide technology and low-latency AI to project real-time speech-to-text directly onto your field of vision. High contrast, zero lag.
              </p>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yParallax }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full scale-75" />
            <img 
              src="/images/front.jpg"
              alt="EchoSee AR Glasses"
              className="relative z-10 w-full drop-shadow-2xl rounded-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. SOCIAL IMPACT (Counters) */}
      <section className="py-20 bg-[#050b1d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2"><Counter value="20" suffix="M+" /></h3>
            <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Global Reach</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2"><Counter value="50" suffix="+" /></h3>
            <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Dialects</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2"><Counter value="98" suffix="%" /></h3>
            <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">AI Accuracy</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-2"><Counter value="12" suffix="h" /></h3>
            <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Battery Life</p>
          </div>
        </div>
      </section>

      {/* 4. THE JOURNEY (Timeline) */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center">Our Evolution</h2>
          <div className="relative border-l border-white/10 ml-6 md:ml-0 md:left-1/2">
            {[
              { year: "2022", title: "The Foundation", desc: "First prototype developed in a small lab in Zurich." },
              { year: "2023", title: "AI Patent", desc: "Successfully patented our 'Zero-Lag' speech processing engine." },
              { year: "2024", title: "Beta Phase", desc: "Tested by 500 early adopters across 12 countries." },
              { year: "2026", title: "Global Launch", desc: "EchoSee is now the gold standard in assistive AR." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:-left-[50%]' : 'md:pl-12 md:left-0'}`}
              >
                <div className="absolute top-2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_#06b6d4] -left-[9px] md:left-auto md:right-[-9px] ring-4 ring-[#020617]" />
                <span className="text-cyan-400 font-mono text-sm uppercase mb-2 block">{step.year}</span>
                <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARTNERSHIPS (Logo Slider) */}
      <section className="py-24 bg-white/5 overflow-hidden">
        <p className="text-center text-slate-500 text-xs font-mono uppercase tracking-[0.5em] mb-12">Collaborating Institutions</p>
        <div className="flex w-[200%] animate-infinite-scroll">
          {[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8].map((item, i) => (
            <div key={i} className="flex-1 px-12 flex justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="text-2xl font-bold text-slate-300">LOGO_{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-32 px-6 max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Questions? We have answers.</h2>
          <p className="text-slate-500">Everything you need to know about the EchoSee experience.</p>
        </motion.div>
        
        <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
          <AccordionItem 
            question="How fast are the subtitles?" 
            answer="Our AI processes speech in under 50ms, meaning the text appears almost instantly as someone speaks, mimicking the natural flow of conversation."
          />
          <AccordionItem 
            question="Is it distraction-free while driving?" 
            answer="Yes. The AR display is positioned in the lower-peripheral field of view and can be toggled to 'Drive Mode' which only shows essential alerts."
          />
          <AccordionItem 
            question="Does it work without an internet connection?" 
            answer="The core subtitling engine is built into the glasses (Edge AI), so you get real-time captions even in remote areas without Wi-Fi."
          />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-8">Ready to see the world differently?</h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-full font-bold transition-all shadow-lg shadow-cyan-900/20"
        >
          Order Your EchoSee
        </motion.button>
      </section>
    </div>
  );
};

export default AboutPage;