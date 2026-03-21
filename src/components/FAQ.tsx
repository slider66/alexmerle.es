"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto cuesta una página web para mi negocio?",
    a: "El plan de entrada sale por 390€ (precio de lanzamiento, antes 450€). Incluye diseño, SEO local, Google Maps y acceso directo a WhatsApp o llamada. Si además necesitas sistema de encargos o emails automáticos, hay planes desde 490€ y 570€. Todo sin cuotas mensuales ni sorpresas.",
  },
  {
    q: "¿Cuánto tiempo tardas en tener la web lista?",
    a: "Depende del contenido que me puedas dar: fotos, carta, descripción del negocio. Un proyecto básico normalmente está publicado en 1-2 semanas desde que arrancamos.",
  },
  {
    q: "¿Necesito saber de informática para gestionar la web?",
    a: "No hace falta. Todo está pensado para que funcione solo. Si algo cambia (precio, carta, horario), lo gestionamos juntos en las sesiones de ajuste incluidas en el plan.",
  },
  {
    q: "¿Qué zona de Madrid cubres?",
    a: "Me muevo principalmente por el norte: San Agustín de Guadalix, Alcobendas, El Molar, San Sebastián de los Reyes, Las Tablas, Paracuellos de Jarama y alrededores. Buena parte del trabajo también se puede hacer a distancia, así que si eres de otra zona y encaja, hablamos.",
  },
  {
    q: "¿Trabajas solo o hay una empresa detrás?",
    a: "Solo. Soy autónomo, lo que significa que hablas directamente con quien hace el trabajo. Sin intermediarios, sin comerciales que te pasen a otra persona.",
  },
  {
    q: "¿Qué es el SEO local y para qué le sirve a mi negocio?",
    a: "Es lo que hace que aparezcas en Google cuando alguien de tu zona busca lo que tú ofreces. Si tienes un bar en San Sebastián de los Reyes y alguien busca 'café cerca', sin SEO local no apareces. Con él, sí.",
  },
  {
    q: "¿Puedo pedir cambios una vez entregada la web?",
    a: "Todos los planes incluyen dos sesiones de ajustes gratuitas tras la entrega. El código también es tuyo: te lo entrego en un repositorio Git para que no dependas de mí.",
  },
  {
    q: "¿Tienes trabajos que pueda ver antes de decidir?",
    a: "Sí. Hierros Merle (merle.es) y la demo de Café & Tortilla Montes (montes.vercel.app) son dos ejemplos reales. La propuesta completa que le hice a Montes también está publicada y te la puedes mirar antes de contactar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-teal mb-4 block">
            Preguntas frecuentes
          </span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            Lo que suele <span className="gradient-text">preguntarse.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card bg-[#080808]/40 overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-7 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-bold text-base text-white/80 group-hover:text-white transition-colors leading-snug">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white/70 transition-colors">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-7 text-white/50 text-sm leading-relaxed font-medium border-t border-white/5 pt-5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
