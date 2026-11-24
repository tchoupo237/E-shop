import { Link } from "react-router";
import { type Product } from "./ProductGrid";

type Props = {
  produit: Product;
};

export default function ProductCard({ produit }: Props) {
  const handleBuy = () => {
    const numeroWhatsApp = "237691031814";

    const prix = Number(produit.prix);
    const quantite = 1;
    const prixTotal = prix * quantite;

    const message = `Bonjour, je souhaite commander le produit suivant :

Produit : ${produit.nom}
Quantité : ${quantite}
Prix unitaire : ${prix} $
Prix total : ${prixTotal.toFixed(2)} $`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };
  return (
    <div className="bg-base-100 border border-base-300 rounded-box overflow-hidden flex flex-col">
      {/* Zone image produit */}
      <div className="w-full h-52 sm:h-56 p-4 flex items-center justify-center bg-base-100">
        <img
          src={produit.image}
          alt={produit.nom}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Séparateur et informations */}
      <div className="border-t border-base-300 p-4 flex flex-col gap-2 grow">
        <h2 className="text-sm sm:text-base font-medium text-base-content">
          {produit.nom}
        </h2>

        <p className="text-sm sm:text-base font-bold text-warning">
          {produit.prix} $
        </p>

        {/* Boutons Voir et Acheter */}
        <div className="grid grid-cols-2 gap-2.5 mt-2">
          <Link
            to={`/produit/${produit.id}`}
            className="btn btn-warning btn-sm sm:btn-md h-10 text-xs sm:text-sm font-medium text-warning-content justify-start pl-4"
          >
            Voir
          </Link>

          <button
            type="button"
            onClick={handleBuy}
            className="btn btn-primary btn-sm sm:btn-md h-10 text-xs sm:text-sm font-medium text-primary-content"
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
