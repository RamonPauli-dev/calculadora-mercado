'use client';

interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function Stepper({ value, onChange, min = 1, max = 999 }: StepperProps) {
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
    <div className="flex items-center border border-white-500 rounded-lg bg-gray-700 overflow-hidden">
      {/* Botão - */}
      <button
        onClick={decrement}
        disabled={value <= min}
        className="px-3 py-2 bg-white-600 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-white-700 transition-colors active:scale-95"
      >
        −
      </button>
      
      {/* Input central */}
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 text-center bg-gray-700 text-white border-none outline-none py-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      
      {/* Botão + */}
      <button
        onClick={increment}
        disabled={value >= max}
        className="px-3 py-2 bg-white-600 text-white disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-white-700 transition-colors active:scale-95"
      >
        +
      </button>
    </div>
  );
}