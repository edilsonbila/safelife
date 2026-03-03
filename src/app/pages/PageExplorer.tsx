import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { 
  BarChart3, 
  Users, 
  Settings, 
  Package, 
  CreditCard, 
  FileText, 
  Mail, 
  Calendar,
  Shield,
  HelpCircle,
  LogOut,
  Map,
  Database,
  Globe,
  Smartphone,
  Server
} from 'lucide-react';

export function PageExplorer() {
  const navigate = useNavigate();

  const pages = [
    { 
      id: 'analytics', 
      title: 'Analytics Dashboard', 
      description: 'Visão geral das métricas de desempenho, gráficos e tendências.', 
      icon: BarChart3, 
      path: '/analytics', 
      color: 'bg-blue-500',
      category: 'Dashboard'
    },
    { 
      id: 'users', 
      title: 'Gerenciamento de Usuários', 
      description: 'Listagem, edição e controle de permissões de usuários do sistema.', 
      icon: Users, 
      path: '/users', 
      color: 'bg-green-500',
      category: 'Admin'
    },
    { 
      id: 'products', 
      title: 'Catálogo de Produtos', 
      description: 'Inventário completo, preços, categorias e gestão de estoque.', 
      icon: Package, 
      path: '/products', 
      color: 'bg-orange-500',
      category: 'E-commerce'
    },
    { 
      id: 'settings', 
      title: 'Configurações do Sistema', 
      description: 'Ajustes globais, preferências de tema e integrações.', 
      icon: Settings, 
      path: '/settings', 
      color: 'bg-slate-500',
      category: 'Sistema'
    },
    { 
      id: 'billing', 
      title: 'Faturamento e Pagamentos', 
      description: 'Histórico de faturas, métodos de pagamento e planos.', 
      icon: CreditCard, 
      path: '/billing', 
      color: 'bg-purple-500',
      category: 'Financeiro'
    },
    { 
      id: 'reports', 
      title: 'Relatórios Gerenciais', 
      description: 'Exportação de dados e relatórios personalizados em PDF/CSV.', 
      icon: FileText, 
      path: '/reports', 
      color: 'bg-teal-500',
      category: 'Dashboard'
    },
    { 
      id: 'messages', 
      title: 'Caixa de Entrada', 
      description: 'Central de mensagens e notificações do sistema.', 
      icon: Mail, 
      path: '/messages', 
      color: 'bg-pink-500',
      category: 'Comunicação'
    },
    { 
      id: 'calendar', 
      title: 'Agenda e Eventos', 
      description: 'Calendário de atividades, reuniões e prazos importantes.', 
      icon: Calendar, 
      path: '/calendar', 
      color: 'bg-indigo-500',
      category: 'Produtividade'
    },
    { 
      id: 'security', 
      title: 'Segurança e Auditoria', 
      description: 'Logs de acesso, autenticação em dois fatores e bloqueios.', 
      icon: Shield, 
      path: '/security', 
      color: 'bg-red-500',
      category: 'Admin'
    },
    { 
      id: 'help', 
      title: 'Central de Ajuda', 
      description: 'Documentação, tutoriais e suporte técnico.', 
      icon: HelpCircle, 
      path: '/help', 
      color: 'bg-cyan-500',
      category: 'Suporte'
    },
    { 
      id: 'api', 
      title: 'Documentação da API', 
      description: 'Endpoints, autenticação e exemplos de uso para desenvolvedores.', 
      icon: Database, 
      path: '/api-docs', 
      color: 'bg-yellow-500',
      category: 'Dev'
    },
    { 
      id: 'mobile', 
      title: 'Versão Mobile', 
      description: 'Visualização e configurações específicas para dispositivos móveis.', 
      icon: Smartphone, 
      path: '/mobile-settings', 
      color: 'bg-violet-500',
      category: 'Sistema'
    },
  ];

  const categories = Array.from(new Set(pages.map(p => p.category)));

  return (
    <div className="space-y-8 pb-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Explorador do Sistema</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Navegue por todos os módulos e funcionalidades disponíveis na plataforma. 
          Selecione um cartão para acessar a página correspondente.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pages.filter(p => p.category === category).map((page) => (
              <motion.div
                key={page.id}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all group"
                onClick={() => navigate(page.path)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${page.color} text-white shadow-lg shadow-${page.color}/20`}>
                    <page.icon size={24} />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs font-medium text-gray-500 dark:text-gray-400">
                    {page.category}
                  </div>
                </div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {page.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {page.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-400">
                  <span>Rota: {page.path}</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
