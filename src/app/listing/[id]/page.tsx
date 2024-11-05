import { fetchListings } from "@/services/fetchListings";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { SavePropertyButton } from "@/components/SavePropertyButton/SavePropertyButton";

export default async function ListingDetailsPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { data: listings, error } = await fetchListings();

  const id = (await params).id;
  const listing = listings?.find((listing) => listing.Id === Number(id));

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!listing) {
    return <p>Listing not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex justify-between  mb-2">
            <div>
              <h1 className="text-3xl">{listing.Title}</h1>
              <p className="text-gray-600">{listing.Location}</p>
            </div>
            <div>
              <p className="text-3xl ">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(listing["Sale Price"])}
              </p>
              <p className="text-sm text-gray-800/50">
                Date Listed: {formatDate(listing.DateListed)}
              </p>
            </div>
          </div>

          <Image
            src={listing.PictureURL}
            alt={listing.Title}
            width={600}
            height={400}
            className="w-full h-96 object-cover rounded-md"
          />

          <div className="flex items-center justify-between border-2 mt-4 p-4 border-gray-300 bg-gray-100">
            <div className="text-center">
              <span className="block text-xl font-semibold">
                {listing.Bedrooms}
              </span>
              <span className="text-gray-500">BED</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">
                {listing.Bathrooms}
              </span>
              <span className="text-gray-500">BATH</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">
                {listing.Parking}
              </span>
              <span className="text-gray-500">PARKING</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">
                {listing.Sqft}
              </span>
              <span className="text-gray-500">SQFT</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">
                {listing.YearBuilt}
              </span>
              <span className="text-gray-500">YEAR BUILT</span>
            </div>
          </div>

          <p className="mt-4">{listing.Description}</p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-end">
            <SavePropertyButton listing={listing} />
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
