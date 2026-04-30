import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * useCounter - Animates numbers from 0 to target value when in view
 * Used in About section for stats animation
 */
export function useCounter(value, suffix = "", decimals = 0) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf;

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  const formattedValue = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString();

  return {
    ref,
    value: formattedValue,
    suffix,
  };
}
