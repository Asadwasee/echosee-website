import { motion } from 'framer-motion'

/**
 * ScrollReveal - Reusable component for scroll-based animations
 *
 * Props:
 * - children: Content to animate
 * - direction: Animation direction ("up", "down", "left", "right")
 * - delay: Animation delay in seconds
 * - duration: Animation duration in seconds
 * - once: Whether animation should happen only once (default: true)
 */

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className = ''
}) {
  // Define animation directions
  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeIn - Simple fade-in animation
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * ScaleIn - Scale and fade animation
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * SlideReveal - Slide and reveal with overflow hidden
 */
export function SlideReveal({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.8,
  once = true,
  className = ''
}) {
  const slideOffset = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 }
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{
          ...slideOffset[direction],
          opacity: 0
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1
        }}
        viewport={{ once, margin: '-50px' }}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/**
 * StaggerContainer - Container for staggered children animations
 *
 * Usage:
 * <StaggerContainer>
 *   <StaggerItem>Item 1</StaggerItem>
 *   <StaggerItem>Item 2</StaggerItem>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = ''
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, direction = 'up', className = '' }) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction]
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
