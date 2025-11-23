'use client';

import Card from './Card';
import Stepper from './Stepper';

interface ProductFormProps {
  productName: string;
  productPrice: string;
  productQuantity: number; // Mudou para number
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductQuantityChange: (value: number) => void; // Mudou para number
  onAddProduct: () => void;
}

export default function ProductForm({
  productName,
  productPrice,
  productQuantity,
  onProductNameChange,
  onProductPriceChange,
  onProductQuantityChange,
  onAddProduct,
}: ProductFormProps) {
  const handlePriceChange = (value: string) => {
    let numbers = value.replace(/\D/g, '');

    while (numbers.length < 4) {
      numbers = '0' + numbers;
    }

    const formatted = numbers.slice(0, -2) + ',' + numbers.slice(-2);

    let finalValue = formatted;
    if (numbers.length > 4) {
      finalValue =
        parseInt(numbers.slice(0, -2)).toString() + ',' + numbers.slice(-2);
    }

    onProductPriceChange(finalValue);
  };

  return (
    <Card size="md" spacing="md">
      <h2 className="text-white-300 mb-3 text-base font-semibold">
        ➕ Adicionar Produto
      </h2>

      <div className="space-y-3">
        <div>
          <label className="text-white-200 mb-1 block text-xs">Nome</label>
          <input
            type="text"
            placeholder="Arroz, Leite, Carne..."
            value={productName}
            onChange={(e) => onProductNameChange(e.target.value)}
            className="border-white-500 focus:ring-white-500 placeholder-white-300 w-full rounded-lg border bg-gray-700 p-3 text-sm text-white focus:border-transparent focus:ring-2"
            onKeyPress={(e) => e.key === 'Enter' && onAddProduct()}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-white-200 mb-1 block text-xs">
              Valor Unit.
            </label>
            <div className="relative">
              <input
                type="text"
                inputMode="decimal" // Teclado numérico com decimal
                pattern="[0-9,]*" // Padrão para números e vírgula
                value={productPrice}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full rounded-lg border border-blue-500 bg-gray-700 p-2 text-center font-mono text-base text-blue-100 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && onAddProduct()}
              />
              <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center">
                <span className="text-white-300 font-mono text-sm">R$</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-white-200 mb-1 block text-xs">
              Quantidade
            </label>
            <Stepper
              value={productQuantity}
              onChange={onProductQuantityChange}
              min={1}
              max={999}
            />
          </div>
        </div>

        <button
          onClick={onAddProduct}
          className="hover:bg-white-700 flex w-full items-center justify-center gap-1 rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white transition-colors"
        >
          Adicionar
        </button>
      </div>
    </Card>
  );
}
