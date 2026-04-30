import ContactForm from "@/sections/contact/ContactForm";
import { useLocation } from "react-router-dom";
import { getCraneBySlug } from "@/data";
import { SITE_CONFIG } from "@/data/siteConfig";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCrane =
    location.state?.selectedCrane ?? getCraneBySlug(params.get("crane"));
  const heroImage = selectedCrane?.accentImage || selectedCrane?.image;

  return (
    <div className="bg-black">
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">
              [04] Contact Dispatch
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              {selectedCrane ? (
                <>
                  Quote this{" "}
                  <span className="text-amber-500">{selectedCrane.name}</span>
                </>
              ) : (
                <>
                  Start your <span className="text-amber-500">lift plan</span>
                </>
              )}
            </motion.h1>
            <p className="type-body text-zinc-400 mt-6 max-w-2xl">
              Share the lift weight, timeline, and site conditions. We&apos;ll
              match the right crane, operator crew, and mobilization plan for
              the job.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl">
              <InfoChip label="Phone" value={SITE_CONFIG.phone} icon={Phone} />
              <InfoChip label="Email" value={SITE_CONFIG.email} icon={Mail} />
              <InfoChip
                label="Yard"
                value={SITE_CONFIG.addressLines.join(" ")}
                icon={MapPin}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-zinc-900 bg-[#0a0a0a] overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img loading= "lazy"
                  src={
                  
                    "https://media.istockphoto.com/id/1301247952/photo/a-bucket-or-aerial-platform-boom-truck-driving-through-the-desert-of-utah-near-moab-wilson.webp?a=1&b=1&s=612x612&w=0&k=20&c=woZgCHv9zWSXdQuSWOKYUBLOh4qWHZbb55HeB6eMsV8="
                  }
                  alt={
                    selectedCrane
                      ? selectedCrane.name
                      : "IronLift crane dispatch"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 border-t border-zinc-900">
                <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-zinc-500 mb-4">
                  Dispatch window
                </div>
                <div className="type-h2 font-bold text-white">24/7</div>
                <p className="type-small text-zinc-400 mt-2">
                  Emergency lift support, site surveys, and quote responses are
                  handled by dispatch and project managers.
                </p>
                <a
                  href="mailto:lift@ironlift.in"
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Send project details <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm
        key={selectedCrane?.slug ?? "general-contact"}
        selectedCrane={selectedCrane}
      />
    </div>
  );
}

function InfoChip({ label, value, icon: Icon }) {
  return (
    <div className="border border-zinc-900 bg-[#0a0a0a] p-4 flex items-start gap-3">
      <Icon className="w-4 h-4 text-amber-500 mt-1" />
      <div>
        <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">
          {label}
        </div>
        <div className="type-small text-white mt-1">{value}</div>
      </div>
    </div>
  );
}
