import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { useFormValidation } from "@/hooks";
import { PROJECT_TYPES, buildContactInitialState } from "@/data";
import { validateContactForm } from "@/utils/validators";

export default function ContactForm({ selectedCrane = null }) {
  const {
    form,
    errors,
    submitted,
    submitting,
    setSubmitted,
    setFieldValue,
    handleSubmit,
  } = useFormValidation(buildContactInitialState(selectedCrane), async () => {
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Quote request received — we'll be in touch within 4 hours.");
  });

  const set = (k) => (e) => {
    setFieldValue(k, e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const ok = await handleSubmit(validateContactForm);
    if (!ok) toast.error("Check the highlighted fields.");
  };

  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 overflow-hidden" data-testid="contact-section">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-5">[05] Get Project</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="type-h1 font-bold uppercase"
            >
              Start your<br />
              <span className="text-amber-500">heavy lift.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-5 md:pl-8 flex items-end">
            <p className="type-body text-zinc-400">
              Tell us about the project. We&apos;ll respond with a rig recommendation, certified-operator availability,
              and a transparent quote within 4 business hours.
            </p>
          </div>
        </div>

        {selectedCrane && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-px bg-zinc-900 mb-8"
          >
            <div className="lg:col-span-4 relative aspect-[4/3] overflow-hidden">
              <img
                src={selectedCrane.image}
                alt={selectedCrane.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="lg:col-span-8 bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div>
                <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-4">
                  Selected crane
                </div>
                <h3 className="type-h2 font-bold uppercase text-white">{selectedCrane.name}</h3>
                <p className="type-body text-zinc-400 mt-3 max-w-2xl">{selectedCrane.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {selectedCrane.details.map((detail) => (
                  <span key={detail} className="border border-zinc-800 px-3 py-2 text-xs uppercase tracking-[0.25em] text-zinc-300">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-12 gap-px bg-zinc-900">
          {/* Form */}
          <div className="md:col-span-8 bg-black p-8 sm:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start gap-6 py-8"
                data-testid="contact-success"
              >
                <div className="w-14 h-14 bg-amber-500 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="type-h2 font-bold uppercase">
                  Request received.
                </h3>
                <p className="text-zinc-400 max-w-md">
                  Your quote request is in our dispatch queue. A senior project manager will reach out within
                  4 business hours with rig options and pricing.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-2 border border-zinc-700 hover:border-amber-500 hover:text-amber-500 text-white font-bold uppercase tracking-widest text-xs px-5 py-3 transition-colors"
                  data-testid="contact-submit-another"
                >
                  Submit another <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id="name" label="Full Name" value={form.name} onChange={set("name")}
                    placeholder="John Riggington" error={errors.name} />
                  <Field id="email" type="email" label="Email" value={form.email} onChange={set("email")}
                    placeholder="you@company.com" error={errors.email} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field id="phone" type="tel" label="Phone" value={form.phone} onChange={set("phone")}
                    placeholder="+91 98 7654 3210" error={errors.phone} />
                  <div>
                    <Label htmlFor="projectType" idx="04">Project Type</Label>
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={set("projectType")}
                      className={`w-full bg-transparent border ${
                        errors.projectType ? "border-red-500" : "border-zinc-800"
                      } focus:border-amber-500 outline-none px-4 py-4 text-white text-sm transition-colors appearance-none`}
                      data-testid="contact-input-projectType"
                    >
                      <option value="" className="bg-black">Select rig type…</option>
                      {PROJECT_TYPES.map((p) => (
                        <option key={p} value={p} className="bg-black">{p}</option>
                      ))}
                    </select>
                    {errors.projectType && <ErrorText>{errors.projectType}</ErrorText>}
                  </div>
                </div>
                <Field id="location" label="Project Location" value={form.location} onChange={set("location")}
                  placeholder="City, State / Address" error={errors.location} />
                <div>
                  <Label htmlFor="message" idx="06">Project Details</Label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={set("message")}
                    rows={5}
                    placeholder="Lift weight, jobsite conditions, timeline…"
                    className={`w-full bg-transparent border ${
                      errors.message ? "border-red-500" : "border-zinc-800"
                    } focus:border-amber-500 outline-none px-4 py-4 text-white text-sm transition-colors resize-none`}
                    data-testid="contact-input-message"
                  />
                  {errors.message && <ErrorText>{errors.message}</ErrorText>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center justify-between gap-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-black font-bold uppercase tracking-widest text-sm px-7 py-5 transition-colors w-full sm:w-auto"
                  data-testid="contact-submit-button"
                >
                  {submitting ? "Dispatching…" : "Submit Request"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <aside className="md:col-span-4 bg-[#0a0a0a] p-8 sm:p-12 flex flex-col justify-between gap-12">
            <div>
              <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-zinc-500 mb-6">// Direct line</div>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-500 mt-1" />
                  <div>
                    <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">24/7 Dispatch</div>
                    <a href="tel:+912240025566" className="type-body font-medium text-white hover:text-amber-500"
                      data-testid="contact-phone-link">+91 22 4002 5566</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-500 mt-1" />
                  <div>
                    <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">Email</div>
                    <a href="mailto:lift@ironlift.in" className="type-body font-medium text-white hover:text-amber-500"
                      data-testid="contact-email-link">lift@ironlift.in</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-500 mt-1" />
                  <div>
                    <div className="font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-600">Yard</div>
                    <div className="type-small text-white">Plot 12, MIDC Industrial Area,<br />Andheri East, Mumbai 400093</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border-t border-zinc-900 pt-6">
              <div className="font-mono type-eyebrow uppercase tracking-[0.4em] text-amber-500 mb-3">Response SLA</div>
              <div className="type-h2 font-bold">&lt; 4 hrs</div>
              <p className="type-small text-zinc-500 mt-2">
                Average reply time during business hours. Emergency lifts route directly to dispatch.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Label({ htmlFor, idx, children }) {
  return (
    <label htmlFor={htmlFor} className="flex items-center gap-2 font-mono type-eyebrow uppercase tracking-[0.3em] text-zinc-500 mb-3">
      <span className="text-amber-500">/{idx}</span>
      {children}
    </label>
  );
}

function ErrorText({ children }) {
  return (
    <div className="mt-2 font-mono type-small uppercase tracking-widest text-red-500">! {children}</div>
  );
}

function Field({ id, label, value, onChange, placeholder, error, type = "text" }) {
  const idx = { name: "01", email: "02", phone: "03", location: "05" }[id] || "00";
  return (
    <div>
      <Label htmlFor={id} idx={idx}>{label}</Label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent border ${
          error ? "border-red-500" : "border-zinc-800"
        } focus:border-amber-500 outline-none px-4 py-4 text-white text-sm transition-colors`}
        data-testid={`contact-input-${id}`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
