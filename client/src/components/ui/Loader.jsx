import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="page-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Crane hook SVG pulling up */}
            <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
              <line x1="30" y1="0" x2="30" y2="70" stroke="#a1a1aa" strokeWidth="1" />
              <motion.g
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="22" y="68" width="16" height="14" fill="#f59e0b" stroke="#000" strokeWidth="1" />
                <path
                  d="M30 82 Q30 102 22 102 L22 96 L26 96 L26 100"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="square"
                />
              </motion.g>
            </svg>
            <div className="flex flex-col items-center gap-3">
              <div className="type-h2 uppercase text-white font-bold">
                Iron<span className="text-amber-500">Lift</span>
              </div>
              <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-zinc-500">
                Loading rig...
              </div>
              <div className="w-48 h-[2px] bg-zinc-800 mt-2 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full w-1/3 bg-amber-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
