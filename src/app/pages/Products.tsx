import { motion } from 'motion/react';
import { Package, Plus, Search, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 1, name: 'Smartphone X Pro', category: 'Eletrônicos', price: 'R$ 4.500,00', stock: 120, status: 'Em Estoque' },
  { id: 2, name: 'Notebook Ultra Slim', category: 'Informática', price: 'R$ 7.200,00', stock: 45, status: 'Em Estoque' },
  { id: 3, name: 'Monitor 4K 27"', category: 'Periféricos', price: 'R$ 2.100,00', stock: 0, status: 'Esgotado' },
  { id: 4, name: 'Teclado Mecânico RGB', category: 'Periféricos', price: 'R$ 650,00', stock: 85, status: 'Em Estoque' },
  { id: 5, name: 'Mouse Wireless Ergo', category: 'Periféricos', price: 'R$ 320,00', stock: 200, status: 'Em Estoque' },
  { id: 6, name: 'Cadeira Gamer Elite', category: 'Móveis', price: 'R$ 1.800,00', stock: 15, status: 'Baixo Estoque' },
];

export function Products() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Catálogo de Produtos</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 dark:shadow-none self-end sm:self-auto">
          <Plus size={16} />
          Adicionar Produto
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          />
        </div>
        <div className="flex gap-2">
          <select className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
            <option>Todas Categorias</option>
            <option>Eletrônicos</option>
            <option>Informática</option>
            <option>Móveis</option>
          </select>
          <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="h-40 bg-gray-100 dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
              <Package size={48} className="text-gray-300 dark:text-gray-600" />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              <div className="absolute top-3 right-3">
                 <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    product.stock === 0 ? 'bg-red-100 text-red-700' :
                    product.stock < 20 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                 }`}>
                   {product.stock === 0 ? 'Esgotado' : `${product.stock} un.`}
                 </span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-1">{product.category}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 truncate" title={product.name}>{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{product.price}</span>
                <button className="text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors">Detalhes →</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
