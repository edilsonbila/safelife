import React, { useState } from "react";
import { 
  Car, User, Shield, Check, 
  ArrowRight, ArrowLeft, Loader2, 
  Search, Info, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

const steps = [
  { id: 1, name: 'Dados Iniciais', icon: Search },
  { id: 2, name: 'Coberturas', icon: Shield },
  { id: 3, name: 'Comparativo', icon: Check },
];

export function Simulation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('car');

  const handleNext = () => {
    if (currentStep < 3) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(prev => prev + 1);
      }, 1000);
    } else {
      toast.success("Simulação enviada com sucesso!");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Simulação de Seguro</h1>
        <p className="text-slate-500 font-medium">Encontre a melhor cobertura em apenas 3 passos simples.</p>
      </header>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-4">
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={`
                w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
                ${currentStep === step.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-4 ring-indigo-50' : 
                  currentStep > step.id ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}
              `}>
                {currentStep > step.id ? <Check size={20} /> : <step.icon size={20} />}
              </div>
              <span className={`text-xs font-black uppercase tracking-widest ${currentStep === step.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                {step.name}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-20 h-0.5 rounded-full transition-all duration-500 ${currentStep > step.id ? 'bg-emerald-500' : 'bg-slate-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[500px] relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm z-10"
            >
              <Loader2 className="animate-spin text-indigo-600" size={48} />
              <p className="font-black text-slate-900 animate-pulse">Consultando seguradoras...</p>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12"
            >
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest">O que deseja segurar?</label>
                      <div className="grid grid-cols-2 gap-4">
                        {['car', 'home', 'life', 'health'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 ${
                              selectedCategory === cat ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <Car size={32} />
                            <span className="font-black text-sm capitalize">{cat}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Seu NUIT</label>
                        <input type="text" placeholder="123 456 789" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Cidade de Residência</label>
                        <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all font-medium appearance-none">
                          <option>Maputo</option>
                          <option>Beira</option>
                          <option>Nampula</option>
                          <option>Tete</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-black text-slate-900">Personalize sua Cobertura</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { name: 'Danos Próprios', desc: 'Cobre danos ao seu veículo.', price: '+ R$ 2.500/ano' },
                      { name: 'Terceiros (RCO)', desc: 'Obrigatório por lei.', price: 'Incluso' },
                      { name: 'Quebra de Vidros', desc: 'Proteção extra para cristais.', price: '+ R$ 450/ano' },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-3xl border border-slate-200 space-y-4 hover:border-indigo-600 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900">{item.name}</h4>
                          <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                        </div>
                        <p className="text-sm font-bold text-indigo-600">{item.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
                    <Info className="text-amber-600 shrink-0" size={24} />
                    <p className="text-sm text-amber-800 font-medium">
                      Note que os preços são estimativas baseadas no perfil padrão. O valor final será confirmado após análise de risco.
                    </p>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-slate-900">Melhores Opções Encontradas</h3>
                    <span className="text-sm text-slate-400 font-bold">4 seguradoras disponíveis</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { insurer: 'EMOSE', plan: 'Plano Diamante', price: 'MT 12.500', logo: 'E', recommended: true },
                      { insurer: 'Hollard', plan: 'Standard Plus', price: 'MT 14.200', logo: 'H', recommended: false },
                      { insurer: 'Fidelidade', plan: 'Prestige', price: 'MT 15.800', logo: 'F', recommended: false },
                    ].map((plan, i) => (
                      <div key={i} className={`
                        p-6 rounded-3xl border-2 flex flex-col md:flex-row items-center justify-between gap-6 transition-all
                        ${plan.recommended ? 'border-indigo-600 bg-indigo-50 shadow-lg' : 'border-slate-100 hover:border-slate-200'}
                      `}>
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-black">
                            {plan.logo}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-black text-xl text-slate-900">{plan.insurer}</h4>
                              {plan.recommended && (
                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-full">Recomendado</span>
                              )}
                            </div>
                            <p className="text-slate-500 font-medium">{plan.plan}</p>
                          </div>
                        </div>
                        <div className="text-center md:text-right">
                          <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Anual</p>
                          <p className="text-3xl font-black text-slate-900">{plan.price}</p>
                        </div>
                        <button className={`
                          px-8 py-3 rounded-2xl font-black transition-all
                          ${plan.recommended ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-900 text-white hover:bg-slate-800'}
                        `}>
                          Contratar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="p-8 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button 
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-colors ${currentStep === 1 ? 'text-slate-300' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-indigo-200 transition-all active:scale-95"
          >
            {currentStep === 3 ? 'Finalizar Proposta' : 'Continuar'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
