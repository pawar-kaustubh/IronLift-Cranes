import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAVIGATION_LINKS } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const go = () => {
    setOpen(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        pathname === "/" ? "backdrop-blur-xl bg-black/50 border-b border-white/10" : "backdrop-blur-xl bg-black/70 border-b border-white/10"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          onClick={go}
          className="font-display text-xl font-bold uppercase flex items-center gap-1"
          data-testid="navbar-logo"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="text-amber-500"
          >
            <rect x="2" y="2" width="18" height="2" fill="currentColor" />
            <rect x="10" y="4" width="2" height="16" fill="currentColor" />
            <rect x="6" y="18" width="10" height="2" fill="currentColor" />
            <line
              x1="3"
              y1="3"
              x2="11"
              y2="13"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <line
              x1="19"
              y1="3"
              x2="11"
              y2="13"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
          Iron<span className="text-amber-500">Lift</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={go}
              className={`relative text-sm uppercase tracking-wide font-medium transition-colors ${
                isActive(l.path)
                  ? "text-amber-500"
                  : "text-zinc-400 hover:text-white"
              }`}
              data-testid={`nav-link-${l.path}`}
            >
              {l.label}
              {isActive(l.path) && (
                <motion.span
                  layoutId="active-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-500"
                />
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          onClick={go}
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wide text-xs px-5 py-3 transition-colors"
          data-testid="navbar-cta-button"
        >
          Get a Quote <ArrowUpRight className="w-4 h-4" />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#0a0a0a] border-t border-white/10"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAVIGATION_LINKS.map((l) => (
              <Link
                key={l.id}
                to={l.path}
                onClick={go}
                className={`text-left text-sm uppercase tracking-wide ${
                  isActive(l.path) ? "text-amber-500" : "text-zinc-300"
                }`}
                data-testid={`mobile-nav-link-${l.path}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={go}
              className="mt-2 bg-amber-500 text-black font-bold uppercase tracking-wide text-xs px-5 py-3"
              data-testid="mobile-navbar-cta"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
