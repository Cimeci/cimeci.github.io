import { motion } from 'framer-motion';

// Variantes d'animations
export const animationVariants = {
  fadeSlide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  blur: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(10px)' },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

const transitionConfig = {
  duration: 0.5,
  ease: 'easeInOut',
};

export const PageTransition = ({ 
  children, 
  variant = 'fadeSlide',
  duration = transitionConfig.duration,
  ease = transitionConfig.ease 
}) => {
  const selectedVariant = animationVariants[variant] || animationVariants.fadeSlide;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: selectedVariant.initial,
        animate: {
          ...selectedVariant.animate,
          transition: {
            duration,
            ease,
          },
        },
        exit: {
          ...selectedVariant.exit,
          transition: {
            duration: duration * 0.6,
            ease,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};