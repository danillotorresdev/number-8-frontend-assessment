"use client";

import { useRouter, usePathname } from "next/navigation";
import { SavedPropertiesButton } from "@/components/SavedPropertiesButton";
import { LeftArrowIcon } from "@/app/icons/LeftArrowIcon";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const isNotHomePage = pathname !== "/";

  return (
    <header className="p-4 bg-gray-800 text-white flex items-center">
      {isNotHomePage && (
        <button
          onClick={() => router.back()}
          aria-label="Go Back"
          className="focus:outline-none pr-4"
        >
          <LeftArrowIcon />
        </button>
      )}
      <h1 className="text-lg font-bold">Property Listings</h1>

      {!isNotHomePage && <SavedPropertiesButton />}
    </header>
  );
}
