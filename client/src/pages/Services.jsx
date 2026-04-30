import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Ruler, ShieldCheck, Truck } from "lucide-react";
import { CRANE_FLEET } from "@/data";

const ICONS = [ShieldCheck, Truck, Ruler, Compass];

export default function Services() {
  return (
    <div className="bg-black">
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">[01] Fleet Overview</div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              Crane classes built for <span className="text-amber-500">real jobsites</span>
            </motion.h1>
            <p className="type-body text-zinc-400 mt-6 max-w-2xl">
              Browse the fleet below and click any crane to send yourself straight to the contact page with the right
              crane already selected, along with matching imagery and a prefilled inquiry.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-zinc-900">
            {ICONS.map((Icon, index) => (
              <div key={index} className="bg-[#0a0a0a] p-6 sm:p-8 min-h-[140px] flex flex-col justify-between">
                <Icon className="w-6 h-6 text-amber-500" />
                <div>
                  <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">/ 0{index + 1}</div>
                  <div className="type-small uppercase tracking-[0.3em] text-white mt-2">
                    Safety first
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-zinc-900">
            {CRANE_FLEET.map((crane, index) => (
              <Link
                key={crane.slug}
                to={`/contact?crane=${crane.slug}`}
                state={{ selectedCrane: crane }}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group relative bg-[#0a0a0a] overflow-hidden border border-zinc-900 hover:border-amber-500/40 hover:bg-zinc-950 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={crane.image}
                      alt={crane.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4 font-mono type-eyebrow uppercase tracking-[0.3em] text-amber-500">
                      / {crane.tag}
                    </div>
                    <div className="absolute top-4 right-4 bg-amber-500 text-black px-2.5 py-1 font-mono type-eyebrow uppercase tracking-widest font-bold">
                      {crane.capacity}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="type-h3 font-semibold uppercase">{crane.name}</h2>
                      <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-amber-500 group-hover:rotate-45 transition-all duration-300 shrink-0" />
                    </div>
                    <p className="type-body text-zinc-400 mb-6">{crane.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {crane.details.map((detail) => (
                        <span key={detail} className="border border-zinc-800 px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-zinc-300">
                          {detail}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-5 border-t border-zinc-900">
                      <div>
                        <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">Reach</div>
                        <div className="type-small text-white mt-1">{crane.reach}</div>
                      </div>
                      <div>
                        <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">Best for</div>
                        <div className="type-small text-white mt-1">{crane.bestFor}</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}