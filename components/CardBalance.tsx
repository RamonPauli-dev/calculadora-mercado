'use client';

import Card from './Card';

interface CardBalanceProps {
  cardBalance: string;
  onCardBalanceChange: (value: string) => void;
}

export default function CardBalance({ cardBalance, onCardBalanceChange }: CardBalanceProps) {
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
    
    onCardBalanceChange(finalValue);
  };

  return (
    <Card size="md" spacing="md">
      <h2 className="text-base font-semibold mb-3 text-center text-white-300">💳 SALDO DO CARTÃO</h2>
      
      <div className="relative">
        <input
          type="text"
          value={cardBalance}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="w-full p-3 border-2 border-white-500 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-transparent text-center font-mono text-xl font-bold bg-gray-700 text-white-100"
          placeholder="00,00"
        />
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <span className="text-white-300 font-mono font-bold">R$</span>
        </div>
      </div>
      <p className="text-center text-xs text-white-200 mt-2">
        Digite o valor disponível no seu cartão
      </p>
    </Card>
  );
}