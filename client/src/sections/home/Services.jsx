import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="md:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">
              [02] Our Fleet
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              Cranes built
              <br />
              for the <span className="text-amber-500">heavy.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="type-body text-zinc-400">
              Six rig classes. One promise — certified operators, on-time
              delivery, zero-incident hoisting. Pick the lift profile that
              matches your jobsite.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-amber-500 hover:text-amber-400 transition-colors"
            >
              View the full fleet <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={`/contact?crane=${s.slug}`}
              state={{ selectedCrane: s }}
              className="block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group flex flex-col h-full relative bg-[#0a0a0a] hover:bg-zinc-950 transition-all duration-300 overflow-hidden border border-zinc-900 hover:border-amber-500/40 hover:-translate-y-1"
                data-testid={`service-card-${s.tag}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute top-4 left-4 font-mono type-eyebrow uppercase tracking-[0.3em] text-amber-500">
                    / {s.tag}
                  </div>

                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-2.5 py-1 font-mono type-eyebrow uppercase tracking-widest font-bold">
                    {s.capacity}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="type-h3 font-semibold uppercase">
                      {s.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-amber-500 group-hover:rotate-45 transition-all duration-300" />
                  </div>

                  {/* Description */}
                  <p className="type-body text-zinc-400 mb-5 flex-grow">
                    {s.summary}
                  </p>

                  {/* Bottom fixed section */}
                  <div className="mt-auto flex items-center gap-4 pt-4 border-t border-zinc-900">
                    <div>
                      <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">
                        Reach
                      </div>
                      <div className="type-small font-semibold text-white mt-0.5">
                        {s.height}
                      </div>
                    </div>

                    <div className="w-px h-8 bg-zinc-900" />

                    <div>
                      <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">
                        Capacity
                      </div>
                      <div className="type-small font-semibold text-white mt-0.5">
                        {s.capacity}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}