import { ApiInstance } from "@/utils/apiInstance";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export const number8Api = new ApiInstance(BASE_URL, {
  headers: {
    "Content-Type": "application/json",
  },
  next: { revalidate: 3600 },
});
