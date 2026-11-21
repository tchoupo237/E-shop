import { Link } from "react-router";
import {
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const couleurs = ["Marron", "Noir", "Argent"];

export default function ProductInfoPanel() {
  return (
    <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-7 space-y-5">
      {/* Badge catégorie & disponibilité */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="badge badge-ghost text-xs font-medium">
          Accessoires
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>En stock</span>
        </span>
      </div>

      {/* Titre et prix */}
      <div className="space-y-1.5 border-b border-base-300 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
          montre n01
        </h1>
        <p className="text-xl sm:text-2xl font-bold text-warning">
          20000.0 FCFA
        </p>
      </div>

      {/* Description courte */}
      <p className="text-sm text-base-content/75 leading-relaxed">
        Montre au design moderne et épuré, pensée pour un usage quotidien.
        Bracelet confortable, finition soignée et résistance aux éclaboussures.
      </p>

      {/* Choix de couleur */}
      <div className="space-y-2">
        <span className="block text-sm font-medium text-base-content">
          Couleur
        </span>
        <div className="flex flex-wrap gap-2">
          {couleurs.map((couleur, index) => (
            <button
              key={couleur}
              type="button"
              className={`btn btn-sm h-9 px-4 text-xs font-medium ${
                index === 0
                  ? "btn-primary text-primary-content"
                  : "btn-outline border-base-300 text-base-content hover:bg-base-200 hover:border-base-300"
              }`}
            >
              {couleur}
            </button>
          ))}
        </div>
      </div>

      {/* Quantité et bouton Ajouter au panier */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <div className="inline-flex items-center border border-base-300 rounded-btn bg-base-100 h-11">
          <button
            type="button"
            aria-label="Diminuer la quantité"
            className="px-3 h-full text-base-content/70 hover:text-base-content cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 text-sm font-semibold text-base-content">
            1
          </span>
          <button
            type="button"
            aria-label="Augmenter la quantité"
            className="px-3 h-full text-base-content/70 hover:text-base-content cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary h-11 px-6 gap-2 text-sm font-semibold text-primary-content grow sm:grow-0"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Ajouter au panier</span>
        </button>

        <Link
          to="/panier"
          className="btn btn-warning h-11 px-5 text-sm font-semibold text-warning-content w-full sm:w-auto"
        >
          Acheter maintenant
        </Link>
      </div>

      {/* Infos rapides livraison / garantie */}
      <div className="bg-base-200/70 rounded-box p-4 space-y-2.5 text-xs text-base-content/75">
        <div className="flex items-center gap-2.5">
          <Truck className="w-4 h-4 text-primary shrink-0" />
          <span>Livraison rapide sous 24h à 48h partout au Cameroun</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>Paiement 100% sécurisé et retour possible sous 7 jours</span>
        </div>
      </div>
    </div>
  );
}
