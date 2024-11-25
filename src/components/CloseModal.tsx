"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      variant="subtle"
      className="h-6 w-6 p-0 rounded-md"
      onClick={() => router.back()}
      aria-label="close-modal"
    >
      <X />
    </Button>
  );
};

export default CloseModal;
