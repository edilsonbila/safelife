import { useLocation } from 'react-router';
import { Construction } from 'lucide-react';
import { motion } from 'motion/react';

export function GenericPage() {
  const location = useLocation();
  
  // Extract title from path (e.g., "/billing" -> "Billing")
  const title = location.pathname.split('/').pop() || 'Page';
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-6">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center text-indigo-500"
      >
        <Construction size={48} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white capitalize mb-2">
          {formattedTitle}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Este módulo ({formattedTitle}) faz parte do mapa do sistema, mas sua implementação visual ainda está em desenvolvimento.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-left font-mono text-sm text-gray-600 dark:text-gray-400 mt-8"
      >
        <p className="mb-2">// Status do Desenvolvimento</p>
        <div className="flex justify-between mb-1">
          <span>Backend API:</span>
          <span className="text-green-500">Ready</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Database Schema:</span>
          <span className="text-green-500">Ready</span>
        </div>
        <div className="flex justify-between">
          <span>Frontend UI:</span>
          <span className="text-yellow-500">Pending</span>
        </div>
      </motion.div>
    </div>
  );
}
