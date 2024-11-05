import { fetchListings } from "@/services/fetchListings";
import { FilterableListings } from "@/components/FilterableListings";
import { ErrorMessage } from "@/components/ErrorMessage";

export default async function HomePage() {
  const { data: listings, error } = await fetchListings();

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!listings || listings.length === 0) {
    return <ErrorMessage message="No listings available" />;
  }

  return <FilterableListings listings={listings} />;
}
