import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { 
  ShieldCheck, LayoutDashboard, Search, FileText, 
  Settings, User, Bell, LogOut, Menu, X, 
  Briefcase, TrendingUp, HelpCircle, HeartPulse, 
  Car, Home as HomeIcon, Languages
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { Toaster, toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";

export function AppLayout() {
  const { user, logout, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Sessão encerrada com sucesso!");
  };

  const isDashboard = location.pathname.includes("/dashboard") || 
                      location.pathname.includes("/partner") || 
                      location.pathname.includes("/admin");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Toaster position="top-right" richColors />
      
      {/* Navigation Bar matching the image */}
      {!isDashboard && (
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-50 sticky top-0 z-50 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 md:h-20 items-center">
              <div className="flex items-center gap-12">
                <Link to="/" className="flex items-center gap-2 group">
                  <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-100 group-hover:scale-105 transition-transform">
                    <ShieldCheck className="text-white" size={22} />
                  </div>
                  <span className="font-black text-2xl tracking-tighter text-[#1A202C] leading-none">SafeLife</span>
                </Link>
                
                <div className="hidden lg:flex items-center gap-8">
                  <NavLink to="/" label="Inicio" active={location.pathname === "/"} />
                  <NavLink to="/products" label="Seguros" active={location.pathname === "/products"} />
                  <NavLink to="/claims/public" label="Sinistros" />
                  <NavLink to="/about" label="Ajuda" />
                </div>
              </div>

              <div className="flex items-center gap-4">
                {user ? (
                   <div className="flex items-center gap-4">
                    <Link 
                      to={user.role === 'ADMIN' ? '/admin' : user.role === 'PARTNER' ? '/partner' : '/dashboard'} 
                      className="flex items-center gap-2 pl-2 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold group-hover:bg-green-500 group-hover:text-white transition-all">
                        {user.name.substring(0, 1)}
                      </div>
                      <div className="hidden sm:block text-left">
                        <p className="text-xs font-black text-slate-900 leading-none">{user.name}</p>
                      </div>
                    </Link>
                    <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => login("CUSTOMER")} 
                      className="text-sm font-black text-[#4A5568] hover:text-green-600 transition-colors px-4 py-2"
                    >
                      Login
                    </button>
                    <button 
                      onClick={() => navigate("/products")}
                      className="bg-[#22C55E] text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-95"
                    >
                      Simular agora
                    </button>
                  </div>
                )}

                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-slate-600"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
              >
                <div className="px-4 py-8 space-y-6">
                  <Link to="/" className="block text-xl font-black text-[#1A202C]">Inicio</Link>
                  <Link to="/products" className="block text-xl font-black text-[#1A202C]">Seguros</Link>
                  <Link to="/claims" className="block text-xl font-black text-[#1A202C]">Sinistros</Link>
                  <Link to="/about" className="block text-xl font-black text-[#1A202C]">Ajuda</Link>
                  <hr className="border-slate-50" />
                  {!user && (
                    <button onClick={() => login("CUSTOMER")} className="w-full bg-green-500 text-white py-4 rounded-2xl font-black">Login / Entrar</button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 ${isDashboard ? "flex h-[calc(100vh)] overflow-hidden" : ""}`}>
        {isDashboard && user && (
          <aside className="w-72 bg-white border-r border-slate-100 hidden md:flex flex-col p-8">
             <div className="mb-12 flex items-center gap-2">
                <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="text-white" size={20} />
                </div>
                <span className="font-black text-xl tracking-tighter text-[#1A202C]">SafeLife</span>
              </div>

            <div className="flex-1 space-y-2">
              <SidebarItem icon={<LayoutDashboard size={20} />} label="Painel Principal" active={location.pathname.endsWith("/dashboard") || location.pathname === "/admin" || location.pathname === "/partner"} to={user.role === 'ADMIN' ? '/admin' : user.role === 'PARTNER' ? '/partner' : '/dashboard'} />
              
              {user.role === 'CUSTOMER' && (
                <>
                  <SidebarItem icon={<FileText size={20} />} label="Minhas Apólices" to="/dashboard/policies" active={location.pathname.includes("policies")} />
                  <SidebarItem icon={<TrendingUp size={20} />} label="Sinistros" to="/dashboard/claims" active={location.pathname.includes("claims")} />
                  <SidebarItem icon={<Search size={20} />} label="Simular Seguro" to="/products" />
                </>
              )}

              {user.role === 'PARTNER' && (
                <>
                  <SidebarItem icon={<Briefcase size={20} />} label="Produtos" to="/partner/products" />
                  <SidebarItem icon={<FileText size={20} />} label="Propostas" to="/partner/proposals" />
                  <SidebarItem icon={<TrendingUp size={20} />} label="Gestão de Sinistros" to="/partner/claims" />
                </>
              )}

              {user.role === 'ADMIN' && (
                <>
                  <SidebarItem icon={<HeartPulse size={20} />} label="Seguradoras" to="/admin/insurers" />
                  <SidebarItem icon={<TrendingUp size={20} />} label="Relatórios" to="/admin/reports" />
                  <SidebarItem icon={<Settings size={20} />} label="Configurações" to="/admin/settings" />
                </>
              )}
            </div>
            
            <div className="mt-auto space-y-4 pt-8 border-t border-slate-50">
               <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
                <LogOut size={18} />
                Sair do Sistema
              </button>
            </div>
          </aside>
        )}
        
        <div className={`flex-1 ${isDashboard ? "overflow-y-auto bg-slate-50/50" : ""}`}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavLink({ to, label, active }: { to: string, label: string, active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={`text-sm font-bold transition-all hover:text-green-600 ${
        active ? "text-green-600" : "text-[#4A5568]"
      }`}
    >
      {label}
    </Link>
  );
}

function SidebarItem({ icon, label, to, active }: { icon: React.ReactNode, label: string, to: string, active?: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-black transition-all ${
        active 
          ? "bg-green-500 text-white shadow-xl shadow-green-100" 
          : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
