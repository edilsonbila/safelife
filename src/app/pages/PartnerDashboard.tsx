import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, 
  PieChart, Pie, Cell 
} from 'recharts';
import { 
  Users, FileText, CheckCircle2, Clock, AlertTriangle, 
  MoreHorizontal, Plus, Search, Filter, ArrowUpRight,
  TrendingUp, Download, Eye, Check, X
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

const data = [
  { name: 'Jan', sales: 4000, claims: 2400 },
  { name: 'Fev', sales: 3000, claims: 1398 },
  { name: 'Mar', sales: 2000, claims: 9800 },
  { name: 'Abr', sales: 2780, claims: 3908 },
  { name: 'Mai', sales: 1890, claims: 4800 },
  { name: 'Jun', sales: 2390, claims: 3800 },
];

export function PartnerDashboard() {
  const { user } = useAuth();

  const handleApprove = () => toast.success("Proposta aprovada com sucesso!");
  const handleReject = () => toast.error("Proposta rejeitada.");

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xs tracking-tighter">
              {user?.company?.substring(0, 2)}
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">{user?.company} Dashboard</h1>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-600" />
                Desempenho: +12% em relação ao mês anterior
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} />
            Relatórios
          </button>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
            <Plus size={20} />
            Novo Produto
          </button>
        </div>
      </header>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="Total em Prémios" value="MZN 12.4M" trend="+8.2%" isUp={true} icon={<TrendingUp size={20}/>} />
        <MetricCard label="Apólices Emitidas" value="1,248" trend="+12.5%" isUp={true} icon={<FileText size={20}/>} />
        <MetricCard label="Novas Propostas" value="42" trend="Pendentes" isUp={false} icon={<Clock size={20} className="text-amber-500"/>} />
        <MetricCard label="Sinistros Pagos" value="MZN 4.1M" trend="-2.1%" isUp={true} icon={<CheckCircle2 size={20} className="text-emerald-500"/>} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Vendas vs Sinistros</h3>
            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-500 focus:ring-0">
              <option>Últimos 6 meses</option>
              <option>Este Ano</option>
            </select>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#4f46e5" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Proposals */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Propostas Pendentes</h3>
            <button className="text-indigo-600 font-bold text-sm">Ver todas</button>
          </div>
          
          <div className="space-y-4">
            <ProposalMiniCard name="Anacleto Silva" type="AUTO" value="MZN 14.5k" date="há 2h" />
            <ProposalMiniCard name="Maria Santos" type="HEALTH" value="MZN 32k" date="há 5h" />
            <ProposalMiniCard name="José Pereira" type="HOME" value="MZN 8.2k" date="há 1d" />
            <ProposalMiniCard name="Boutique Chique" type="BUSINESS" value="MZN 124k" date="há 2d" />
          </div>
        </div>
      </div>

      {/* Main Tables Area */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/50">
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Gestão de Sinistros</h3>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Acompanhe e valide incidentes reportados</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Pesquisar sinistro..." className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-0 w-64" />
            </div>
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/80 border-b border-slate-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Ref / Cliente</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tipo de Incidente</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Data Reporte</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <ClaimRow id="SIN-0922" client="Ricardo Costa" type="Colisão Frontal" date="24 Fev 2026" status="UNDER_REVIEW" />
              <ClaimRow id="SIN-0915" client="Sonia Matsinhe" type="Danos de Inundação" date="22 Fev 2026" status="APPROVED" />
              <ClaimRow id="SIN-0899" client="Carlos Tembe" type="Roubo de Bens" date="20 Fev 2026" status="REJECTED" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend, isUp, icon }: { label: string, value: string, trend: string, isUp: boolean, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4 hover:shadow-xl hover:shadow-indigo-500/5 transition-all">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-slate-50 rounded-2xl text-slate-600 border border-slate-100">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${isUp ? 'text-emerald-600' : 'text-slate-400'}`}>
          {trend}
          {isUp && <ArrowUpRight size={14} />}
        </div>
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
        <p className="text-2xl font-black text-slate-900 tracking-tighter">{value}</p>
      </div>
    </div>
  );
}

function ProposalMiniCard({ name, type, value, date }: { name: string, type: string, value: string, date: string }) {
  return (
    <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 flex items-center justify-between group hover:border-indigo-200 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
          {name.substring(0, 1)}
        </div>
        <div>
          <p className="text-sm font-black text-slate-900">{name}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{type} • {date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-black text-indigo-600">{value}</p>
        <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1 text-emerald-600 hover:bg-emerald-50 rounded-lg"><Check size={16}/></button>
          <button className="p-1 text-rose-600 hover:bg-rose-50 rounded-lg"><X size={16}/></button>
        </div>
      </div>
    </div>
  );
}

function ClaimRow({ id, client, type, date, status }: { id: string, client: string, type: string, date: string, status: string }) {
  const statusStyles: Record<string, string> = {
    UNDER_REVIEW: "bg-amber-50 text-amber-600",
    APPROVED: "bg-emerald-50 text-emerald-600",
    REJECTED: "bg-rose-50 text-rose-600",
  };
  
  const statusLabels: Record<string, string> = {
    UNDER_REVIEW: "Em Análise",
    APPROVED: "Aprovado",
    REJECTED: "Rejeitado",
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-8 py-6">
        <p className="text-sm font-black text-slate-900">{client}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{id}</p>
      </td>
      <td className="px-8 py-6 text-sm font-bold text-slate-700">{type}</td>
      <td className="px-8 py-6 text-sm font-medium text-slate-500">{date}</td>
      <td className="px-8 py-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusStyles[status]}`}>
          {statusLabels[status]}
        </span>
      </td>
      <td className="px-8 py-6 text-right">
        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
          <Eye size={20} />
        </button>
      </td>
    </tr>
  );
}
