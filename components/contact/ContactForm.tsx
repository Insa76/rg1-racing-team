"use client";

import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

import Section from "@/components/ui/Section";

type FormStatus = "idle" | "sending" | "success";

export default function ContactForm() {
  const [reason, setReason] = useState("general");
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
  const updateReason = () => {
    const params = new URLSearchParams(window.location.search);
    const selectedReason = params.get("reason");

    const validReasons = [
      "partnership",
      "performance",
      "media",
      "general",
    ];

    if (
      selectedReason &&
      validReasons.includes(selectedReason)
    ) {
      setReason(selectedReason);
    }
  };

  updateReason();

  window.addEventListener(
    "contact-reason-change",
    updateReason
  );

  window.addEventListener(
    "popstate",
    updateReason
  );

  return () => {
    window.removeEventListener(
      "contact-reason-change",
      updateReason
    );

    window.removeEventListener(
      "popstate",
      updateReason
    );
  };
}, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");

    // Temporal hasta conectar el envío real.
    window.setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <Section
      id="contact-form"
      size="lg"
      className="border-t border-white/[0.06]"
    >
      <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Start a Conversation
          </p>

          <h2 className="mt-7 text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
            Tell us
            <br />
            about your
            <br />
            <span className="text-primary">idea.</span>
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/45">
            Contanos brevemente qué estás buscando y cómo podemos contactarte.
          </p>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
              <Mail
                size={18}
                strokeWidth={1.5}
                className="text-primary"
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
                Contact
              </p>

              <p className="mt-1 text-sm text-white/65">
                RG1 Racing Team
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          {status === "success" ? (
            <div className="flex min-h-[600px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
                <CheckCircle2
                  size={34}
                  strokeWidth={1.5}
                  className="text-primary"
                />
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.45em] text-primary">
                Message Received
              </p>

              <h3 className="mt-5 text-3xl font-black uppercase text-white md:text-4xl">
                Thank you.
              </h3>

              <p className="mt-5 max-w-md leading-7 text-white/45">
                El formulario está preparado. Cuando conectemos el servicio de
                envío, este mensaje llegará al canal definido para RG1.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-10 text-[10px] uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 md:p-10"
            >
              {/* Name + Email */}

              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Name">
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Company + Phone */}

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <Field label="Company">
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company / Brand"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone">
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+54 ..."
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Reason */}

              <div className="mt-8">
                <Field label="Reason for contact">
                  <select
                    id="contact-reason"
                    name="reason"
                    value={reason}
                    onChange={(event) => setReason(event.target.value)}
                    className={inputClass}
                  >
                    <option value="partnership">
                      Partnerships
                    </option>

                    <option value="performance">
                      Performance
                    </option>

                    <option value="media">
                      Media & Press
                    </option>

                    <option value="general">
                      General
                    </option>
                  </select>
                </Field>
              </div>

              {/* Message */}

              <div className="mt-8">
                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              {/* Submit */}

              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs leading-6 text-white/30">
                  Al enviar este formulario compartís tus datos únicamente para
                  responder a esta consulta.
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-4
                    rounded-full
                    bg-primary
                    px-7
                    py-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.35em] text-white/40">
        {label}
      </span>

      {children}
    </label>
  );
}

const inputClass = `
  w-full
  border-0
  border-b
  border-white/10
  bg-transparent
  px-0
  py-4
  text-base
  text-white
  outline-none
  transition-colors
  placeholder:text-white/20
  focus:border-primary
`;