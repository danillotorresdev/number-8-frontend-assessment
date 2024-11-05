"use client";

import { useEffect, useState, useCallback } from "react";
import { Listing } from "@/types/listing";
import {
  isPropertyFavorited,
  addPropertyToFavorites,
  removePropertyFromFavorites,
} from "@/utils/favoritesStorage";

export const useFavoriteProperty = (listing: Listing) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorited = isPropertyFavorited(listing.Id);
    setIsFavorited(favorited);
  }, [listing.Id]);

  const toggleFavorite = useCallback(() => {
    if (isFavorited) {
      removePropertyFromFavorites(listing.Id);
      setIsFavorited(false);
    } else {
      addPropertyToFavorites(listing);
      setIsFavorited(true);
    }
  }, [isFavorited, listing]);

  return { isFavorited, toggleFavorite };
};
