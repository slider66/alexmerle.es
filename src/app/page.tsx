import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Linkedin, Mail, Shield, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      <section id="sobre-mi" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="space-y-6 text-xl text-white/40 leading-relaxed font-medium">
              <p>
                Soy <strong className="text-white">Alejandro Merle</strong>, consultor especializado en <span className="text-brand-blue">Digital Risk Protection</span>. Mi enfoque combina la precisión técnica de la ciberseguridad con la visión estratégica del negocio digital.
              </p>
              <p>
                Con experiencia en entornos críticos como <strong className="text-white">Telefónica</strong>, ayudo a organizaciones a navegar la complejidad tecnológica, asegurando que su crecimiento digital sea sólido y resiliente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {[
                { icon: Shield, label: "Cybersecurity", color: "text-brand-blue" },
                { icon: Zap, label: "Automation", color: "text-brand-teal" },
                { icon: Globe, label: "IT Strategy", color: "text-brand-blue" }
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-blue/30 transition-colors">
                  <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={20} />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{skill.label}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://es.linkedin.com/in/alejandromerle" 
              target="_blank" 
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#0077b5] text-white font-black uppercase text-xs tracking-[0.2em] rounded-full hover:shadow-[0_20px_40px_rgba(0,119,181,0.3)] transition-all hover:-translate-y-1 active:scale-95 mt-6"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-full blur-[100px] animate-pulse" />
             <div className="relative h-full w-full glass-card flex items-center justify-center p-16 overflow-hidden border-white/10">
                <div className="grid grid-cols-4 gap-6 opacity-10">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-16 h-16 border border-white/40 rounded-2xl rotate-45" />
                    ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-white/5 select-none tracking-tighter">
                    AM
                </div>
             </div>
          </div>
        </div>
      </section>

      <PortfolioGrid />

      <section id="contacto" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            ¿Tienes un <br /> <span className="gradient-text">Proyecto</span> en mente?
          </h2>
          <p className="text-white/40 text-xl md:text-2xl mb-20 max-w-2xl mx-auto font-medium leading-relaxed">
            Hablemos sobre cómo podemos elevar tu infraestructura digital y proteger tu presencia online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
              href="mailto:alex@merle.es" 
              className="group glass-card p-12 flex flex-col items-center gap-6 hover:border-brand-blue/50 bg-[#080808]/40"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Email</h4>
              <p className="text-xl font-bold text-white tracking-tight">alex@merle.es</p>
            </a>
            
            <a 
              href="https://wa.me/34600367217" 
              target="_blank"
              className="group glass-card p-12 flex flex-col items-center gap-6 hover:border-[#25D366]/50 bg-[#080808]/40"
            >
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">WhatsApp</h4>
              <p className="text-xl font-bold text-white tracking-tight">+34 600 367 217</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
