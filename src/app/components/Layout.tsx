import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { 
  ShieldCheck, LayoutDashboard, Search, FileText, 
  Settings, User, Bell, Globe, LogOut, 
  Briefcase, Users, PieChart, LifeBuoy, Menu, X
} from "lucide-react";
import { useApp, UserRole } from "../context/AppContext";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "motion/react";

export function RootLayout() {
  const { role, setRole, language, setLanguage } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = {
    guest: [
      { name: 'Início', path: '/', icon: Globe },
      { name: 'Simulação', path: '/simulacao', icon: Search },
    ],
    client: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Simulação', path: '/simulacao', icon: Search },
      { name: 'Minhas Apólices', path: '/policies', icon: ShieldCheck },
      { name: 'Sinistros', path: '/claims', icon: LifeBuoy },
    ],
    insurer: [
      { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Gerir Produtos', path: '/insurer-management', icon: Briefcase },
      { name: 'Propostas', path: '/proposals', icon: FileText },
      { name: 'Sinistros', path: '/claims', icon: LifeBuoy },
    ],
    admin: [
      { name: 'Visão Geral', path: '/dashboard', icon: LayoutDashboard },
      { name: 'Seguradoras', path: '/admin', icon: Users },
      { name: 'Relatórios', path: '/dashboard', icon: PieChart },
      { name: 'Configurações', path: '/admin', icon: Settings },
    ]
  };

  const changeRole = (newRole: UserRole) => {
    setRole(newRole);
    setIsSidebarOpen(false);
    navigate(newRole === 'guest' ? '/' : '/dashboard');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <Toaster position="top-right" richColors />

      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <ShieldCheck className="text-white" size={18} />
          </div>
          <span className="font-bold text-lg text-slate-900">SafeLife</span>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-6">
          <div className="mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <ShieldCheck className="text-white" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-900 tracking-tight">SafeLife</h1>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Seguros Moçambique</p>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Menu Principal</p>
            {navigation[role].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive(item.path)
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                <item.icon size={20} className={isActive(item.path) ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'} />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100 space-y-4">
            <div className="bg-slate-50 rounded-xl p-3">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Alternar Perfil (Demo)</p>
              <div className="grid grid-cols-2 gap-2">
                {(['client', 'insurer', 'admin', 'guest'] as UserRole[]).map((r) => (
                  <button
                    key={r}
                    onClick={() => changeRole(r)}
                    className={`text-[10px] font-bold py-1.5 rounded-lg border transition-all ${
                      role === r ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all">
              <LogOut size={20} />
              Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="hidden md:flex h-16 bg-white border-b border-slate-200 px-8 items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span className="font-medium text-slate-900">Bom dia, Usuário SafeLife</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>{new Date().toLocaleDateString('pt-MZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-200">
              <Globe size={16} className="text-slate-400" />
              <button 
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="text-xs font-bold text-slate-600 hover:text-indigo-600"
              >
                {language.toUpperCase()}
              </button>
            </div>
            
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-px bg-slate-200"></div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-900">Maputo User</p>
                <p className="text-[10px] text-slate-500 capitalize">{role}</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 border border-indigo-200 shadow-sm overflow-hidden">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <motion.div
            key={location.pathname + role}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
