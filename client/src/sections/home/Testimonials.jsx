import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { REVIEWS, CLIENT_LOGOS } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden"
      data-testid="testimonials-section"
    >
      {/* Marquee */}
      <div className="border-y border-zinc-900 py-6 mb-20 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) => (
            <span
              key={i}
              className="type-h2 font-bold uppercase text-zinc-500 mx-8 inline-flex items-center gap-8"
            >
              {l}
              <span className="text-amber-500/30">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16">
          <div className="md:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">
              [04] Field Reports
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              What clients say
              <br />
              from the <span className="text-amber-500">jobsite.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-5 md:pl-8 flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <span className="font-mono type-small uppercase tracking-wide text-zinc-400">
              4.8 / 5 — 128 reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-8 sm:p-10 group hover:bg-zinc-950 transition-colors flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="w-8 h-8 text-amber-500 mb-6" />
              <blockquote className="type-body text-zinc-200 flex-1">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-zinc-900 flex items-center gap-4">
                <div className="w-12 h-12 overflow-hidden grayscale group-hover:grayscale-0 transition">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="type-h3 font-semibold uppercase text-white">
                    {r.name}
                  </div>
                  <div className="type-small text-zinc-500 uppercase tracking-wide">
                    {r.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
