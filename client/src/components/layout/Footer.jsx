import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVIGATION_LINKS } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-black border-t border-zinc-900 pt-20 pb-8" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="type-h1 font-bold uppercase">
              Iron<span className="text-amber-500">Lift</span><br />Cranes.
            </div>
            <p className="type-body text-zinc-500 mt-6 max-w-md">
              Heavy lifting, done right. Premium crane hire across industrial, commercial &amp; infrastructure projects since 2012.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">ISO 9001</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">ISO 45001</span>
              <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              <span className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">24/7</span>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600 mb-5">[01] Navigate</div>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((it) => (
                <li key={it.path}>
                  <Link
                    to={it.path}
                    className="group inline-flex items-center gap-1 type-body text-zinc-300 hover:text-amber-500 transition-colors"
                    data-testid={`footer-nav-${it.path}`}
                  >
                    {it.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600 mb-5">[02] Reach Us</div>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-1" />
                <span className="type-body">Plot 12, MIDC Industrial Area,<br />Andheri East, Mumbai 400093</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <a href="tel:+912240025566" className="type-body hover:text-amber-500" data-testid="footer-phone-link">
                  +91 22 4002 5566
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:lift@ironlift.in" className="type-body hover:text-amber-500" data-testid="footer-email-link">
                  lift@ironlift.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono type-small uppercase tracking-[0.25em] text-zinc-600">
            © {year} IronLift Cranes. All rights reserved.
          </div>
          <div className="font-mono type-small uppercase tracking-[0.25em] text-zinc-600">
            Built for the heavy. // v2.0
          </div>
        </div>
      </div>
    </footer>
  );
}
