import React, { useState } from 'react'
import { Menu, X, ShoppingCart, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Product', href: '/product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-slate-950/90 text-slate-50 sticky top-0 z-50 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
              aria-label="EchoSee Home"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>

              <div className="leading-tight">
                <div className="font-bold text-xl tracking-tight text-white uppercase">
                  ECHO<span className="text-cyan-400">SEE</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-semibold">
                  AR Smart Glasses
                </div>
              </div>
            </a>
          </div>

          {/* Desktop navbar */}
          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Primary"
          >
            {navItems.map((it) => (
              <motion.a
                key={it.label}
                href={it.href}
                className="relative text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {it.label}
              </motion.a>
            ))}
          </nav>

          {/* Right: Pre-Order Button */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/preorder"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(34,211,238,0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-bold text-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              Pre-Order
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-cyan-400"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle Menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-slate-900 border-t border-cyan-500/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-medium text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  {it.label}
                </a>
              ))}
              <a
                href="/preorder"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 py-4 rounded-xl font-bold"
              >
                Pre-Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}