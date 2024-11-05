import { Listing } from "@/types/listing";

export function getSavedProperties(): Listing[] {
  return JSON.parse(localStorage.getItem("savedProperties") ?? "[]");
}

export function addPropertyToFavorites(listing: Listing): void {
  const savedProperties = getSavedProperties();
  savedProperties.push(listing);
  localStorage.setItem("savedProperties", JSON.stringify(savedProperties));
}

export function removePropertyFromFavorites(listingId: number): void {
  const savedProperties = getSavedProperties();
  const updatedProperties = savedProperties.filter((saved) => saved.Id !== listingId);
  localStorage.setItem("savedProperties", JSON.stringify(updatedProperties));
}

export function isPropertyFavorited(listingId: number): boolean {
  const savedProperties = getSavedProperties();
  return savedProperties.some((saved) => saved.Id === listingId);
}
