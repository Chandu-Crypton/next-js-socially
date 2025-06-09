"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
// 1. Import your router type (adjust the path if necessary)
import type { OurFileRouter } from "@/app/api/uploadthing/core";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  // 2. Change the type to be a key of your router
  endpoint: keyof OurFileRouter;
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative size-40">
        <img
          src={value}
          alt="Upload"
          className="rounded-md size-40 object-cover"
        />
        <button
          onClick={() => onChange("")}
          className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
          type="button"
        >
          <XIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      // Now, 'endpoint' is correctly typed and will be accepted
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
export default ImageUpload;
