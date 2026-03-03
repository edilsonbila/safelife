import React, { useState } from "react";
import { PlusCircle, Search, Edit2, Trash2, Calendar, User, Mail, Tag, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

interface Entry {
  id: string;
  name: string;
  email: string;
  category: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
  date: string;
  location: string;
}

const initialEntries: Entry[] = [
  { id: '1', name: 'João Silva', email: 'joao@email.com', category: 'Cliente', status: 'Ativo', date: '2026-02-24', location: 'São Paulo, SP' },
  { id: '2', name: 'Maria Santos', email: 'maria@email.com', category: 'Parceiro', status: 'Pendente', date: '2026-02-23', location: 'Rio de Janeiro, RJ' },
  { id: '3', name: 'Ricardo Costa', email: 'ricardo@email.com', category: 'Vendedor', status: 'Inativo', date: '2026-02-22', location: 'Belo Horizonte, MG' },
];

export function Home() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Partial<Entry>>({
    name: '',
    email: '',
    category: 'Cliente',
    status: 'Ativo',
    date: new Date().toISOString().split('T')[0],
    location: ''
  });

  const filteredEntries = entries.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
    } as Entry;
    
    setEntries([newEntry, ...entries]);
    setIsModalOpen(false);
    toast.success("Registro adicionado com sucesso!");
    setFormData({
      name: '',
      email: '',
      category: 'Cliente',
      status: 'Ativo',
      date: new Date().toISOString().split('T')[0],
      location: ''
    });
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
    toast.error("Registro removido.");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gerenciamento de Registros</h1>
          <p className="text-slate-500 mt-1">Veja e adicione novos campos com facilidade.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
        >
          <PlusCircle size={20} />
          Novo Registro
        </button>
      </header>

      {/* Stats Cards Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total de Registros', value: entries.length, color: 'indigo' },
          { label: 'Ativos', value: entries.filter(e => e.status === 'Ativo').length, color: 'emerald' },
          { label: 'Pendentes', value: entries.filter(e => e.status === 'Pendente').length, color: 'amber' },
          { label: 'Categorias', value: new Set(entries.map(e => e.category)).size, color: 'sky' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Informações</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence mode='popLayout'>
                {filteredEntries.map((entry) => (
                  <motion.tr 
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    key={entry.id} 
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-bold uppercase">
                          {entry.name.substring(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{entry.name}</p>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <Mail size={12} />
                            {entry.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <p className="text-sm text-slate-700 flex items-center gap-1.5">
                          <Tag size={14} className="text-slate-400" />
                          {entry.category}
                        </p>
                        <p className="text-xs text-slate-500 flex items-center gap-1.5">
                          <MapPin size={12} className="text-slate-400" />
                          {entry.location}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        entry.status === 'Ativo' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        entry.status === 'Pendente' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                        'bg-slate-50 text-slate-700 border-slate-100'
                      }`}>
                        {entry.status === 'Ativo' && <CheckCircle2 size={12} />}
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => deleteEntry(entry.id)}
                          className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          {filteredEntries.length === 0 && (
            <div className="p-12 text-center text-slate-400">
              <p>Nenhum registro encontrado.</p>
            </div>
          )}
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Novo Registro</h2>
              <p className="text-sm text-slate-500">Preencha todos os campos para continuar.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      required
                      type="text" 
                      placeholder="João Silva" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      required
                      type="email" 
                      placeholder="email@exemplo.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Categoria</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none"
                  >
                    <option>Cliente</option>
                    <option>Parceiro</option>
                    <option>Vendedor</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Data</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Localização</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Cidade, Estado" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-lg shadow-indigo-100"
                >
                  Salvar Registro
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
