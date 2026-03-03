import React from "react";
import { 
  Users, ShieldCheck, HeartPulse, TrendingUp, 
  Settings, CheckCircle2, Clock, XCircle, 
  Eye, Download, Filter, Search, MoreVertical,
  Briefcase, Activity, AlertTriangle, Building2
} from "lucide-react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { toast } from "sonner";

const globalData = [
  { month: 'Jan', revenue: 4500000, users: 1200 },
  { month: 'Fev', month: 'Fev', revenue: 5200000, users: 1450 },
  { month: 'Mar', revenue: 4800000, users: 1680 },
  { month: 'Abr', revenue: 6100000, users: 1920 },
  { month: 'Mai', revenue: 5900000, users: 2150 },
  { month: 'Jun', revenue: 7200000, users: 2480 },
];

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

export function AdminDashboard() {
  const handleApprove = (name: string) => toast.success(`Seguradora ${name} aprovada com sucesso!`);
  const handleReject = (name: string) => toast.error(`Inscrição de ${name} rejeitada.`);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Painel Administrativo 🏛️</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <Activity size={16} className="text-indigo-600" />
            Estado do Sistema: Operacional
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            <Download size={20} />
            Gerar Relatório Anual
          </button>
        </div>
      </header>

      {/* Admin Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricItem label="Utilizadores Totais" value="10.2k" sub="+12% este mês" icon={<Users className="text-indigo-600" size={24}/>} />
        <MetricItem label="Seguradoras Ativas" value="15" sub="3 pendentes" icon={<Building2 className="text-emerald-600" size={24}/>} />
        <MetricItem label="GTV (Volume de Prémios)" value="MZN 142.5M" sub="+8.5% p.a." icon={<TrendingUp className="text-amber-600" size={24}/>} />
        <MetricItem label="Taxa de Sinistros" value="28.4%" sub="Média do mercado" icon={<ShieldCheck className="text-rose-600" size={24}/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Growth Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Crescimento da Plataforma</h3>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-black rounded-lg">Receita</button>
              <button className="px-4 py-2 bg-slate-50 text-slate-500 text-xs font-black rounded-lg">Utilizadores</button>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={globalData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="revenue" fill="#4f46e5" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending Insurer Approvals */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Novos Pedidos de Adesão</h3>
          <div className="bg-white rounded-[2rem] border border-slate-200 p-8 space-y-6 shadow-sm">
            <ApprovalCard 
              name="Seguros Delta" 
              date="22/02/2026" 
              onApprove={() => handleApprove("Seguros Delta")} 
              onReject={() => handleReject("Seguros Delta")} 
            />
            <ApprovalCard 
              name="Maputo Vida SA" 
              date="20/02/2026" 
              onApprove={() => handleApprove("Maputo Vida SA")} 
              onReject={() => handleReject("Maputo Vida SA")} 
            />
            <div className="pt-4 text-center">
              <button className="text-indigo-600 font-black text-sm uppercase tracking-widest hover:underline">Ver Todos os Pedidos</button>
            </div>
          </div>
          
          <div className="bg-indigo-900 rounded-[2rem] p-8 text-white space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-indigo-300">Resumo de Auditoria</p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>KYC Verificados</span>
                <span className="font-black">98.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Alertas de Fraude</span>
                <span className="font-black text-rose-400">02</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Relatório Compliance</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Insurer Management */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/50">
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">Gestão de Seguradoras</h3>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Procurar seguradora..." className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-0 w-64" />
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80 border-b border-slate-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Seguradora</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Produtos Ativos</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Prémios</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Taxa Renovação</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Acções</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <InsurerRow name="EMOSE" products={12} revenue="MZN 42.1M" renewal="92%" status="ACTIVE" />
              <InsurerRow name="Hollard MZ" products={8} revenue="MZN 38.5M" renewal="88%" status="ACTIVE" />
              <InsurerRow name="Fidelidade" products={15} revenue="MZN 51.0M" renewal="94%" status="ACTIVE" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MetricItem({ label, value, sub, icon }: { label: string, value: string, sub: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-2xl font-black text-slate-900 tracking-tighter">{value}</p>
        <p className="text-xs font-bold text-emerald-600 mt-1">{sub}</p>
      </div>
    </div>
  );
}

function ApprovalCard({ name, date, onApprove, onReject }: { name: string, date: string, onApprove: () => void, onReject: () => void }) {
  return (
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
          <Briefcase size={20} className="text-slate-400" />
        </div>
        <div>
          <p className="text-sm font-black text-slate-900">{name}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enviado em {date}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={onApprove} className="flex-1 py-2.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-indigo-700 transition-all">Aprovar</button>
        <button onClick={onReject} className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">Rejeitar</button>
      </div>
    </div>
  );
}

function InsurerRow({ name, products, revenue, renewal, status }: { name: string, products: number, revenue: string, renewal: string, status: string }) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-black text-[10px]">
            {name.substring(0, 2)}
          </div>
          <span className="text-sm font-black text-slate-900">{name}</span>
        </div>
      </td>
      <td className="px-8 py-6 text-sm font-bold text-slate-700">{products}</td>
      <td className="px-8 py-6 text-sm font-black text-indigo-600">{revenue}</td>
      <td className="px-8 py-6 text-sm font-medium text-slate-500">{renewal}</td>
      <td className="px-8 py-6 text-right">
        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
          <Settings size={18} />
        </button>
      </td>
    </tr>
  );
}
