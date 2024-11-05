import { UseFormRegisterReturn } from "react-hook-form";
import { FilterFormData } from "@/types/filter";

type NumberInputProps = {
  label: string;
  id: string;
  placeholder?: string;
  name: keyof FilterFormData;
  register: UseFormRegisterReturn;
};

export function NumberInput({
  label,
  id,
  placeholder,
  register,
}: Readonly<NumberInputProps>) {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        type="number"
        id={id}
        {...register}
        placeholder={placeholder}
        min="0"
        className="border p-1 rounded w-16"
      />
    </div>
  );
}
