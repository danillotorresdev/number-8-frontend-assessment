import { number8Api } from "./config";
import { Listing } from "@/types/listing";
import { formatDate } from "@/utils/formatDate";

export async function fetchListings(): Promise<{
  data: Listing[] | null;
  error?: string | null;
}> {
  const { data, error } = await number8Api.request<Listing[]>("listings.json");

  if (data) {
    data.forEach((listing) => {
      listing.DateListed = formatDate(listing.DateListed);
    });
  }

  return { data, error };
}
