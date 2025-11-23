'use client';

import Card from './Card';

interface PurchaseSummaryProps {
  total: number;
  cardBalance: string;
}

export default function PurchaseSummary({
  total,
  cardBalance,
}: PurchaseSummaryProps) {
  const cardBalanceValue = parseFloat(cardBalance.replace(',', '.'));
  const remainingBalance = cardBalanceValue - total;

  return (
    <Card size="md" spacing="md">
      <h2 className="text-white-300 mb-3 text-center text-lg font-bold">
        RESUMO DA COMPRA
      </h2>

      <div className="space-y-3">
        <div className="border-white-700 flex items-center justify-between border-b pb-2">
          <span className="text-white-200 text-base">Total:</span>
          <span className="text-xl font-bold text-white">
            R$ {total.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-white-200 text-base">Saldo Restante:</span>
          <span
            className={`text-xl font-bold ${
              remainingBalance >= 0 ? 'text-green-400' : 'text-red-400'
            }`}
          >
            R$ {remainingBalance.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>

      {remainingBalance < 0 && (
        <div className="mt-3 rounded-lg border border-red-700 bg-red-900 p-2">
          <p className="text-center text-sm font-semibold text-red-300">
            ⚠️ Ultrapassou o saldo!
          </p>
        </div>
      )}

      {remainingBalance > 0 && remainingBalance < cardBalanceValue * 0.2 && (
        <div className="mt-3 rounded-lg border border-yellow-700 bg-yellow-900 p-2">
          <p className="text-center text-sm text-yellow-300">
            💡 Quase sem saldo
          </p>
        </div>
      )}
    </Card>
  );
}
