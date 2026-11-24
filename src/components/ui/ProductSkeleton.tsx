export default function ProductSkeleton() {
  return (
    <div className="bg-base-100 border border-base-300 rounded-box overflow-hidden flex flex-col">
      {/* Zone image */}
      <div className="w-full h-52 sm:h-56 p-4 flex items-center justify-center bg-base-100">
        <div className="skeleton w-full h-full rounded-box"></div>
      </div>

      {/* Informations du produit */}
      <div className="border-t border-base-300 p-4 flex flex-col gap-3 grow">
        {/* Nom */}
        <div className="skeleton h-4 w-3/4"></div>

        {/* Prix */}
        <div className="skeleton h-4 w-1/3"></div>

        {/* Boutons */}
        <div className="grid grid-cols-2 gap-2.5 mt-2">
          <div className="skeleton h-10 w-full rounded-btn"></div>
          <div className="skeleton h-10 w-full rounded-btn"></div>
        </div>
      </div>
    </div>
  );
}
