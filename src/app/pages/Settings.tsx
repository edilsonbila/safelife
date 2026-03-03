import { motion } from 'motion/react';
import { Save, Bell, Lock, Eye, Monitor, Globe } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configurações</h1>
        <p className="text-gray-500 dark:text-gray-400">Gerencie suas preferências e configurações da conta.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Settings Navigation */}
        <div className="space-y-1">
          {[
            { id: 'general', label: 'Geral', icon: Monitor },
            { id: 'notifications', label: 'Notificações', icon: Bell },
            { id: 'privacy', label: 'Privacidade & Segurança', icon: Lock },
            { id: 'appearance', label: 'Aparência', icon: Eye },
            { id: 'language', label: 'Idioma & Região', icon: Globe },
          ].map((item, i) => (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                i === 0 
                  ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="md:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informações do Perfil</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-2xl">👤</div>
                <div>
                  <button className="px-3 py-1.5 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 transition-colors mr-2">Alterar Foto</button>
                  <button className="px-3 py-1.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">Remover</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                  <input type="text" defaultValue="Admin User" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500/50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sobrenome</label>
                  <input type="text" defaultValue="Sistema" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500/50 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" defaultValue="admin@sistema.com" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500/50 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500/50 outline-none resize-none" defaultValue="Administrador do sistema principal."></textarea>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                <Save size={16} />
                Salvar Alterações
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preferências</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-200">Modo Escuro</div>
                  <div className="text-sm text-gray-500">Alternar entre temas claro e escuro automaticamente.</div>
                </div>
                <div className="w-11 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-100 dark:border-gray-700">
                <div>
                  <div className="font-medium text-gray-900 dark:text-gray-200">Notificações por Email</div>
                  <div className="text-sm text-gray-500">Receber resumo semanal de atividades.</div>
                </div>
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full relative cursor-pointer">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
