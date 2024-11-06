"use client";

import { useForm } from "react-hook-form";
import { NumberInput } from "./NumberInput";
import { RangeInput } from "./RangeInput";
import { FilterFormData } from "@/types/filter";
import { useCallback } from "react";
import { Button } from "@/components/Button";

type FilterSectionProps = {
  onFilter: (data: FilterFormData) => void;
};

export function FilterSection({ onFilter }: Readonly<FilterSectionProps>) {
  const { register, handleSubmit, setValue } = useForm<FilterFormData>({
    defaultValues: {
      bedrooms: null,
      bathrooms: null,
      parking: null,
      minPrice: 0,
      maxPrice: 1000000,
    },
  });

  const handleMaxPriceChange = useCallback(
    (value: number) => {
      setValue("maxPrice", value);
    },
    [setValue]
  );

  const onSubmit = (data: FilterFormData) => {
    onFilter(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center mb-4 p-4 bg-gray-100 rounded-lg shadow-md w-full"
    >
      <div className="w-full">
        <NumberInput
          label="Bedrooms"
          id="bedrooms"
          name="bedrooms"
          register={register("bedrooms", { valueAsNumber: true })}
        />
      </div>

      <div className="w-full">
        <NumberInput
          label="Bathrooms"
          id="bathrooms"
          name="bathrooms"
          register={register("bathrooms", { valueAsNumber: true })}
        />
      </div>

      <div className="w-full">
        <NumberInput
          label="Parking"
          id="parking"
          name="parking"
          register={register("parking", { valueAsNumber: true })}
        />
      </div>

      <div className="w-full">
        <RangeInput
          label="Price Range"
          max={1000000}
          onChange={handleMaxPriceChange}
        />
      </div>

      <div className="w-full sm:col-span-2 lg:col-span-1 flex justify-center mt-4">
        <Button type="submit" className="w-full lg:w-auto">
          Search
        </Button>
      </div>
    </form>
  );
}
