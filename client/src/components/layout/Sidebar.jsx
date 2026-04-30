import { useScroll, useTransform, motion } from "framer-motion";

/**
 * Fixed side SVG crane — boom + tower stays put, hook lowers as user scrolls.
 * Hidden on small screens to keep the layout clean.
 */
export default function Sidebar() {
  const { scrollYProgress } = useScroll();
  // Hook lowers from 60 -> 540 as page scrolls
  const hookY = useTransform(scrollYProgress, [0, 1], [60, 540]);
  const cableLen = useTransform(scrollYProgress, [0, 1], [60, 540]);
  const rot = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <div
      className="hidden lg:block fixed top-0 right-0 h-screen w-[140px] z-30 pointer-events-none select-none"
      aria-hidden="true"
      data-testid="side-crane"
    >
      <svg
        width="140"
        height="100%"
        viewBox="0 0 140 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        {/* tower base */}
        <g stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.85">
          {/* vertical mast */}
          <line x1="100" y1="0" x2="100" y2="60" />
          <line x1="115" y1="0" x2="115" y2="60" />
          {/* mast diagonal lattice */}
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <line x1="100" y1={i * 10} x2="115" y2={i * 10 + 10} />
              <line x1="115" y1={i * 10} x2="100" y2={i * 10 + 10} />
              <line x1="100" y1={i * 10} x2="115" y2={i * 10} />
            </g>
          ))}

          {/* horizontal jib (boom) extending left */}
          <line x1="100" y1="55" x2="20" y2="55" />
          <line x1="100" y1="70" x2="20" y2="70" />
          {/* jib lattice */}
          {Array.from({ length: 8 }).map((_, i) => {
            const x = 20 + i * 10;
            return (
              <g key={`j${i}`}>
                <line x1={x} y1="55" x2={x + 10} y2="70" />
                <line x1={x + 10} y1="55" x2={x} y2="70" />
                <line x1={x} y1="55" x2={x} y2="70" />
              </g>
            );
          })}
          {/* counter jib (right of mast) */}
          <line x1="115" y1="55" x2="135" y2="55" />
          <line x1="115" y1="70" x2="135" y2="70" />
          <rect x="120" y="48" width="14" height="6" fill="#f59e0b" stroke="none" />

          {/* operator cabin */}
          <rect x="93" y="70" width="22" height="14" fill="#f59e0b" stroke="#f59e0b" />
        </g>

        {/* trolley + cable + hook (moves with scroll) */}
        <motion.line x1="38" x2="38" y1="68" stroke="#a1a1aa" strokeWidth="1" y2={cableLen} />

        <motion.g style={{ y: hookY, rotate: rot, originX: "38px", originY: "0px" }}>
          {/* trolley shadow at top of cable */}
          <rect x="32" y="64" width="12" height="6" fill="#27272a" />
          {/* hook block */}
          <rect x="30" y="0" width="16" height="14" fill="#f59e0b" stroke="#000" strokeWidth="1" />
          <rect x="33" y="3" width="3" height="8" fill="#0a0a0a" />
          <rect x="40" y="3" width="3" height="8" fill="#0a0a0a" />
          {/* hook curve */}
          <path
            d="M38 14 Q38 30 30 30 L30 24 L34 24 L34 28"
            stroke="#f59e0b"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="square"
          />
        </motion.g>
      </svg>
    </div>
  );
}
