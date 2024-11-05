import { UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export function TextInput({
  label,
  type,
  register,
  error,
}: Readonly<TextInputProps>) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register}
        className={`border p-2 rounded w-full ${error ? "border-red-500" : ""}`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
