import { useState, ChangeEvent } from "react";

type RangeInputProps = {
  label: string;
  max: number;
  onChange: (value: number) => void;
};

export function RangeInput({
  label,
  max,
  onChange,
}: Readonly<RangeInputProps>) {
  const [price, setPrice] = useState(max);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseInt(event.target.value, 10);
    setPrice(newPrice);
    onChange(newPrice);
  };

  const formattedPrice = new Intl.NumberFormat("en-US").format(price);

  return (
    <div className="flex items-center">
      <label>{label}: </label>
      <input
        type="range"
        min="0"
        max={max}
        step="10000"
        value={price}
        onChange={handlePriceChange}
        className="mx-2"
      />
      <span className="ml-2">Up to ${formattedPrice}</span>
    </div>
  );
}
