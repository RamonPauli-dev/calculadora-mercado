'use client';

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function Stepper({
  value,
  onChange,
  min = 1,
  max = 999,
}: StepperProps) {
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || min;
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="border-white-500 flex items-center overflow-hidden rounded-lg border bg-gray-700">
      {/* Botão - */}
      <button
        onClick={decrement}
        disabled={value <= min}
        className="bg-white-600 hover:bg-white-700 px-3 py-2 text-white transition-colors active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-600"
      >
        −
      </button>

      {/* Input central */}
      <input
        type="number"
        inputMode="numeric" // Teclado numérico simples
        pattern="[0-9]*" // Apenas números
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 [appearance:textfield] border-none bg-gray-700 py-2 text-center text-white outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />

      {/* Botão + */}
      <button
        onClick={increment}
        disabled={value >= max}
        className="bg-white-600 hover:bg-white-700 px-3 py-2 text-white transition-colors active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-600"
      >
        +
      </button>
    </div>
  );
}
