import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Linkedin, Mail, Shield, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      
      <section id="sobre-mi" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="space-y-4 text-lg text-white/60 leading-relaxed">
              <p>
                Soy <strong className="text-white">Alejandro Merle</strong>, profesional especializado en <strong>Digital Risk Protection</strong> con trayectoria en ciberseguridad y análisis de riesgos tecnológicos.
              </p>
              <p>
                Mi formación y experiencia en entornos como Telefónica me permiten combinar una sólida base técnica en seguridad con una visión estratégica de consultoría IT.
              </p>
              <p>
                Acompaño a empresas en la automatización de procesos y el escalado de su presencia digital, siempre priorizando la integridad y la eficiencia de sus infraestructuras.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                <Shield className="text-brand-blue" size={24} />
                <span className="text-sm font-bold">Ciberseguridad</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                <Zap className="text-brand-teal" size={24} />
                <span className="text-sm font-bold">Automatización</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                <Globe className="text-brand-blue" size={24} />
                <span className="text-sm font-bold">Consultoría IT</span>
              </div>
            </div>

            <a 
              href="https://es.linkedin.com/in/alejandromerle" 
              target="_blank" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,119,181,0.4)] transition-all hover:-translate-y-1 mt-4"
            >
              <Linkedin size={20} />
              Conectar en LinkedIn
            </a>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-3xl blur-2xl" />
             <div className="relative h-full w-full glass-card flex items-center justify-center p-12 overflow-hidden">
                <div className="grid grid-cols-2 gap-4 opacity-20">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-12 h-12 border border-white/20 rounded-lg" />
                    ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-white/5 select-none">
                    AM
                </div>
             </div>
          </div>
        </div>
      </section>

      <PortfolioGrid />

      <section id="contacto" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            ¿Tienes un <span className="gradient-text">Proyecto</span> en mente?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos tecnológicos con seguridad y eficiencia.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:alex@merle.es" 
              className="group glass-card p-8 flex flex-col items-center gap-4 hover:border-brand-blue"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h4 className="font-bold text-xl text-white">Email</h4>
              <p className="text-white/40">alex@merle.es</p>
            </a>
            
            <a 
              href="https://wa.me/34600367217" 
              target="_blank"
              className="group glass-card p-8 flex flex-col items-center gap-4 hover:border-[#25D366]"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h4 className="font-bold text-xl text-white">WhatsApp</h4>
              <p className="text-white/40">+34 600 367 217</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
