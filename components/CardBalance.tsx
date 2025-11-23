'use client';

import Card from './Card';

interface CardBalanceProps {
  cardBalance: string;
  onCardBalanceChange: (value: string) => void;
}

export default function CardBalance({
  cardBalance,
  onCardBalanceChange,
}: CardBalanceProps) {
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

    onCardBalanceChange(finalValue);
  };

  return (
    <Card size="md" spacing="md">
      <h2 className="text-white-300 mb-3 text-center text-base font-semibold">
        💳 SALDO DO CARTÃO
      </h2>

      <div className="relative">
        <input
          type="text"
          inputMode="decimal" // Teclado numérico com decimal
          pattern="[0-9,]*" // Padrão para números e vírgula
          value={cardBalance}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="w-full rounded-lg border-2 border-blue-500 bg-gray-700 p-3 text-center font-mono text-xl font-bold text-blue-100 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          placeholder="00,00"
        />
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <span className="text-white-300 font-mono font-bold">R$</span>
        </div>
      </div>
      <p className="text-white-200 mt-2 text-center text-xs">
        Digite o valor disponível no seu cartão
      </p>
    </Card>
  );
}
