import { useState, useEffect } from "react";
import { Listing } from "@/types/listing";
import {
  getSavedProperties,
  removePropertyFromFavorites,
} from "@/utils/favoritesStorage";

export function useSavedProperties(isOpen: boolean) {
  const [savedProperties, setSavedProperties] = useState<Listing[]>([]);

  useEffect(() => {
    if (isOpen) {
      const properties = getSavedProperties();
      setSavedProperties(properties);
    }
  }, [isOpen]);

  const removeProperty = (id: number) => {
    removePropertyFromFavorites(id);
    setSavedProperties((prev) => prev.filter((property) => property.Id !== id));
  };

  return {
    savedProperties,
    removeProperty,
  };
}
