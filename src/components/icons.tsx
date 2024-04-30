import { errorHandler } from "@/utils/handlers";
import { LuCopy } from "react-icons/lu";
import { useState } from "react";

interface CopyProps {
  value: string;
}

export const CopyIcon = ({ value }: CopyProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setIsClicked(true); // Set the button state to clicked
        setTimeout(() => setIsClicked(false), 1000); // Reset state after 2 seconds
      })
      .catch((err) => {
        errorHandler(err);
        setIsClicked(false);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`p-2 ${
        isClicked ? "bg-green-500" : "bg-primary"
      } transition duration-300`}
    >
      <LuCopy />
    </button>
  );
};
