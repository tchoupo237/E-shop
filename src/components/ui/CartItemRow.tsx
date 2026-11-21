import { Link } from "react-router";
import { Minus, Plus, Trash2 } from "lucide-react";

export type CartItem = {
  id: number;
  nom: string;
  attributLabel: string;
  attributValeur: string;
  stock: string;
  prixUnitaire: string;
  quantite: number;
  sousTotal: string;
  image: string;
};

type CartItemRowProps = {
  article: CartItem;
};

export default function CartItemRow({ article }: CartItemRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 py-5 border-b border-base-300">
      {/* Produit : image + infos */}
      <div className="md:col-span-5 flex items-center gap-4">
        <Link
          to={`/produit/${article.id}`}
          className="w-20 h-20 sm:w-24 sm:h-24 border border-base-300 rounded-box p-2 flex items-center justify-center bg-base-100 shrink-0"
        >
          <img
            src={article.image}
            alt={article.nom}
            className="max-h-full max-w-full object-contain"
          />
        </Link>

        <div className="space-y-1">
          <Link
            to={`/produit/${article.id}`}
            className="text-sm sm:text-base font-bold text-base-content hover:text-primary"
          >
            {article.nom}
          </Link>
          <p className="text-xs text-base-content/60">
            {article.attributLabel} : {article.attributValeur}
          </p>
          <p className="text-xs font-medium text-primary">{article.stock}</p>
        </div>
      </div>

      {/* Prix unitaire */}
      <div className="md:col-span-2 flex items-center justify-between md:justify-start">
        <span className="text-xs text-base-content/60 md:hidden">
          Prix unitaire
        </span>
        <span className="text-sm font-bold text-warning">
          {article.prixUnitaire}
        </span>
      </div>

      {/* Quantité */}
      <div className="md:col-span-2 flex items-center justify-between md:justify-start">
        <span className="text-xs text-base-content/60 md:hidden">Quantité</span>
        <div className="inline-flex items-center border border-base-300 rounded-btn bg-base-100 h-9">
          <button
            type="button"
            aria-label="Diminuer la quantité"
            className="px-2.5 h-full text-base-content/70 hover:text-base-content cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-3 text-sm font-medium text-base-content">
            {article.quantite}
          </span>
          <button
            type="button"
            aria-label="Augmenter la quantité"
            className="px-2.5 h-full text-base-content/70 hover:text-base-content cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Sous-total */}
      <div className="md:col-span-2 flex items-center justify-between md:justify-start">
        <span className="text-xs text-base-content/60 md:hidden">
          Sous-total
        </span>
        <span className="text-sm font-bold text-warning">
          {article.sousTotal}
        </span>
      </div>

      {/* Action : supprimer */}
      <div className="md:col-span-1 flex items-center justify-end md:justify-center">
        <button
          type="button"
          aria-label={`Supprimer ${article.nom}`}
          className="text-error hover:opacity-80 p-1.5 cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
