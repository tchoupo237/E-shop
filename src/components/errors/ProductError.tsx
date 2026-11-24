export default function ProductError() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="text-7xl sm:text-8xl font-extrabold text-base-content text-primary">
        Oups !
      </h1>

      <p className="text-lg sm:text-xl text-base-content/70 mt-5 max-w-lg">
        Impossible de récupérer les informations du produit.
      </p>
    </div>
  );
}
