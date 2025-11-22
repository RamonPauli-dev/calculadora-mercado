'use client';

import { Product } from './types';
import Card from './Card';

interface ProductListProps {
  products: Product[];
  onRemoveProduct: (id: string) => void;
}

export default function ProductList({ products, onRemoveProduct }: ProductListProps) {
  return (
    <Card size="md" spacing="md">
      <h2 className="text-base font-semibold mb-3 text-white-300">
        📋 Produtos ({products.length})
      </h2>
      
      {products.length === 0 ? (
        <p className="text-center text-white-300 py-6 text-sm">
          Adicione produtos para ver o total
        </p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-3 border border-white-500 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white text-sm truncate">
                  {product.name}
                </p>
                <p className="text-xs text-white-200">
                  {product.quantity} × R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="font-semibold text-green-400 text-sm">
                  R$ {(product.price * product.quantity).toFixed(2).replace('.', ',')}
                </span>
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="text-red-400 hover:text-red-300 p-1 rounded-full hover:bg-red-900 transition-colors text-sm"
                  title="Remover produto"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}