"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
}

const ProductImage = ({ images }: Props) => {
  // ✅ Hook always at top
  const [selectedImage, setSelectedImage] = useState<string>(images?.[0] || "");

  // ✅ conditional return AFTER hook
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex gap-6">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Product image ${index + 1}`}
            width={160}
            height={160}
            className={`cursor-pointer border rounded p-1
              ${
                selectedImage === img
                  ? "border-blue-500 opacity-100"
                  : "border-gray-300 opacity-70"
              }
            `}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 flex justify-center bg-gray-100 rounded-md p-4">
        <Image
          src={selectedImage}
          alt="Main product image"
          width={500}
          height={500}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImage;
