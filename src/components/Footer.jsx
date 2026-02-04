import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tighter">
                ECHO<span className="text-cyan-400">SEE</span>
              </h3>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Empowering 430M+ people globally [cite: 115] with real-time AR subtitles. 
                Conversations without barriers.
              </p>
            </div>
            
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#22d3ee" }}
                  className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 transition-colors"
                  href="#"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6 underline decoration-cyan-500 decoration-2 underline-offset-8">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#product" className="hover:text-cyan-400 transition-colors">Smart Features</a></li>
              <li><a href="#how" className="hover:text-cyan-400 transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#impact" className="hover:text-cyan-400 transition-colors">Social Impact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6 underline decoration-cyan-500 decoration-2 underline-offset-8">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:support@echosee.ai" className="hover:text-white transition-colors">support@echosee.ai</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+92 300 0000000</span>
              </li>
              <li className="pt-2">
                <span className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400">
                  24/7 AI Assistance
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section [cite: 147] */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">
              Join the Beta
            </h4>
            <p className="text-sm text-slate-400 mb-4">Get early access to premium features[cite: 89].</p>
            <form className="relative group">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-cyan-500 rounded-lg text-slate-950 hover:bg-cyan-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} EchoSee Technologies — Designing for Silence.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}