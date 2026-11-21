import { Link } from "react-router";
import { Trash2, ArrowLeft } from "lucide-react";
import CartItemRow, { type CartItem } from "./CartItemRow";

const articlesPanier: CartItem[] = [
  {
    id: 5,
    nom: "Sac 8080",
    attributLabel: "Couleur",
    attributValeur: "Noir",
    stock: "En stock",
    prixUnitaire: "3400.0 FCFA",
    quantite: 1,
    sousTotal: "3400.0 FCFA",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 1,
    nom: "montre n01",
    attributLabel: "Couleur",
    attributValeur: "Marron",
    stock: "En stock",
    prixUnitaire: "20000.0 FCFA",
    quantite: 1,
    sousTotal: "20000.0 FCFA",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    nom: "Velo",
    attributLabel: "Taille",
    attributValeur: "M",
    stock: "En stock",
    prixUnitaire: "20000.0 FCFA",
    quantite: 1,
    sousTotal: "20000.0 FCFA",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CartItemsList() {
  return (
    <div>
      {/* En-tête de colonnes sur desktop */}
      <div className="hidden md:grid grid-cols-12 gap-4 py-3 px-4 bg-base-200/60 border-y border-base-300 text-xs font-medium text-base-content/70">
        <div className="col-span-5">Produit</div>
        <div className="col-span-2">Prix unitaire</div>
        <div className="col-span-2">Quantité</div>
        <div className="col-span-2">Sous-total</div>
        <div className="col-span-1 text-center">Action</div>
      </div>

      {/* Liste des articles */}
      <div>
        {articlesPanier.map((article) => (
          <CartItemRow key={article.id} article={article} />
        ))}
      </div>

      {/* Boutons d'action sous la liste */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <button
          type="button"
          className="btn btn-outline btn-error h-10 px-4 gap-2 text-xs sm:text-sm font-medium"
        >
          <Trash2 className="w-4 h-4" />
          <span>Vider le panier</span>
        </button>

        <Link
          to="/"
          className="btn btn-outline btn-primary h-10 px-4 gap-2 text-xs sm:text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continuer mes achats</span>
        </Link>
      </div>
    </div>
  );
}
