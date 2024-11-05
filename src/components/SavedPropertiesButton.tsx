"use client";

import { useState, useCallback } from "react";
import { SavedPropertiesModal } from "@/components/SavedPropertiesModal/SavedPropertiesModal";
import { HeartIcon } from "@/app/icons/HeartIcon";
import { Button } from "@/components/Button";

export function SavedPropertiesButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Button
        ariaLabel="View Saved Properties"
        onClick={toggleModal}
        className="ml-auto"
        icon={<HeartIcon />}
      >
        View Saved Properties
      </Button>
      <SavedPropertiesModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}
