"use client";

import { useFavoriteProperty } from "./useFavoriteProperty";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { Listing } from "@/types/listing";
import { Button } from "@/components/Button";

type SavePropertyButtonProps = {
  listing: Listing;
};

export const SavePropertyButton = ({ listing }: SavePropertyButtonProps) => {
  const { isFavorited, toggleFavorite } = useFavoriteProperty(listing);

  return (
    <Button
      onClick={toggleFavorite}
      icon={<HeartIcon isFavorited={isFavorited} />}
    >
      Save Propert
    </Button>
  );
};
