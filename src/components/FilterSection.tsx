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
      className="flex flex-wrap gap-4 items-center mb-4 justify-center pb-4"
    >
      <NumberInput
        label="Bedrooms"
        id="bedrooms"
        name="bedrooms"
        register={register("bedrooms", { valueAsNumber: true })}
      />
      <NumberInput
        label="Bathrooms"
        id="bathrooms"
        name="bathrooms"
        register={register("bathrooms", { valueAsNumber: true })}
      />
      <NumberInput
        label="Parking"
        id="parking"
        name="parking"
        register={register("parking", { valueAsNumber: true })}
      />
      <RangeInput
        label="Price Range"
        max={1000000}
        onChange={handleMaxPriceChange}
      />

      <Button type="submit">Search</Button>
    </form>
  );
}
