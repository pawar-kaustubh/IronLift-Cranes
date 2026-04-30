import { motion } from "framer-motion";
import { ShieldCheck, Hammer, Clock, Truck } from "lucide-react";
import { useCounter } from "@/hooks";
import { STATS, HIGHLIGHTS, ABOUT_IMAGE, SITE_CONFIG } from "@/data";

const ICON_MAP = {
  shield: ShieldCheck,
  hammer: Hammer,
  clock: Clock,
  truck: Truck,
};

export default function AboutContent() {
  return (
    <section id="about" className="relative bg-black py-24 sm:py-32 overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-5">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">[03] About IronLift</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              Twelve years.<br />
              <span className="text-amber-500">One mission.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-7 md:pl-8 flex items-end">
            <p className="type-body text-zinc-400">
              Founded in 2012 by a third-generation rigger, IronLift Cranes grew from a single 50-ton mobile unit into
              a project partner for developers, EPC contractors, factories, and infrastructure teams across India.
              We plan the lift, mobilize the right crane, and keep the job moving safely.
            </p>
          </div>
        </div>

        {/* Image + stats split */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7 relative aspect-[16/11] overflow-hidden"
          >
            <img src={ABOUT_IMAGE} alt="Construction site under crane work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 font-mono type-eyebrow uppercase tracking-[0.3em] text-amber-500">
              // Mumbai Metro Yard — 2024
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-2 gap-px bg-zinc-900">
            {STATS.map((s, i) => (
              <StatCard key={s.label} stat={s} index={i} />
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900">
          {HIGHLIGHTS.map((h, i) => {
            const IconComponent = ICON_MAP[h.icon];
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black p-6 sm:p-8 group hover:bg-zinc-950 transition-colors"
                data-testid={`highlight-${i}`}
              >
                <IconComponent className="w-7 h-7 text-amber-500 mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="type-h3 font-semibold uppercase mb-2">{h.title}</h3>
                <p className="type-body text-zinc-400">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-zinc-900">
          <DetailCard
            label="Base yard"
            title="Mumbai dispatch"
            text={SITE_CONFIG.addressLines.join(" ")}
          />
          <DetailCard
            label="Coverage"
            title="Pan-India moves"
            text="Mumbai, Pune, Ahmedabad, Surat, Bengaluru, Hyderabad, and project mobilization across major industrial corridors."
          />
          <DetailCard
            label="Planning"
            title="Lift-first approach"
            text="Site survey, load chart selection, route planning, rigging support, and operator assignment before the crane rolls in."
          />
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const { ref, value, suffix } = useCounter(stat.num, stat.suffix, stat.decimals || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-black p-6 sm:p-8 flex flex-col justify-between min-h-[160px]"
      data-testid={`about-stat-${index}`}
    >
      <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">/ 0{index + 1}</div>
      <div className="type-h2 font-bold text-white">
        <span ref={ref}>{value}{suffix}</span>
      </div>
      <div className="type-small text-zinc-500 uppercase tracking-widest">{stat.label}</div>
    </motion.div>
  );
}

function DetailCard({ label, title, text }) {
  return (
    <div className="bg-[#0a0a0a] p-6 sm:p-8">
      <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">{label}</div>
      <h3 className="type-h3 font-semibold uppercase mt-4 mb-3 text-white">{title}</h3>
      <p className="type-body text-zinc-400">{text}</p>
    </div>
  );
}
