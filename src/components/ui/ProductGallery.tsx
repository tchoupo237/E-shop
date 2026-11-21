const imagesProduit = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    alt: "Montre n01 vue principale",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    alt: "Montre n01 vue de profil",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80",
    alt: "Montre n01 portée",
  },
];

export default function ProductGallery() {
  return (
    <div className="space-y-3">
      {/* Image principale */}
      <div className="w-full h-80 sm:h-96 lg:h-[430px] bg-base-100 border border-base-300 rounded-box p-6 flex items-center justify-center overflow-hidden">
        <img
          src={imagesProduit[0].src}
          alt={imagesProduit[0].alt}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Vignettes */}
      <div className="grid grid-cols-3 gap-3">
        {imagesProduit.map((img, index) => (
          <button
            key={img.id}
            type="button"
            className={`h-20 sm:h-24 bg-base-100 rounded-box p-2 flex items-center justify-center border cursor-pointer ${
              index === 0 ? "border-primary" : "border-base-300"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="max-h-full max-w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
