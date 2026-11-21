import ProductCard, { type Product } from "./ProductCard";

const produits: Product[] = [
  {
    id: 1,
    nom: "montre n01",
    prix: "20000.0",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    nom: "Velo",
    prix: "20000.0",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    nom: "Velo 8080",
    prix: "2300.0",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    nom: "montre n01",
    prix: "20000.0",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    nom: "Sac 8080",
    prix: "3400.0",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    nom: "Velo 8080",
    prix: "2300.0",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    nom: "Sac 8080",
    prix: "3400.0",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {produits.map((produit) => (
          <ProductCard key={produit.id} produit={produit} />
        ))}
      </div>
    </section>
  );
}
