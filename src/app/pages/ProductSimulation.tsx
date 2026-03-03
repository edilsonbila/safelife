import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { 
  ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, 
  User, Mail, Phone, MapPin, Car, Calendar, 
  CreditCard, CreditCard as CardIcon, Wallet, 
  FileText, Download, Check
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

export function ProductSimulation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const steps = [
    { title: "Dados Pessoais", icon: <User size={18} /> },
    { title: "Objeto do Seguro", icon: <Car size={18} /> },
    { title: "Simulação", icon: <FileText size={18} /> },
    { title: "Pagamento", icon: <CreditCard size={18} /> },
  ];

  const handleNext = () => {
    if (step < 4) {
      setLoading(true);
      setTimeout(() => {
        setStep(step + 1);
        setLoading(false);
      }, 800);
    } else {
      toast.success("Apólice emitida com sucesso! Verifique o seu dashboard.");
      navigate("/dashboard/policies");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => step > 1 ? setStep(step - 1) : navigate("/products")}
            className="p-2 bg-white rounded-xl border border-slate-200 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Simulação de Seguro</h1>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Passo {step} de 4</p>
          </div>
        </div>

        {/* Stepper */}
        <div className="flex gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="flex-1">
              <div className={`h-1.5 rounded-full mb-3 transition-all duration-500 ${i + 1 <= step ? "bg-indigo-600" : "bg-slate-200"}`}></div>
              <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-wider ${i + 1 <= step ? "text-indigo-600" : "text-slate-400"}`}>
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all ${i + 1 <= step ? "bg-indigo-600 text-white border-indigo-600" : "border-slate-200"}`}>
                  {i + 1 < step ? <Check size={14} strokeWidth={4} /> : s.icon}
                </span>
                <span className="hidden sm:inline">{s.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form Area */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-indigo-500/5 p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {step === 1 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Informações de Identificação</h2>
                    <p className="text-slate-500">Comece por nos dizer quem é para podermos personalizar a sua oferta.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Nome Completo" placeholder="Anacleto Silva" icon={<User size={18}/>} />
                    <InputField label="NUIT" placeholder="123456789" icon={<FileText size={18}/>} />
                    <InputField label="E-mail" placeholder="anacleto@email.co.mz" icon={<Mail size={18}/>} />
                    <InputField label="Telemóvel" placeholder="+258 84 000 0000" icon={<Phone size={18}/>} />
                    <div className="md:col-span-2">
                      <InputField label="Endereço (Província, Cidade, Bairro)" placeholder="Maputo, Polana, Av. Eduardo Mondlane" icon={<MapPin size={18}/>} />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">O Que Deseja Segurar?</h2>
                    <p className="text-slate-500">Introduza os detalhes do seu veículo para cálculo do risco.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Marca do Veículo" placeholder="Toyota" icon={<Car size={18}/>} />
                    <InputField label="Modelo" placeholder="Hilux 2024" icon={<Car size={18}/>} />
                    <InputField label="Matrícula" placeholder="MMM-123-MP" icon={<FileText size={18}/>} />
                    <InputField label="Ano de Fabrico" placeholder="2024" icon={<Calendar size={18}/>} />
                    <InputField label="Valor Estimado (MZN)" placeholder="2.500.000" icon={<CreditCard size={18}/>} />
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Uso do Veículo</label>
                      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all">
                        <option>Pessoal / Lazer</option>
                        <option>Trabalho / Comercial</option>
                        <option>Transporte Público</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Escolha o Seu Plano</h2>
                    <p className="text-slate-500">Com base nos seus dados, estas são as melhores opções para si.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <PlanCard 
                      title="Plano Essencial" 
                      price="1.200" 
                      selected={true}
                      features={["Responsabilidade Civil", "Assistência em Viagem", "Quebra de Vidros"]} 
                    />
                    <PlanCard 
                      title="Plano Conforto" 
                      price="1.850" 
                      features={["Danos Próprios (Choque, Capotamento)", "Fogo, Raio e Explosão", "Responsabilidade Civil Alargada"]} 
                    />
                    <PlanCard 
                      title="Plano Platinum" 
                      price="2.400" 
                      features={["Todas as coberturas anteriores", "Veículo de Substituição", "Cobertura no Estrangeiro (África do Sul)", "Sem Franquia"]} 
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Pagamento & Conclusão</h2>
                    <p className="text-slate-500">Escolha o método de pagamento preferido em Moçambique.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PaymentOption icon={<Wallet className="text-emerald-500"/>} label="M-Pesa / e-Mola" active={true} />
                    <PaymentOption icon={<CardIcon className="text-indigo-500"/>} label="Cartão de Débito" />
                    <PaymentOption icon={<FileText className="text-slate-500"/>} label="Referência Bancária" />
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-slate-500 font-bold">Resumo do Seguro</p>
                      <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-black uppercase">AUTO - EMOSE</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-500">Prémio Anual</span>
                        <span className="text-slate-900">MZN 14.400,00</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span className="text-slate-500">Imposto de Selo</span>
                        <span className="text-slate-900">MZN 144,00</span>
                      </div>
                      <div className="flex justify-between font-black pt-4 border-t border-slate-200">
                        <span className="text-slate-900">Total a Pagar</span>
                        <span className="text-indigo-600 text-2xl">MZN 14.544,00</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-500 bg-amber-50 p-4 rounded-2xl border border-amber-100">
                    <ShieldCheck size={20} className="text-amber-600" />
                    <p>Ao clicar em "Finalizar", você concorda com os termos da apólice e autoriza o débito no método selecionado.</p>
                  </div>
                </div>
              )}

              <div className="mt-12 flex gap-4">
                <button 
                  onClick={handleNext}
                  disabled={loading}
                  className="flex-1 bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {step === 4 ? "Finalizar & Pagar" : "Continuar para Próximo Passo"}
                      <ArrowRight size={22} />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, placeholder, icon }: { label: string, placeholder: string, icon: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-black text-slate-700 uppercase tracking-wider">{label}</label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
        <input 
          type="text" 
          placeholder={placeholder} 
          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl font-bold text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>
    </div>
  );
}

function PlanCard({ title, price, features, selected }: { title: string, price: string, features: string[], selected?: boolean }) {
  return (
    <div className={`p-6 rounded-3xl border-2 transition-all cursor-pointer relative overflow-hidden ${selected ? "border-indigo-600 bg-indigo-50/50" : "border-slate-100 bg-white hover:border-indigo-200"}`}>
      {selected && <div className="absolute top-4 right-4 bg-indigo-600 text-white p-1 rounded-full"><Check size={14} /></div>}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-black text-slate-900">{title}</h3>
        <div className="text-right">
          <p className="text-2xl font-black text-indigo-600 tracking-tighter">MZN {price}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">por mês</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {features.map((f, i) => (
          <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wider">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

function PaymentOption({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`p-6 rounded-3xl border-2 flex flex-col items-center gap-4 transition-all cursor-pointer ${active ? "border-indigo-600 bg-indigo-50" : "border-slate-100 bg-white hover:border-slate-200"}`}>
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <span className="font-black text-xs text-slate-900 text-center uppercase tracking-wider">{label}</span>
    </div>
  );
}
