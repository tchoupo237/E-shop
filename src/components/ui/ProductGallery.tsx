import { useState } from "react";
import type { Product } from "../../pages/ProductDetailPage";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="space-y-3">
      {/* Image principale */}
      <div className="w-full h-80 sm:h-96 lg:h-[430px] bg-base-100 border border-base-300 rounded-box p-6 flex items-center justify-center overflow-hidden">
        <img
          src={selectedImage}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Vignettes */}
      <div className="grid grid-cols-3 gap-3">
        {product.images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`h-20 sm:h-24 bg-base-100 rounded-box p-2 flex items-center justify-center border cursor-pointer ${
              selectedImage === image ? "border-primary" : "border-base-300"
            }`}
          >
            <img
              src={image}
              alt={`${product.title} vue ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
