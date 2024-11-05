import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full name is required" })
    .max(100, { message: "Full name cannot exceed 100 characters" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Only numbers allowed" })
    .min(1, { message: "Phone number is required" }),
  comments: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const onSubmit = (data: ContactFormData) => {
    const validationResult = contactSchema.safeParse(data);

    if (!validationResult.success) {
      validationResult.error.errors.forEach((error) => {
        setError(error.path[0] as keyof ContactFormData, {
          type: "manual",
          message: error.message,
        });
      });
      showToast("Please fix the errors in the form.", "error");
    } else {
      console.log("Form submitted:", data);
      showToast("Message sent successfully!", "success");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    toast,
    showToast,
  };
}
