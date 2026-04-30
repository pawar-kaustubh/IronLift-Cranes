import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO_BACKGROUND, FEATURED_RIGS } from "@/data/navigation";

export default function Hero() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const go = (path) => {
    navigate(path);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
      data-testid="hero-section"
    >
      {/* Parallax BG */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <img
          src={HERO_BACKGROUND}
          alt="Industrial cranes at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </motion.div>

      {/* Top status bar */}
      <div className="relative z-10 pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500">
            <span className="w-2 h-2 bg-amber-500 animate-pulse" />
            Active fleet // 24 rigs operational
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 sm:pt-28 pb-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="type-h1 font-bold uppercase max-w-5xl"
        >
          Reliable
          <br />
          <span className="inline-flex items-center gap-4 flex-wrap">
            Crane <span className="text-amber-500">Services</span>
          </span>
          <br />
          <span className="text-zinc-500">For Every Project.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
        >
            <p className="md:col-span-5 type-body text-zinc-400 max-w-md">
              From 20-ton mobile units to 250-ton crawler giants — IronLift
              delivers certified operators and on-time rigs to industrial,
              commercial, and infrastructure jobsites across India.
            </p>

          <div className="md:col-span-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => go("/contact")}
              className="group inline-flex items-center justify-between gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-widest text-sm px-7 py-5 transition-colors w-full sm:w-auto"
              data-testid="hero-cta-quote"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => go("/services")}
              className="inline-flex items-center justify-between gap-2 border border-zinc-700 hover:border-amber-500 hover:text-amber-500 text-white font-bold uppercase tracking-widest text-sm px-7 py-5 transition-colors w-full sm:w-auto"
              data-testid="hero-cta-fleet"
            >
              View Fleet
            </button>
          </div>

          <div className="md:col-span-3 md:text-right">
            <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-500 mb-2">
              Track record
            </div>
            <div className="type-h2 font-bold text-white">
              12<span className="text-amber-500">+</span>
            </div>
            <div className="type-small text-zinc-500 uppercase tracking-wide">
              Years lifting heavy
            </div>
          </div>
        </motion.div>

        {/* Featured strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-20 sm:mt-32 border-t border-white/10 pt-6"
        >
          <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-zinc-500 mb-5">
            // Featured rigs
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {FEATURED_RIGS.map((f) => (
              <button
                key={f.tag}
                onClick={() => go("/services")}
                className="group bg-black hover:bg-zinc-950 text-left p-5 transition-colors"
                data-testid={`hero-featured-${f.tag}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600 group-hover:text-amber-500 transition">
                    [{f.tag}]
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-amber-500 group-hover:-rotate-45 transition-all" />
                </div>
                <div className="type-h3 font-semibold uppercase">
                  {f.name}
                </div>
                <div className="type-small text-zinc-500 mt-1">
                  Capacity / {f.cap}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 flex flex-col items-center gap-2 z-10"
      >
        <ChevronDown className="w-5 h-5" />
        <span className="font-mono type-eyebrow uppercase tracking-[0.4em]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
