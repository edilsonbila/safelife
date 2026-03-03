import React from "react";
import { 
  Check, ChevronRight, Filter, ArrowUpDown, 
  Headphones, MessageSquare, Clock, ShieldCheck, 
  Zap, Shield, Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";
import { useNavigate } from "react-router";

export function ProductList() {
  const navigate = useNavigate();

  const products = [
    {
      id: "1",
      insurer: "EMOSE",
      plan: "Proteção Premium",
      badge: "Melhor Valor",
      badgeColor: "bg-blue-50 text-blue-600",
      logo: "EM",
      features: [
        "Cobertura de Danos Próprios 100%",
        "Assistência 24h em todo país",
        "Quebra Isolada de Vidros",
        "Carro de Substituição (15 dias)"
      ],
      price: "2.450"
    },
    {
      id: "2",
      insurer: "HOLLARD",
      plan: "Plano Executivo",
      badge: "Mais Popular",
      badgeColor: "bg-green-50 text-green-600",
      logo: "HL",
      features: [
        "Responsabilidade Civil (Terceiros)",
        "Assistência VIP 24/7",
        "Proteção contra Furto e Roubo",
        "Cobertura regional SADC"
      ],
      price: "3.100"
    },
    {
      id: "3",
      insurer: "ICE",
      plan: "Seguro Essencial+",
      logo: "ICE",
      features: [
        "Incêndio, Raio e Explosão",
        "Danos Materiais Temporários",
        "Assistência Médica de Emergência",
        "Válido em Moçambique e SADC"
      ],
      price: "2.850"
    },
    {
      id: "4",
      insurer: "FIDELIDADE-ÍMPAR",
      plan: "Total Plus+",
      badge: "Cobertura Total",
      badgeColor: "bg-purple-50 text-purple-600",
      logo: "FD",
      features: [
        "Zero Franquia em Danos Próprios",
        "Assistência VIP Plus",
        "Garantia Territorial Total",
        "Gestor de Sinistros Dedicado"
      ],
      price: "4.200"
    },
    {
      id: "5",
      insurer: "GLOBAL ALLIANCE",
      plan: "Smart Drive",
      badge: "Económico",
      badgeColor: "bg-orange-50 text-orange-600",
      logo: "GA",
      features: [
        "Cobertura Básica Obrigatória",
        "Assistência em Viagem Nacional",
        "Danos a Terceiros Simplificado",
        "Ideal para condutores urbanos"
      ],
      price: "2.100"
    },
    {
      id: "6",
      insurer: "HOLLARD",
      plan: "Frotas & Família",
      logo: "HL",
      features: [
        "Até 3 veículos incluídos",
        "Descontos Progressivos",
        "Manutenção em Oficinas Certificadas",
        "Cobertura de Acidentes Pessoais"
      ],
      price: "3.800"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs & Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">
          <span className="hover:text-slate-600 cursor-pointer">Início</span>
          <ChevronRight size={12} />
          <span className="hover:text-slate-600 cursor-pointer">Resultados</span>
          <ChevronRight size={12} />
          <span className="text-slate-900">Seguro Automóvel</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-black text-[#1A202C] tracking-tight">
              Encontramos 6 Opções de Seguro
            </h1>
            <p className="text-slate-500 font-medium max-w-2xl">
              Comparamos as melhores seguradoras de Moçambique para garantir o preço mais justo para o seu <span className="font-bold text-slate-900">Toyota Hilux 2023</span>.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter size={18} />
              Filtros
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              <ArrowUpDown size={18} />
              Ordenar
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-slate-100 rounded-[32px] p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all group flex flex-col relative">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center font-black text-xs text-slate-400">
                   {p.logo}
                </div>
                {p.badge && (
                  <div className={`${p.badgeColor} px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    {p.badge}
                  </div>
                )}
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{p.insurer}</p>
                <h3 className="text-xl font-black text-[#1A202C]">{p.plan}</h3>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {p.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-medium text-slate-500 leading-tight">
                    <Check size={18} className="text-[#22C55E] shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50 mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Prémio Mensal</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-[#1A202C] tracking-tight">{p.price} MT</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">*IVA Incluído</span>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => navigate(`/products/${p.id}/simulate`)}
                  className="w-full bg-[#22C55E] text-white py-4.5 rounded-2xl font-black text-sm hover:bg-[#16a34a] transition-all shadow-lg shadow-green-100/50"
                >
                  Contratar Agora
                </button>
                <button className="w-full text-center text-sm font-black text-[#22C55E] hover:underline transition-all">
                  Ver Detalhes do Plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-green-50 text-[#22C55E] rounded-full flex items-center justify-center">
              <Headphones size={28} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#1A202C] mb-2">Ainda não tem a certeza de qual escolher?</h3>
              <p className="text-sm font-medium text-slate-500 max-w-md">
                Nossos especialistas em seguros estão disponíveis para ajudar você a escolher a melhor apólice para as suas necessidades específicas, sem custos adicionais.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-200 rounded-2xl font-black text-sm text-[#4A5568] hover:bg-slate-50 transition-colors">
              Falar com especialista
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#22C55E] text-white rounded-2xl font-black text-sm hover:bg-[#16a34a] transition-all shadow-lg shadow-green-100">
              <MessageSquare size={18} />
              Chat ao Vivo
            </button>
          </div>
        </div>
      </div>

      {/* Vantagens Section */}
      <div className="bg-[#F8FAF9] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#1A202C] text-center mb-16">Vantagens de Usar a SafeLife</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-[#22C55E]">
                <Clock size={24} />
              </div>
              <h4 className="font-black text-lg text-[#1A202C]">Rapidez Garantida</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed px-4">
                Emissão da sua apólice em até 24 horas úteis após a aprovação do pagamento.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-[#22C55E]">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-black text-lg text-[#1A202C]">Segurança Total</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed px-4">
                Dados protegidos por criptografia de ponta e parcerias apenas com seguradoras reguladas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm text-[#22C55E]">
                <Zap size={24} />
              </div>
              <h4 className="font-black text-lg text-[#1A202C]">Preço de Mercado</h4>
              <p className="text-sm font-medium text-slate-500 leading-relaxed px-4">
                Garantimos os mesmos preços oferecidos diretamente pelas seguradoras, ou menores.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-8 px-4 border-t border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center shadow-lg shadow-green-100">
                  <ShieldCheck className="text-white" size={18} />
                </div>
                <span className="font-black text-xl text-[#1A202C] tracking-tighter">SafeLife</span>
              </div>
              <p className="text-sm text-[#718096] leading-relaxed font-medium max-w-xs">
                Protegendo o que é mais importante para você com os melhores seguros do mercado.
              </p>
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#22C55E] cursor-pointer"><Facebook size={16}/></div>
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#22C55E] cursor-pointer"><Twitter size={16}/></div>
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#22C55E] cursor-pointer"><Instagram size={16}/></div>
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#22C55E] cursor-pointer"><Linkedin size={16}/></div>
              </div>
            </div>

            <div>
              <h4 className="font-black text-[10px] text-[#1A202C] uppercase tracking-[0.2em] mb-8">Seguros</h4>
              <ul className="space-y-4 text-sm font-bold text-[#718096]">
                <li className="hover:text-[#22C55E] cursor-pointer">Seguro Auto</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Seguro Vida</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Seguro Residencial</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Seguro Viagem</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-[10px] text-[#1A202C] uppercase tracking-[0.2em] mb-8">Empresa</h4>
              <ul className="space-y-4 text-sm font-bold text-[#718096]">
                <li className="hover:text-[#22C55E] cursor-pointer">Sobre Nós</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Carreiras</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Parceiros</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-[10px] text-[#1A202C] uppercase tracking-[0.2em] mb-8">Suporte</h4>
              <ul className="space-y-4 text-sm font-bold text-[#718096]">
                <li className="hover:text-[#22C55E] cursor-pointer">Central de Ajuda</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Termos de Uso</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Privacidade</li>
                <li className="hover:text-[#22C55E] cursor-pointer">Contacto</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <p>© 2026 SafeLife. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <span className="hover:text-slate-900 cursor-pointer">Moçambique</span>
              <span className="hover:text-slate-900 cursor-pointer">Português</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
