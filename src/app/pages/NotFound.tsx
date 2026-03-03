import { Link } from 'react-router';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-6">
        <AlertTriangle size={40} />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Página não encontrada</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        A página que você está procurando não existe ou ainda não foi implementada neste protótipo.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
      >
        <ArrowLeft size={18} />
        Voltar para o Explorador
      </Link>
    </div>
  );
}
