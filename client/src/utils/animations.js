/**
 * Animation presets for Framer Motion
 */

export const FADE_IN_UP = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

export const FADE_IN_SCALE = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.9 },
  viewport: { once: true },
};

export const STAGGER_CONTAINER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1 },
  viewport: { once: true },
};

export const STAGGER_ITEM = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const SCALE_ON_HOVER = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 },
};

export const FADE_IN = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 },
};
    