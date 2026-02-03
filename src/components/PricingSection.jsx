import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Crown, ArrowRight } from 'lucide-react'

const pricingPlans = {
  basic: {
    name: 'Basic',
    price: '$299',
    description: 'Perfect for everyday conversations',
    icon: Zap,
    iconColor: 'text-cyan-400',
    glowColor: 'cyan',
    features: [
      'Real-time subtitle display',
      '5 language support',
      '8-hour battery life',
      'Basic noise cancellation',
      'Mobile app sync',
      '1-year warranty'
    ],
    highlighted: false
  },
  premium: {
    name: 'Premium',
    price: '$599',
    description: 'Ultimate AR experience with advanced features',
    icon: Crown,
    iconColor: 'text-amber-400',
    glowColor: 'amber',
    features: [
      'Everything in Basic',
      '50+ language support',
      'AI-powered context analysis',
      'Advanced noise cancellation',
      'Offline translation mode',
      'Priority 24/7 support',
      'Lifetime warranty',
      'Exclusive beta features'
    ],
    highlighted: true
  }
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState('premium')

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4
      }
    })
  }

  return (
    <section
      id="pricing"
      className="relative py-24 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-6 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
          >
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Pricing Plans
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Choose Your <span className="text-cyan-400">Vision</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select the perfect plan to unlock a world without barriers
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full p-2">
            <button
              onClick={() => setSelectedPlan('basic')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPlan === 'basic'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Basic Plan
            </button>
            <button
              onClick={() => setSelectedPlan('premium')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedPlan === 'premium'
                  ? 'bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Premium Plan
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {Object.entries(pricingPlans).map(([key, plan]) => {
            const Icon = plan.icon
            const isActive = selectedPlan === key
            const isHighlighted = plan.highlighted

            return (
              <motion.div
                key={key}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${isActive ? 'md:scale-105' : ''}`}
              >
                {/* Recommended Badge */}
                {isHighlighted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="bg-linear-to-r from-amber-500 to-orange-500 text-slate-950 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      ⭐ RECOMMENDED
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full bg-slate-900/50 backdrop-blur-md border rounded-2xl p-8 transition-all duration-500 ${
                    isHighlighted
                      ? 'border-amber-500/50 shadow-[0_0_40px_rgba(251,191,36,0.2)]'
                      : 'border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
                  } ${
                    isActive
                      ? isHighlighted
                        ? 'shadow-[0_0_60px_rgba(251,191,36,0.4)]'
                        : 'shadow-[0_0_50px_rgba(6,182,212,0.3)]'
                      : ''
                  } hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] group-hover:border-opacity-100`}
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                      plan.glowColor === 'amber'
                        ? 'from-amber-500 to-orange-500'
                        : 'from-cyan-500 to-blue-500'
                    }`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-4 rounded-xl mb-6 ${
                        plan.glowColor === 'amber'
                          ? 'bg-amber-500/10 border border-amber-500/30'
                          : 'bg-cyan-500/10 border border-cyan-500/30'
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${plan.iconColor}`} />
                    </motion.div>

                    {/* Plan Name */}
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-400 mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <motion.div
                        key={selectedPlan}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline gap-2"
                      >
                        <span
                          className={`text-6xl font-bold ${
                            plan.glowColor === 'amber'
                              ? 'text-amber-400'
                              : 'text-cyan-400'
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span className="text-slate-500 text-lg">
                          /one-time
                        </span>
                      </motion.div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <Check
                            className={`w-5 h-5 mt-0.5 shrink-0 ${
                              plan.glowColor === 'amber'
                                ? 'text-amber-400'
                                : 'text-cyan-400'
                            }`}
                          />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-bold text-slate-950 flex items-center justify-center gap-2 transition-all duration-300 ${
                        isHighlighted
                          ? 'bg-linear-to-r from-amber-500 to-orange-500 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]'
                          : 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-500 mt-12 text-sm"
        >
          All plans include free shipping worldwide • 30-day money-back
          guarantee
        </motion.p>
      </div>
    </section>
  )
}
