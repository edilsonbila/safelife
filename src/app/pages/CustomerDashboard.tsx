import React from "react";
import { 
  FileText, TrendingUp, AlertCircle, PlusCircle, 
  Download, ExternalLink, Calendar, ShieldCheck, 
  MapPin, Clock, Search, Filter, MoreVertical, 
  Car, HeartPulse, Home
} from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";

export function CustomerDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Bem-vindo, {user?.name.split(' ')[0]} 👋</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <ShieldCheck size={16} className="text-indigo-600" />
            Sua conta está protegida e verificada
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} />
            Baixar Extratos
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            <PlusCircle size={20} />
            Novo Seguro
          </button>
        </div>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Apólices Ativas" value="03" color="indigo" />
        <StatCard label="Sinistros em Aberto" value="01" color="amber" />
        <StatCard label="Próxima Renovação" value="24 Ago" color="emerald" />
        <StatCard label="Proteção Total" value="MZN 4.5M" color="slate" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Active Policies */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Minhas Apólices</h2>
            <button className="text-indigo-600 font-bold text-sm hover:underline">Ver todas</button>
          </div>
          
          <div className="space-y-4">
            <PolicyItem 
              id="POL-MZ-9844" 
              insurer="EMOSE" 
              type="AUTO" 
              name="Seguro de Danos Próprios" 
              expiry="12 Jan 2027" 
              status="ACTIVE" 
            />
            <PolicyItem 
              id="POL-MZ-2210" 
              insurer="Hollard" 
              type="HEALTH" 
              name="Plano de Saúde Familiar" 
              expiry="05 Mar 2027" 
              status="ACTIVE" 
            />
          </div>
        </div>

        {/* Claims & Alerts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Sinistros & Alertas</h2>
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 space-y-6">
            <div className="flex gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <AlertCircle size={24} className="text-amber-600 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Sinistro Pendente</p>
                <p className="text-xs text-slate-600 font-medium">Aguardando documentos complementares para o incidente de 12/02.</p>
                <button className="text-xs font-black text-amber-700 underline pt-2">Anexar Documentos</button>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">Próximos Pagamentos</p>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-black text-slate-900">Seguro Auto</p>
                  <p className="text-xs text-slate-500">Vence em 5 dias</p>
                </div>
                <span className="font-black text-indigo-600">MZN 1.250</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-black text-slate-900">Seguro Saúde</p>
                  <p className="text-xs text-slate-500">Vence em 18 dias</p>
                </div>
                <span className="font-black text-indigo-600">MZN 3.200</span>
              </div>
            </div>
            
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <Clock size={18} />
              Histórico Completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  const colors: Record<string, string> = {
    indigo: "text-indigo-600 border-indigo-100 bg-indigo-50/30",
    amber: "text-amber-600 border-amber-100 bg-amber-50/30",
    emerald: "text-emerald-600 border-emerald-100 bg-emerald-50/30",
    slate: "text-slate-900 border-slate-100 bg-slate-50/30",
  };
  
  return (
    <div className={`p-8 rounded-[2rem] border-2 flex flex-col items-center gap-2 transition-all hover:scale-105 duration-300 ${colors[color]}`}>
      <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{label}</span>
      <span className="text-4xl font-black tracking-tighter">{value}</span>
    </div>
  );
}

function PolicyItem({ id, insurer, type, name, expiry, status }: { id: string, insurer: string, type: string, name: string, expiry: string, status: string }) {
  const icons: Record<string, React.ReactNode> = {
    AUTO: <Car className="text-indigo-600" size={24}/>,
    HEALTH: <HeartPulse className="text-emerald-600" size={24}/>,
    HOME: <Home className="text-amber-600" size={24}/>,
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-all">
            {icons[type]}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-0.5 rounded-lg">{id}</span>
              <span className="text-xs font-black uppercase tracking-widest text-indigo-600">{insurer}</span>
            </div>
            <h3 className="text-xl font-black text-slate-900">{name}</h3>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14}/>Expira em: {expiry}</span>
              <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"><CheckCircle2 size={12}/>{status}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all hover:bg-white">
            <Download size={20} />
          </button>
          <button className="flex-1 md:flex-none px-8 py-4 bg-white border border-slate-200 rounded-2xl font-black text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
            Ver Detalhes
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
