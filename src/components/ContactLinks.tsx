import { Phone, Globe, MapPin, ArrowRight, CalendarDays } from "lucide-react";

export function ContactLinks() {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-6">
        O si prefieres contactar directo
      </p>

      {/* Google Calendar — reserva de cita */}
      <a
        href="https://calendar.app.google/s8bzNgy6CYZsJ8jV8"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full glass-card p-6 flex items-center gap-5 bg-[#080808]/40 hover:border-brand-teal/40 transition-colors duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal/10 transition-colors shrink-0">
          <CalendarDays size={20} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-0.5">
            Reserva una llamada
          </p>
          <p className="text-lg font-bold text-white">Consulta gratuita</p>
        </div>
        <ArrowRight
          size={14}
          className="ml-auto text-white/20 group-hover:text-brand-teal group-hover:translate-x-1 transition-all"
        />
      </a>

      {/* Teléfono */}
      <a
        href="tel:+34600367217"
        className="group w-full glass-card p-6 flex items-center gap-5 bg-[#080808]/40 hover:border-brand-teal/40 transition-colors duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal/10 transition-colors shrink-0">
          <Phone size={20} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-0.5">
            Llamada directa
          </p>
          <p className="text-lg font-bold text-white">+34 600 367 217</p>
        </div>
        <ArrowRight
          size={14}
          className="ml-auto text-white/20 group-hover:text-brand-teal group-hover:translate-x-1 transition-all"
        />
      </a>

      {/* Email */}
      <a
        href="mailto:alex@merle.es"
        className="group w-full glass-card p-6 flex items-center gap-5 bg-[#080808]/40 hover:border-brand-blue/40 transition-colors duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/10 transition-colors shrink-0">
          <Globe size={20} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-0.5">
            Email
          </p>
          <p className="text-lg font-bold text-white">alex@merle.es</p>
        </div>
        <ArrowRight
          size={14}
          className="ml-auto text-white/20 group-hover:text-brand-blue group-hover:translate-x-1 transition-all"
        />
      </a>

      <div className="glass-card p-6 bg-[#080808]/40 space-y-3">
        <p className="text-[9px] font-black uppercase tracking-widest text-white/30">
          Zona de actuación
        </p>
        <div className="flex items-start gap-2">
          <MapPin size={14} className="text-brand-teal shrink-0 mt-0.5" />
          <p className="text-sm text-white/50 leading-relaxed">
            Norte de Madrid: San Agustín de Guadalix, El Molar, San Sebastián de los Reyes, Las Tablas,
            Paracuellos de Jarama y alrededores.
          </p>
        </div>
      </div>
    </div>
  );
}
