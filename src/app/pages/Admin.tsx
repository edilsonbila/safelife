import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 800 },
  { name: 'Mai', value: 500 },
  { name: 'Jun', value: 900 },
];

const pieData = [
  { name: 'Ativos', value: 400 },
  { name: 'Pendentes', value: 300 },
  { name: 'Inativos', value: 100 },
];

const COLORS = ['#4f46e5', '#f59e0b', '#94a3b8'];

export function Admin() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Painel Administrativo</h1>
        <p className="text-slate-500 mt-1">Visão geral do sistema e métricas de desempenho.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Receita Total', value: 'R$ 45.231,89', icon: DollarSign, trend: '+12.5%', isUp: true },
          { label: 'Novos Usuários', value: '+2,350', icon: Users, trend: '+18.2%', isUp: true },
          { label: 'Sessões Ativas', value: '12,234', icon: Activity, trend: '-3.1%', isUp: false },
          { label: 'Taxa de Conversão', value: '3.24%', icon: TrendingUp, trend: '+4.3%', isUp: true },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trend}
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Crescimento de Usuários</h3>
            <select className="text-xs font-medium text-slate-500 border-none bg-transparent focus:ring-0">
              <option>Últimos 6 meses</option>
              <option>Último ano</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-8">Distribuição de Status</h3>
          <div className="h-[250px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-6">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i]}}></div>
                  <span className="text-slate-600 font-medium">{item.name}</span>
                </div>
                <span className="text-slate-900 font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Atividades Recentes</h3>
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { user: 'Ana Paula', action: 'criou um novo registro', time: 'há 2 minutos', color: 'indigo' },
            { user: 'Marcos Silva', action: 'deletou um item', time: 'há 15 minutos', color: 'rose' },
            { user: 'Sistema', action: 'backup concluído com sucesso', time: 'há 1 hora', color: 'emerald' },
            { user: 'Luciana Pereira', action: 'editou configurações do perfil', time: 'há 3 horas', color: 'amber' },
          ].map((activity, i) => (
            <div key={i} className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className={`w-2 h-2 rounded-full bg-${activity.color}-500 shadow-[0_0_8px_rgba(0,0,0,0.1)] shadow-${activity.color}-500/20`}></div>
              <div className="flex-1">
                <p className="text-sm text-slate-900">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
