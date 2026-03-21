"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

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

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const hpNameRef = useRef<HTMLInputElement>(null);
  const hpUrlRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot: si algún campo oculto tiene valor, es un bot
    if (hpNameRef.current?.value || hpUrlRef.current?.value) {
      setSent(true); // éxito falso para el bot
      return;
    }

    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const business = fd.get("business") as string;
    const service = fd.get("service") as string;
    const budget = fd.get("budget") as string;
    const message = fd.get("message") as string;

    const bodyLines = [
      `Nombre: ${name}`,
      `Negocio: ${business}`,
      `Necesita: ${service}`,
      `Presupuesto: ${budget}`,
      `Mensaje:`,
      message,
      ``,
      `-- Enviado desde alexmerle.es`,
    ];

    // Email construido en runtime para evitar scraping
    const em = ["alex", "@", "merle", ".es"].join("");
    const subject = encodeURIComponent(`Consulta desde alexmerle.es — ${business}`);
    const body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href = `mailto:${em}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-card p-12 text-center flex flex-col items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center">
          <CheckCircle size={32} className="text-brand-teal" />
        </div>
        <div>
          <h3 className="text-2xl font-black mb-2">¡Listo!</h3>
          <p className="text-white/40 max-w-sm mx-auto leading-relaxed">
            Se ha abierto tu cliente de email con los datos. Envíalo y te respondo en menos de 24h para agendar la llamada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6 bg-[#080808]/40">
      {/* Honeypot — invisible para humanos, los bots lo rellenan */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden", opacity: 0 }}
      >
        <label htmlFor="_hp_name">No rellenes esto</label>
        <input ref={hpNameRef} id="_hp_name" type="text" name="_hp_name" tabIndex={-1} autoComplete="off" />
        <label htmlFor="_hp_url">Tampoco esto</label>
        <input ref={hpUrlRef} id="_hp_url" type="url" name="_hp_url" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
            Tu nombre
          </label>
          <input
            name="name"
            required
            placeholder="Ej. María García"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
            Nombre de tu negocio
          </label>
          <input
            name="business"
            required
            placeholder="Ej. Bar El Rincón"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
            ¿Qué necesitas?
          </label>
          <select
            name="service"
            required
            defaultValue=""
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
            ¿Tienes presupuesto?
          </label>
          <select
            name="budget"
            required
            defaultValue=""
            className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
          Cuéntame brevemente
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="¿Qué hace tu negocio? ¿Qué problema quieres resolver? Cuantos más detalles, mejor."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-brand-blue text-white font-black uppercase text-xs tracking-widest rounded-full hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
      >
        Enviar consulta
        <ArrowRight size={14} />
      </button>

      <p className="text-center text-[10px] text-white/20 font-medium">
        Te respondo en menos de 24h · Sin spam · Sin compromiso
      </p>
    </form>
  );
}
