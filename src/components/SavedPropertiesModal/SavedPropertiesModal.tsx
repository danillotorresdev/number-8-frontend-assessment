"use client";

import { useSavedProperties } from "./useSavedProperties";
import ReactDOM from "react-dom";

type SavedPropertiesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SavedPropertiesModal({
  isOpen,
  onClose,
}: Readonly<SavedPropertiesModalProps>) {
  const { savedProperties, removeProperty } = useSavedProperties(isOpen);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Saved Properties
        </h2>
        {savedProperties.length === 0 ? (
          <p className="text-gray-600">No properties saved yet.</p>
        ) : (
          <ul>
            {savedProperties.map((property) => (
              <li
                key={property.Id}
                className="mb-2 flex justify-between items-center text-gray-700"
              >
                <span>{property.Title}</span>
                <button
                  onClick={() => removeProperty(property.Id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
