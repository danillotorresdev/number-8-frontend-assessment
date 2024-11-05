"use client";

import { TextInput } from "@/components/TextInput";
import { Toast } from "@/components/Toast";
import { Button } from "@/components/Button";
import { useContactForm } from "./useContactForm";

export function ContactForm() {
  const { register, handleSubmit, errors, onSubmit, toast } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-lg mx-auto p-4 bg-gray-100 border-2 border-gray-300 p-6"
    >
      <h2 className="text-2xl mb-4 text-center">Contact Agent</h2>

      <TextInput
        label="Full Name"
        type="text"
        register={register("fullName")}
        error={errors.fullName?.message}
      />
      <TextInput
        label="Email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <TextInput
        label="Phone"
        type="text"
        register={register("phone")}
        error={errors.phone?.message}
      />
      <div>
        <label htmlFor="comments" className="block font-medium mb-1">
          Comments
        </label>
        <textarea
          id="comments"
          {...register("comments")}
          className="border p-2 rounded w-full min-h-[100px] resize-none"
        />
      </div>
      <div className="flex justify-center">
        <Button type="submit">Contact Now</Button>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </form>
  );
}
