import React from "react";
import { 
  ShieldCheck, ArrowRight, Star, CheckCircle2, 
  Car, HeartPulse, Home as HomeIcon, Briefcase, 
  MapPin, Phone, Mail, ChevronRight, Search, 
  Shield, Smile, Plane, User
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest border border-green-100">
                Produtos de Alta Performance
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1A202C] leading-tight">
                Proteja o que mais <br />
                <span className="text-[#22C55E]">importa para si.</span>
              </h1>
              <p className="text-lg text-[#4A5568] leading-relaxed max-w-lg font-medium">
                Compare e contrate agora o melhor seguro de Moçambique em tempo recorde - mais rápido e mais barato do que o mercado tradicional. Disponível 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#4A5568]">
                  <CheckCircle2 size={18} className="text-[#22C55E]" />
                  Em tempo recorde
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#4A5568]">
                  <CheckCircle2 size={18} className="text-[#22C55E]" />
                  Cotações instantâneas
                </div>
              </div>

              <div className="flex items-center bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-md">
                <div className="flex-1 flex items-center px-4 gap-3">
                  <Search size={18} className="text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="O que procura proteger?" 
                    className="w-full py-3 text-sm font-medium outline-none text-slate-700 bg-transparent"
                  />
                </div>
                <button 
                  onClick={() => navigate("/products")}
                  className="bg-[#22C55E] text-white px-8 py-4 rounded-xl font-black text-sm hover:bg-[#16a34a] transition-all whitespace-nowrap shadow-lg shadow-green-100/50"
                >
                  Comparar agora
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative z-10 w-full max-w-[500px]">
                <div className="aspect-[1/1] bg-white rounded-[60px] shadow-2xl overflow-hidden border-[16px] border-white relative">
                   <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                    className="w-full h-full object-cover object-top"
                    alt="SafeLife Protection"
                  />
                </div>
                <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-green-100/50 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -top-8 -left-8 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo bar matches the design's grayscale look */}
      <section className="py-12 bg-white border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="text-2xl font-black text-[#1A202C] tracking-tighter italic">Hollard.</span>
           <span className="text-2xl font-black text-[#1A202C] tracking-tighter">FIDELIDADE</span>
           <span className="text-2xl font-black text-[#1A202C] tracking-tighter italic">GLOBAL ALLIANCE</span>
           <span className="text-2xl font-black text-[#1A202C] tracking-tighter">EMOSE</span>
           <span className="text-2xl font-black text-[#1A202C] tracking-tighter">ICE</span>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#1A202C]">Soluções Adaptadas à sua Realidade</h2>
            <p className="text-[#718096] max-w-xl font-medium">
              Desenvolvemos produtos que atendem às suas necessidades, facilitando o acesso a proteções para as mais variadas situações da sua vida.
            </p>
          </div>
          <button className="text-sm font-bold text-[#22C55E] border border-green-200 px-8 py-3.5 rounded-full hover:bg-green-50 transition-all flex items-center gap-2 self-center md:self-end">
            Ver todos seguros <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SolutionCard 
            icon={<Car size={24} />} 
            title="Automóvel" 
            desc="Proteja o seu veículo em toda a Moçambique com planos que cabem no seu bolso."
          />
          <SolutionCard 
            icon={<HeartPulse size={24} />} 
            title="Saúde" 
            desc="Cuide da sua saúde e da sua família com a melhor rede de parceiros médicos."
          />
          <SolutionCard 
            icon={<HomeIcon size={24} />} 
            title="Habitação" 
            desc="Segurança total para a sua casa contra incêndios, inundações e roubos."
          />
          <SolutionCard 
            icon={<Plane size={24} />} 
            title="Vida e Viagens" 
            desc="Destine o seu amanhã com mais tranquilidade e segurança em todas as jornadas."
          />
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-24 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-2xl border-[12px] border-white">
                 <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                  className="w-full aspect-[4/3] object-cover"
                  alt="SafeLife Team"
                />
              </div>
              <div className="absolute -bottom-10 right-0 md:-right-10 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 max-w-[320px] space-y-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm italic text-slate-600 font-medium leading-relaxed">
                  "O Seguro de vida SafeLife me deu a tranquilidade que eu precisava. O atendimento foi excepcional!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                    <User size={20} className="w-full h-full p-2 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900">Anacleto S.</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Cliente há 2 anos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-[#1A202C]">O que nos torna diferentes?</h2>
                <p className="text-[#718096] font-medium leading-relaxed">
                  Não somos apenas mais um marketplace. Somos o seu parceiro digital de confiança na busca pelo melhor custo-benefício.
                </p>
              </div>

              <div className="space-y-8">
                <FeatureItem 
                  icon={<Shield size={20}/>} 
                  title="Experiência 100% Digital" 
                  desc="Contrate ou renove o seu seguro sem sair de casa, através do computador ou smartphone." 
                />
                <FeatureItem 
                  icon={<CheckCircle2 size={20}/>} 
                  title="Variedade Especial" 
                  desc="Trabalhamos com seguradoras líderes para oferecer a gama mais completa de produtos." 
                />
                <FeatureItem 
                  icon={<Smile size={20}/>} 
                  title="Suporte ao Dinheiro" 
                  desc="Garantimos que recebe o melhor valor possível pelo prémio que paga anualmente." 
                />
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                <button 
                  onClick={() => navigate("/products")}
                  className="bg-[#22C55E] text-white px-10 py-4.5 rounded-2xl font-black shadow-lg shadow-green-100/50 hover:bg-[#16a34a] transition-all active:scale-95"
                >
                  Iniciar minha cotação
                </button>
                <button className="flex items-center gap-2 text-[#4A5568] font-bold hover:text-[#22C55E] transition-colors">
                  Ver planos e seguros <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <StatItem value="15k+" label="Clientes activos" />
          <StatItem value="12" label="Seguradoras Parceiras" />
          <StatItem value="24h" label="Apoio personalizado" />
          <StatItem value="98%" label="Taxa de satisfação" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto bg-[#F0FDF4] rounded-[60px] p-12 md:p-24 text-center space-y-10 relative overflow-hidden border border-green-50 shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 blur-[120px] rounded-full"></div>
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#1A202C] leading-tight tracking-tight">
              Dê o primeiro passo para uma vida <br /> mais segura e tranquila.
            </h2>
            <p className="text-[#4A5568] max-w-2xl mx-auto text-lg font-medium">
              Junte-se a milhares de moçambicanos que escolheram a inteligência na hora de contratar os seus seguros em Moçambique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="bg-[#22C55E] text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-[#16a34a] transition-all shadow-xl shadow-green-200/50 active:scale-95">
              Obter Minha Cotação Grátis
            </button>
            <button className="bg-white text-[#1A202C] border border-slate-200 px-10 py-5 rounded-[24px] font-black text-lg hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
              Ver Planos de Empresa
            </button>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest relative z-10">
            Experimente agora a liberdade de escolher o melhor para o seu futuro.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-4 border-t border-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg shadow-green-100">
                <ShieldCheck className="text-white" size={22} />
              </div>
              <span className="font-black text-2xl text-[#1A202C] tracking-tighter">SafeLife</span>
            </div>
            <p className="text-sm text-[#718096] leading-relaxed font-medium">
              A SafeLife é o primeiro marketplace de seguros 100% digital em Moçambique, focado em levar segurança e tranquilidade para todos os lares.
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#22C55E] hover:text-white transition-all cursor-pointer border border-slate-100">f</div>
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#22C55E] hover:text-white transition-all cursor-pointer border border-slate-100">t</div>
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#22C55E] hover:text-white transition-all cursor-pointer border border-slate-100">in</div>
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#22C55E] hover:text-white transition-all cursor-pointer border border-slate-100">ig</div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs text-[#1A202C] uppercase tracking-[0.2em] mb-8">Marketplace</h4>
            <ul className="space-y-4 text-sm font-bold text-[#718096]">
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Seguro Auto</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Seguro Saúde</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Seguro Residencial</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Seguro de Vida</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs text-[#1A202C] uppercase tracking-[0.2em] mb-8">Empresa</h4>
            <ul className="space-y-4 text-sm font-bold text-[#718096]">
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Sobre Nós</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Carreiras</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Parceiros</li>
              <li className="hover:text-[#22C55E] transition-colors cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs text-[#1A202C] uppercase tracking-[0.2em] mb-8">Contacto</h4>
            <ul className="space-y-5 text-sm font-bold text-[#718096]">
              <li className="flex items-center gap-3"><MapPin size={18} className="text-[#22C55E]"/> Av. 25 de Setembro, Maputo</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-[#22C55E]"/> +258 21 000 000</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-[#22C55E]"/> geral@safelife.co.mz</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <p>© 2026 SafeLife Moçambique. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Termos & Condições</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Política de Privacidade</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SolutionCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-green-500/10 transition-all group flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-green-50 text-[#22C55E] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#22C55E] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-black text-[#1A202C] mb-4">{title}</h3>
      <p className="text-sm text-[#718096] leading-relaxed mb-8 flex-1 font-medium">{desc}</p>
      <button className="text-sm font-black text-[#22C55E] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
        Explorar Planos <ChevronRight size={16} />
      </button>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-green-50 text-[#22C55E] rounded-2xl flex items-center justify-center shrink-0 border border-green-100">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="font-black text-[#1A202C]">{title}</h4>
        <p className="text-sm text-[#718096] leading-relaxed font-medium">{desc}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="space-y-2">
      <p className="text-4xl md:text-6xl font-black text-[#1A202C] tracking-tighter">{value}</p>
      <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
    </div>
  );
}
