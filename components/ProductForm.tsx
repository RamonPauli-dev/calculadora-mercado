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
      finalValue = parseInt(numbers.slice(0, -2)).toString() + ',' + numbers.slice(-2);
    }
    
    onProductPriceChange(finalValue);
  };

  return (
    <Card size="md" spacing="md">
      <h2 className="text-base font-semibold mb-3 text-white-300">➕ Adicionar Produto</h2>
      
      <div className="space-y-3">
        <div>
          <label className="block text-xs text-white-200 mb-1">Nome</label>
          <input
            type="text"
            placeholder="Arroz, Leite, Carne..."
            value={productName}
            onChange={(e) => onProductNameChange(e.target.value)}
            className="w-full p-3 border border-white-500 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-transparent bg-gray-700 text-white placeholder-white-300 text-sm"
            onKeyPress={(e) => e.key === 'Enter' && onAddProduct()}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs text-white-200 mb-1">Valor Unit.</label>
            <div className="relative">
              <input
                type="text"
                value={productPrice}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full p-2 border border-white-500 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-transparent text-center font-mono text-base bg-gray-700 text-white-100"
                onKeyPress={(e) => e.key === 'Enter' && onAddProduct()}
              />
              <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                <span className="text-white-300 font-mono text-sm">R$</span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-xs text-white-200 mb-1">Quantidade</label>
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
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-white-700 transition-colors flex items-center justify-center gap-1 text-sm"
        >
          Adicionar
        </button>
      </div>
    </Card>
  );
}