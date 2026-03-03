import React from "react";
import { ShieldCheck, Target, Heart, Users, MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Nossa Missão é a sua <span className="text-indigo-400">Proteção</span>.
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300 font-medium">
            A SafeLife nasceu em Maputo com o objetivo de democratizar o acesso a seguros em Moçambique através da tecnologia.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <ValueCard icon={<Target size={32}/>} title="Transparência" desc="Acreditamos que cada cidadão deve entender exatamente o que está a contratar, sem letras pequenas." />
        <ValueCard icon={<ShieldCheck size={32}/>} title="Segurança" desc="Operamos sob a supervisão do ISSM, garantindo que os seus dados e apólices estão em boas mãos." />
        <ValueCard icon={<Heart size={32}/>} title="Empatia" desc="Estamos consigo nos momentos difíceis. Nosso suporte de sinistros é humanizado e eficiente." />
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl">
              <ImageWithFallback src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" className="rounded-[2rem] w-full aspect-video object-cover" />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Líderes na Transformação Digital do Sector Segurador</h2>
            <p className="text-slate-500 leading-relaxed">
              Trabalhamos em estreita colaboração com as maiores seguradoras de Moçambique para integrar sistemas e oferecer uma experiência fluída ao cliente final.
            </p>
            <div className="space-y-4">
              <CheckItem text="Mais de 15 Seguradoras Parceiras" />
              <CheckItem text="Presença em todas as capitais provinciais" />
              <CheckItem text="Equipa 100% Moçambicana" />
            </div>
            <button className="flex items-center gap-2 font-black text-indigo-600 uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
              Contactar a nossa equipa <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="space-y-6 text-center md:text-left">
      <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto md:mx-0">
        {icon}
      </div>
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-700 font-bold">
      <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
        <ShieldCheck size={14} />
      </div>
      {text}
    </div>
  );
}
