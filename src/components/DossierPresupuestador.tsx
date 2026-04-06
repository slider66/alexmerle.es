"use client";

import { useState, useMemo, useRef } from "react";
import { Check, ChevronDown, ChevronUp, Download, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { getWeb3FormsKey } from "@/lib/env";

// ── Catálogo de servicios ────────────────────────────────────────────────────

type Servicio = {
  id: string;
  label: string;
  desc: string;
  price: number;
  category: string;
};

const SERVICIOS: Servicio[] = [
  // Presencia online
  { id: "google-business", label: "Google Business optimizado",     desc: "Ficha de Google, fotos, categorías, reseñas, horarios.",                          price: 150, category: "Presencia online" },
  { id: "auditoria-seo",   label: "Auditoría SEO",                  desc: "Análisis técnico + informe de mejoras concretas y accionables.",                   price: 150, category: "Presencia online" },
  { id: "landing",         label: "Landing de captación",           desc: "Página enfocada en convertir visitas en contactos o encargos.",                    price: 150, category: "Presencia online" },
  { id: "web-completa",    label: "Web completa",                   desc: "Web profesional con SEO local, Google Maps, diseño responsive y contacto directo.", price: 449, category: "Presencia online" },
  { id: "web-reservas",    label: "Web + Sistema de reservas",      desc: "Todo lo anterior más agenda online con confirmación automática.",                  price: 599, category: "Presencia online" },
  // Comunicación y captación
  { id: "buzon",           label: "Buzón centralizado",             desc: "Unifica email, WhatsApp y consultas en un solo punto de gestión.",                 price: 150, category: "Comunicación y captación" },
  { id: "whatsapp-auto",   label: "Respuestas automáticas WhatsApp",desc: "Responde las preguntas frecuentes fuera de horario y en festivos.",                price: 150, category: "Comunicación y captación" },
  { id: "agenda",          label: "Agenda online",                  desc: "El cliente reserva solo, sin llamar. Confirmación automática.",                    price: 150, category: "Comunicación y captación" },
  { id: "citas-clinica",   label: "Sistema de citas (clínicas)",    desc: "Reservas con confirmación y recordatorio. Cumple normativa RGPD.",                 price: 299, category: "Comunicación y captación" },
  // Automatización
  { id: "carta-digital",   label: "Carta digital + encargos",      desc: "Carta en el móvil y sistema de encargos por WhatsApp con confirmación automática.", price: 150, category: "Automatización" },
  { id: "procesos",        label: "Automatización de procesos",     desc: "Mapeo de los 3 procesos que más tiempo roban + automatización básica.",             price: 150, category: "Automatización" },
];

const CATEGORIAS = ["Presencia online", "Comunicación y captación", "Automatización"];

// ── Lógica de combos ─────────────────────────────────────────────────────────

type ComboSuggestion = {
  id: string;
  label: string;
  savings: number;
  detail: string;
  replaces: string[];
  switchTo: string;
};

function calcularCombos(selected: Set<string>): ComboSuggestion[] {
  const suggestions: ComboSuggestion[] = [];

  const tienePresenciaBasica =
    selected.has("landing") && selected.has("google-business") &&
    !selected.has("web-completa") && !selected.has("web-reservas");
  if (tienePresenciaBasica) {
    suggestions.push({
      id: "combo-web",
      label: "Landing + Google Business → Web completa",
      savings: 0,
      detail: "La web completa incluye todo esto y mucho más por un precio cerrado.",
      replaces: ["landing", "google-business"],
      switchTo: "web-completa",
    });
  }

  const tieneWebYAgenda =
    selected.has("agenda") && selected.has("web-completa") && !selected.has("web-reservas");
  if (tieneWebYAgenda) {
    const ahorro = 449 + 150 - 599;
    suggestions.push({
      id: "combo-web-reservas",
      label: "Web + Agenda → Web con reservas integradas",
      savings: ahorro,
      detail: `Ahorras ${ahorro} € combinando ambos en un solo proyecto.`,
      replaces: ["web-completa", "agenda"],
      switchTo: "web-reservas",
    });
  }

  return suggestions;
}

// ── Tipos del formulario ─────────────────────────────────────────────────────

type LeadAction = "download" | "email";
type FormState = "idle" | "open" | "sending" | "sent" | "error";

// ── Componente ───────────────────────────────────────────────────────────────

export function DossierPresupuestador() {
  const [selected, setSelected]   = useState<Set<string>>(new Set());
  const [openCats, setOpenCats]   = useState<Set<string>>(new Set(CATEGORIAS));
  const [formState, setFormState] = useState<FormState>("idle");
  const [action, setAction]       = useState<LeadAction>("download");
  const [name, setName]           = useState("");
  const [contact, setContact]     = useState(""); // email o teléfono
  const websiteRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (id === "web-reservas") { next.delete("web-completa"); next.delete("agenda"); }
        if (id === "web-completa") { next.delete("web-reservas"); next.delete("landing"); }
        next.add(id);
      }
      return next;
    });
  };

  const toggleCat = (cat: string) => {
    setOpenCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      return next;
    });
  };

  const total = useMemo(() =>
    Array.from(selected).reduce((sum, id) => {
      const s = SERVICIOS.find((s) => s.id === id);
      return sum + (s?.price ?? 0);
    }, 0),
  [selected]);

  const combos       = useMemo(() => calcularCombos(selected), [selected]);
  const selectedItems = SERVICIOS.filter((s) => selected.has(s.id));

  const applyCombo = (combo: ComboSuggestion) => {
    setSelected((prev) => {
      const next = new Set(prev);
      combo.replaces.forEach((id) => next.delete(id));
      next.add(combo.switchTo);
      return next;
    });
  };

  const openForm = (a: LeadAction) => {
    setAction(a);
    setFormState("open");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    if (websiteRef.current?.value || companyRef.current?.value) {
      setFormState("sent");
      return;
    }

    setFormState("sending");

    const lineas = selectedItems
      .map((s) => `  • ${s.label}: ${s.price} € + IVA`)
      .join("\n");

    const mensajeAlex = `Nuevo lead desde el presupuestador del dossier.

Nombre: ${name}
Contacto: ${contact}
Acción solicitada: ${action === "download" ? "Descargar PDF" : "Recibir presupuesto por email"}

Servicios seleccionados:
${lineas}

  Base imponible: ${total} €
  IVA (21%): ${Math.round(total * 0.21)} €
  Total con IVA: ${Math.round(total * 1.21)} €`;

    try {
      const w3fKey = getWeb3FormsKey();
      // Envío principal → Alex
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: w3fKey,
          subject: `[Presupuestador] Lead: ${name} — ${total} € + IVA`,
          from_name: name,
          replyto: contact.includes("@") ? contact : undefined,
          message: mensajeAlex,
        }),
      });

      // Si eligió "enviarme el presupuesto" y dio un email, enviar copia
      if (action === "email" && contact.includes("@")) {
        const mensajeCliente = `Hola ${name},

Aquí tienes el resumen del presupuesto que has calculado en alexmerle.es:

${lineas}

  Base imponible: ${total} €
  IVA (21%): ${Math.round(total * 0.21)} €
  Total con IVA: ${Math.round(total * 1.21)} €

Estos son precios orientativos. El presupuesto final se cierra tras una primera conversación sin compromiso.

Si quieres hablar, escríbeme a alex@merle.es o por WhatsApp: +34 600 367 217

Saludos,
Alex Merle
alexmerle.es`;

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: w3fKey,
            subject: "Tu presupuesto — Alex Merle",
            from_name: "Alex Merle",
            to: contact,
            message: mensajeCliente,
          }),
        });
      }

      if (!res.ok) throw new Error("error");

      setFormState("sent");

      // Tras enviar: si eligió descargar, disparar print
      if (action === "download") {
        setTimeout(() => window.print(), 400);
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="space-y-6">

      {/* Checklist por categoría — oculto en impresión */}
      <div className="print-hide space-y-6">
      {CATEGORIAS.map((cat) => {
        const items  = SERVICIOS.filter((s) => s.category === cat);
        const isOpen = openCats.has(cat);
        const count  = items.filter((s) => selected.has(s.id)).length;
        return (
          <div key={cat} className="glass-card bg-[#080808]/40 overflow-hidden" style={{ borderRadius: "1rem" }}>
            <button
              onClick={() => toggleCat(cat)}
              className="w-full flex items-center justify-between px-7 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-teal" />
                <span className="text-[11px] font-black uppercase tracking-widest text-white/60">{cat}</span>
              </div>
              <div className="flex items-center gap-3">
                {count > 0 && (
                  <span className="text-[10px] font-black text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded-full">
                    {count} seleccionado{count > 1 ? "s" : ""}
                  </span>
                )}
                {isOpen ? <ChevronUp size={14} className="text-white/30" /> : <ChevronDown size={14} className="text-white/30" />}
              </div>
            </button>
            {isOpen && (
              <div className="divide-y divide-white/5">
                {items.map((s) => {
                  const isSel = selected.has(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggle(s.id)}
                      className={`w-full flex items-start gap-4 px-7 py-4 text-left transition-colors ${isSel ? "bg-brand-teal/[0.04]" : "hover:bg-white/[0.02]"}`}
                    >
                      <span className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isSel ? "bg-brand-teal border-brand-teal" : "border-white/20 bg-transparent"}`}>
                        {isSel && <Check size={11} className="text-black" strokeWidth={3} />}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold leading-snug ${isSel ? "text-white" : "text-white/65"}`}>{s.label}</p>
                        <p className="text-[11px] text-white/35 font-medium mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                      <span className={`text-sm font-black shrink-0 tabular-nums ${isSel ? "text-brand-teal" : "text-white/40"}`}>{s.price} €</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Sugerencias de combo */}
      {combos.map((combo) => (
        <div key={combo.id} className="flex items-start gap-4 p-5 rounded-xl border border-brand-blue/25 bg-brand-blue/5">
          <span className="text-brand-blue text-lg leading-none shrink-0 mt-0.5">↗</span>
          <div className="flex-1">
            <p className="text-sm font-bold text-white/80">{combo.label}</p>
            <p className="text-[11px] text-white/40 font-medium mt-0.5">{combo.detail}</p>
          </div>
          <button
            onClick={() => applyCombo(combo)}
            className="shrink-0 text-[10px] font-black uppercase tracking-widest text-brand-blue border border-brand-blue/30 bg-brand-blue/10 px-3 py-1.5 rounded-full hover:bg-brand-blue/20 transition-colors"
          >
            Aplicar
          </button>
        </div>
      ))}
      </div>{/* /print-hide */}

      {/* Resumen */}
      {selected.size > 0 && (
        <div className="glass-card p-7 bg-[#080808]/60 border-white/10" style={{ borderRadius: "1rem" }}>
          <div className="space-y-2 mb-6">
            {selectedItems.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-4">
                <span className="text-sm text-white/60 font-medium">{s.label}</span>
                <span className="text-sm font-bold text-white/80 tabular-nums shrink-0">{s.price} €</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 space-y-1 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-widest text-white/40">Base imponible</span>
              <span className="text-2xl font-black tabular-nums text-white">{total} €</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-widest text-white/30">IVA (21%)</span>
              <span className="text-sm font-bold text-white/40 tabular-nums">{Math.round(total * 0.21)} €</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand-teal">Total con IVA</span>
              <span className="text-2xl font-black tabular-nums text-brand-teal">{Math.round(total * 1.21)} €</span>
            </div>
          </div>

          {/* CTAs de descarga / email + formulario — ocultos en impresión */}
          <div className="print-hide">
          {formState !== "sent" && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openForm("download")}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all text-[11px] font-black uppercase tracking-widest"
              >
                <Download size={14} />
                Descargar PDF
              </button>
              <button
                onClick={() => openForm("email")}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full btn-primary text-[11px] font-black uppercase tracking-widest"
              >
                <Mail size={14} />
                Enviarme el presupuesto
              </button>
            </div>
          )}

          {/* Formulario de lead */}
          {(formState === "open" || formState === "sending" || formState === "error") && (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4 border-t border-white/8 pt-5">
              {/* Campos de accesibilidad — no modificar */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden", opacity: 0 }}>
                <input ref={websiteRef} type="text" name="website" tabIndex={-1} autoComplete="off" />
                <input ref={companyRef} type="text" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <p className="text-white/50 text-sm font-medium">
                {action === "download"
                  ? "Deja tu nombre y contacto para generar el PDF."
                  : "Te mando el resumen por email ahora mismo."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1.5">
                    {action === "email" ? "Email" : "Email o teléfono"}
                  </label>
                  <input
                    type={action === "email" ? "email" : "text"}
                    required
                    placeholder={action === "email" ? "tu@email.com" : "tu@email.com o 600 000 000"}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-brand-teal/50 transition-colors"
                  />
                </div>
              </div>
              {formState === "error" && (
                <p className="text-red-400/70 text-xs font-medium">
                  Algo ha fallado. Prueba de nuevo o escríbeme directamente a alex@merle.es.
                </p>
              )}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormState("idle")}
                  className="px-5 py-2.5 rounded-full border border-white/10 text-white/40 hover:text-white/60 text-[11px] font-black uppercase tracking-widest transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full btn-primary text-[11px] font-black uppercase tracking-widest disabled:opacity-60"
                >
                  {formState === "sending" ? (
                    <><Loader2 size={13} className="animate-spin" /> Enviando…</>
                  ) : action === "download" ? (
                    <><Download size={13} /> Generar PDF</>
                  ) : (
                    <><Mail size={13} /> Enviar</>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Estado enviado */}
          {formState === "sent" && (
            <div className="mt-5 border-t border-white/8 pt-5 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-teal shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white/80">
                  {action === "download" ? "¡Listo! Abriendo el PDF…" : "¡Enviado! Revisa tu bandeja de entrada."}
                </p>
                <p className="text-[11px] text-white/40 font-medium mt-0.5">
                  {action === "email"
                    ? "Si no aparece en unos minutos, revisa la carpeta de spam. También puedes escribirme directamente a alex@merle.es."
                    : "Si el PDF no se abre solo, usa el botón de imprimir del navegador (Ctrl+P / Cmd+P)."}
                </p>
              </div>
            </div>
          )}
          </div>{/* /print-hide */}

          <p className="text-white/20 text-[10px] font-medium mt-4 print-muted">
            Orientativo. El presupuesto final se cierra tras el diagnóstico inicial. Pago 50% al arrancar, 50% a la entrega.
          </p>
        </div>
      )}

      {selected.size === 0 && (
        <div className="text-center py-8 text-white/25 text-sm font-medium">
          Selecciona los servicios que necesitas para ver el presupuesto.
        </div>
      )}
    </div>
  );
}
