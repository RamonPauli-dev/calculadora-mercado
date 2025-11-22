'use client';

import Card from './Card';

interface PurchaseSummaryProps {
  total: number;
  cardBalance: string;
}

export default function PurchaseSummary({ total, cardBalance }: PurchaseSummaryProps) {
  const cardBalanceValue = parseFloat(cardBalance.replace(',', '.'));
  const remainingBalance = cardBalanceValue - total;

  return (
    <Card size="md" spacing="md">
      <h2 className="text-lg font-bold text-center mb-3 text-white-300">
        RESUMO DA COMPRA
      </h2>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center pb-2 border-b border-white-700">
          <span className="text-white-200 text-base">Total:</span>
          <span className="text-xl font-bold text-white">
            R$ {total.toFixed(2).replace('.', ',')}
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-1">
          <span className="text-white-200 text-base">Saldo Restante:</span>
          <span className={`text-xl font-bold ${
            remainingBalance >= 0 ? 'text-green-400' : 'text-red-400'
          }`}>
            R$ {remainingBalance.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      {remainingBalance < 0 && (
        <div className="mt-3 p-2 bg-red-900 border border-red-700 rounded-lg">
          <p className="text-red-300 text-center font-semibold text-sm">
            ⚠️ Ultrapassou o saldo!
          </p>
        </div>
      )}

      {remainingBalance > 0 && remainingBalance < cardBalanceValue * 0.2 && (
        <div className="mt-3 p-2 bg-yellow-900 border border-yellow-700 rounded-lg">
          <p className="text-yellow-300 text-center text-sm">
            💡 Quase sem saldo
          </p>
        </div>
      )}
    </Card>
  );
}