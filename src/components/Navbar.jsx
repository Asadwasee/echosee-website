import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Globe, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("echosee-theme") || "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("echosee-theme", theme);
    } catch {}
  }, [theme]);

  return (
    <header className="bg-slate-950/90 text-slate-50 sticky top-0 z-40 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1" aria-label="EchoSee home">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>

              <div className="leading-tight">
                <div className="font-bold text-xl tracking-tight text-white">
                  ECHO<span className="text-cyan-400">SEE</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-semibold">
                  AR Smart Glasses
                </div>
              </div>
            </a>
          </div>

          {/* Center nav - desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((it) => (
              <motion.a
                key={it.label}
                href={it.href}
                className="relative text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {it.label}
              </motion.a>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="p-2 rounded-full hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-400 transition-all"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <motion.a
              href="#preorder"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center gap-2 bg-cyan-500 text-slate-950 px-5 py-2 rounded-full font-bold text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Pre-Order
            </motion.a>

            <button
              className="md:hidden p-2 text-cyan-400"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900 border-t border-cyan-500/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((it) => (
                <a key={it.label} href={it.href} className="text-xl font-medium text-slate-200 hover:text-cyan-400">
                  {it.label}
                </a>
              ))}
              <a href="#preorder" className="flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 py-4 rounded-xl font-bold">
                Pre-Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}