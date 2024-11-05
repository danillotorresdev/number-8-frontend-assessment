import Image from "next/image";
import { Listing } from "@/types/listing";
import { Button } from "@/components/Button";

type ListingCardProps = {
  listing: Listing;
};

export const ListingCard = ({ listing }: Readonly<ListingCardProps>) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(listing["Sale Price"]);

  return (
    <div className="border shadow">
      <Image
        src={listing.ThumbnailURL}
        alt={listing.Title}
        width={150}
        height={150}
        className="w-full h-32 object-cover"
        priority
      />
      <div className="pl-2 pr-2 pb-2">
        <h2 className="text-lg mt-2 truncate" title={listing.Title}>
          {listing.Title}
        </h2>
        <p className="text-sm">{listing.Location}</p>
        <p className="text-xs text-gray-800/50">
          {listing.Bedrooms} Beds | {listing.Bathrooms} Baths
        </p>
        <p className="text-lg mt-1">{formattedPrice}</p>

        <Button ariaLabel="View Details" href={`/listing/${listing.Id}`}>
          View Details
        </Button>
      </div>
    </div>
  );
};
