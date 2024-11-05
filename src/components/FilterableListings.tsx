"use client";

import { useState } from "react";
import { FilterSection } from "@/components/FilterSection";
import { ListingCard } from "./ListingCard";
import { Listing } from "@/types/listing";
import { FilterFormData } from "@/types/filter";

type FilterableListingsProps = {
  listings: Listing[];
};

export function FilterableListings({
  listings,
}: Readonly<FilterableListingsProps>) {
  const [filteredListings, setFilteredListings] = useState(listings);

  const handleFilter = (filters: FilterFormData) => {
    const filtered = listings.filter(
      (listing) =>
        (!filters.bedrooms || listing.Bedrooms === filters.bedrooms) &&
        (!filters.bathrooms || listing.Bathrooms === filters.bathrooms) &&
        (!filters.parking || listing.Parking === filters.parking) &&
        (!filters.minPrice || listing["Sale Price"] >= filters.minPrice) &&
        (!filters.maxPrice || listing["Sale Price"] <= filters.maxPrice)
    );
    setFilteredListings(filtered);
  };

  return (
    <div>
      <FilterSection onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <ListingCard key={listing.Id} listing={listing} />
          ))
        ) : (
          <p className="text-center col-span-3 mt-6 text-gray-500">
            No properties match your filters.
          </p>
        )}
      </div>
    </div>
  );
}
