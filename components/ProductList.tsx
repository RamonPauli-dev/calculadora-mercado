'use client';

import { Product } from './types';
import Card from './Card';

interface ProductListProps {
  products: Product[];
  onRemoveProduct: (id: string) => void;
}

export default function ProductList({
  products,
  onRemoveProduct,
}: ProductListProps) {
  return (
    <Card size="md" spacing="md">
      <h2 className="text-white-300 mb-3 text-base font-semibold">
        📋 Produtos ({products.length})
      </h2>

      {products.length === 0 ? (
        <p className="text-white-300 py-6 text-center text-sm">
          Adicione produtos para ver o total
        </p>
      ) : (
        <div className="max-h-64 space-y-2 overflow-y-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-white-500 flex items-center justify-between rounded-lg border bg-gray-700 p-3 transition-colors hover:bg-gray-600"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  {product.name}
                </p>
                <p className="text-white-200 text-xs">
                  {product.quantity} × R${' '}
                  {product.price.toFixed(2).replace('.', ',')}
                </p>
              </div>

              <div className="flex flex-shrink-0 items-center gap-2">
                <span className="text-sm font-semibold text-green-400">
                  R${' '}
                  {(product.price * product.quantity)
                    .toFixed(2)
                    .replace('.', ',')}
                </span>
                <button
                  onClick={() => onRemoveProduct(product.id)}
                  className="rounded-full p-1 text-sm text-red-400 transition-colors hover:bg-red-900 hover:text-red-300"
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
