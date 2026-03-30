"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const SERVICES = [
  "Página web con SEO local",
  "Sistema de encargos o reservas",
  "Automatización con emails y IA",
  "Consultoría IT general",
  "Otro / No lo tengo claro aún",
];

const BUDGETS = [
  "Sí, tengo entre 300€ y 500€",
  "Sí, tengo más de 500€",
  "Aún no lo tengo claro",
  "Prefiero hablarlo en la llamada",
];

type Fields = "name" | "business" | "email" | "phone" | "service" | "budget" | "message";
type Errors = Partial<Record<Fields, string>>;

function hasLetter(s: string) {
  return /[a-záéíóúüñA-ZÁÉÍÓÚÜÑ]/.test(s);
}

// Email: usuario@dominio.tld (tld mínimo 2 chars)
function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(s);
}

// Teléfono español: 9 dígitos, empieza por 6, 7, 8 o 9
// Acepta espacios y guiones como separadores: 612 345 678, 612-345-678
function isValidSpanishPhone(s: string) {
  const digits = s.replace(/[\s\-().+]/g, "");
  // Con prefijo +34 o 0034
  const normalized = digits.replace(/^(\+34|0034)/, "");
  return /^[6789]\d{8}$/.test(normalized);
}

function validate(fields: Record<Fields, string>): Errors {
  const errors: Errors = {};

  const name = fields.name.trim();
  if (!name) {
    errors.name = "El nombre es obligatorio.";
  } else if (name.length < 3) {
    errors.name = "Mínimo 3 caracteres.";
  } else if (!hasLetter(name)) {
    errors.name = "Introduce un nombre real.";
  }

  const business = fields.business.trim();
  if (!business) {
    errors.business = "El nombre del negocio es obligatorio.";
  } else if (business.length < 2) {
    errors.business = "Mínimo 2 caracteres.";
  } else if (!hasLetter(business)) {
    errors.business = "Introduce un nombre real.";
  }

  const email = fields.email.trim();
  if (!email) {
    errors.email = "El email es obligatorio.";
  } else if (!isValidEmail(email)) {
    errors.email = "Introduce un email válido (ej. nombre@dominio.es).";
  }

  const phone = fields.phone.trim();
  if (!phone) {
    errors.phone = "El teléfono es obligatorio.";
  } else if (!isValidSpanishPhone(phone)) {
    errors.phone = "Teléfono español no válido (9 dígitos, empieza por 6, 7, 8 o 9).";
  }

  if (!fields.service) {
    errors.service = "Selecciona una opción.";
  }

  if (!fields.budget) {
    errors.budget = "Selecciona una opción.";
  }

  const message = fields.message.trim();
  if (!message) {
    errors.message = "El mensaje es obligatorio.";
  } else if (message.length < 20) {
    errors.message = `Mínimo 20 caracteres (${message.length}/20).`;
  } else if (message.length > 2000) {
    errors.message = `Máximo 2000 caracteres (${message.length}/2000).`;
  }

  return errors;
}

const inputClass =
  "w-full bg-white/5 border rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors";

function FieldError({ msg }: { msg?: string }) {
  return (
    <AnimatePresence>
      {msg && (
        <m.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <p className="flex items-center gap-1.5 text-[11px] text-red-400/80 pt-1.5 font-medium">
            <AlertCircle size={11} className="shrink-0" />
            {msg}
          </p>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Fields, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const hpNameRef = useRef<HTMLInputElement>(null);
  const hpUrlRef = useRef<HTMLInputElement>(null);

  function getFieldValues(form: HTMLFormElement): Record<Fields, string> {
    const fd = new FormData(form);
    return {
      name: (fd.get("name") as string) ?? "",
      business: (fd.get("business") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      phone: (fd.get("phone") as string) ?? "",
      service: (fd.get("service") as string) ?? "",
      budget: (fd.get("budget") as string) ?? "",
      message: (fd.get("message") as string) ?? "",
    };
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const field = e.target.name as Fields;
    setTouched((t) => ({ ...t, [field]: true }));
    const form = e.target.form;
    if (!form) return;
    const vals = getFieldValues(form);
    const errs = validate(vals);
    setErrors((prev) => ({ ...prev, [field]: errs[field] }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (hpNameRef.current?.value || hpUrlRef.current?.value) {
      setSent(true);
      return;
    }

    const vals = getFieldValues(e.currentTarget);
    const errs = validate(vals);

    // Marcar todos los campos como tocados para mostrar todos los errores
    setTouched({ name: true, business: true, service: true, budget: true, message: true });
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Nuevo lead desde la web: ${vals.business.trim()}`,
          from_name: vals.name.trim(),
          reply_to: vals.email.trim(),
          Nombre: vals.name.trim(),
          Negocio: vals.business.trim(),
          Email: vals.email.trim(),
          Teléfono: vals.phone.trim(),
          Servicio: vals.service,
          Presupuesto: vals.budget,
          Mensaje: vals.message.trim(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setSubmitError(data.message ?? "Ocurrió un error al enviar el mensaje.");
      }
    } catch {
      setSubmitError("Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const err = (f: Fields) => (touched[f] ? errors[f] : undefined);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <m.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="glass-card p-12 text-center flex flex-col items-center gap-6 bg-[#080808]/40"
        >
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center"
          >
            <CheckCircle size={32} className="text-brand-teal" />
          </m.div>
          <div>
            <h3 className="text-2xl font-black mb-2">¡Mensaje enviado!</h3>
            <p className="text-white/55 max-w-sm mx-auto leading-relaxed">
              He recibido tu consulta. Te responderé en menos de 24 horas para hablar de tu
              proyecto.
            </p>
          </div>
        </m.div>
      ) : (
        <m.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="glass-card p-10 space-y-6 bg-[#080808]/40"
        >
          {/* Honeypot */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              height: 0,
              overflow: "hidden",
              opacity: 0,
            }}
          >
            <input ref={hpNameRef} type="text" name="_hp_name" tabIndex={-1} autoComplete="off" />
            <input ref={hpUrlRef} type="url" name="_hp_url" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Tu nombre
              </label>
              <input
                name="name"
                placeholder="Ej. María García"
                onBlur={handleBlur}
                className={`${inputClass} ${err("name") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              />
              <FieldError msg={err("name")} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Nombre de tu negocio
              </label>
              <input
                name="business"
                placeholder="Ej. Bar El Rincón"
                onBlur={handleBlur}
                className={`${inputClass} ${err("business") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              />
              <FieldError msg={err("business")} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Ej. maria@gmail.com"
                onBlur={handleBlur}
                className={`${inputClass} ${err("email") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              />
              <FieldError msg={err("email")} />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                Teléfono
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Ej. 612 345 678"
                onBlur={handleBlur}
                className={`${inputClass} ${err("phone") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              />
              <FieldError msg={err("phone")} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label
                htmlFor="service"
                className="text-[10px] font-black uppercase tracking-widest text-white/40"
              >
                ¿Qué necesitas?
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                onBlur={handleBlur}
                className={`${inputClass} bg-[#111] appearance-none cursor-pointer ${err("service") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              >
                <option value="" disabled className="bg-[#111] text-white/50">
                  Selecciona una opción
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-[#111] text-white">
                    {s}
                  </option>
                ))}
              </select>
              <FieldError msg={err("service")} />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="budget"
                className="text-[10px] font-black uppercase tracking-widest text-white/40"
              >
                ¿Tienes presupuesto?
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                onBlur={handleBlur}
                className={`${inputClass} bg-[#111] appearance-none cursor-pointer ${err("budget") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
              >
                <option value="" disabled className="bg-[#111] text-white/50">
                  Selecciona una opción
                </option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b} className="bg-[#111] text-white">
                    {b}
                  </option>
                ))}
              </select>
              <FieldError msg={err("budget")} />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
              Cuéntame brevemente
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="¿Qué hace tu negocio? ¿Qué problema quieres resolver? Cuantos más detalles, mejor."
              onBlur={handleBlur}
              className={`${inputClass} resize-none ${err("message") ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-brand-blue/50"}`}
            />
            <FieldError msg={err("message")} />
          </div>

          <AnimatePresence>
            {submitError && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                  {submitError}
                </div>
              </m.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full px-8 py-4 relative overflow-hidden flex items-center justify-center"
          >
            <div className="invisible flex items-center gap-3" aria-hidden="true">
              Enviar consulta
              <ArrowRight size={14} />
            </div>
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <m.div
                  key="submitting"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 absolute"
                >
                  Enviando...
                  <Loader2 size={14} className="animate-spin" />
                </m.div>
              ) : (
                <m.div
                  key="submit"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 absolute"
                >
                  Enviar consulta
                  <ArrowRight size={14} />
                </m.div>
              )}
            </AnimatePresence>
          </button>

          <p className="text-center text-[10px] text-white/20 font-medium">
            Te respondo en menos de 24h · Sin spam · Sin compromiso
          </p>
        </m.form>
      )}
    </AnimatePresence>
  );
}
