import type { Product } from "../../pages/ProductDetailPage";

type Props = {
  product: Product;
};

export default function ProductDescriptionTabs({ product }: Props) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-7 space-y-6">
        <div className="border-b border-base-300 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-base-content">
            Description et caractéristiques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Description */}
          <div className="lg:col-span-7 space-y-3 text-sm text-base-content/75 leading-relaxed">
            <p>
              Découvrez le{" "}
              <strong className="text-base-content font-semibold">
                {product.title}
              </strong>
              .
            </p>
            <p>{product.description}</p>
          </div>

          {/* Caractéristiques */}
          <div className="lg:col-span-5 bg-base-200/50 border border-base-300 rounded-box overflow-hidden">
            <table className="table table-zebra text-xs sm:text-sm">
              <tbody>
                <tr>
                  <td>Référence</td>
                  <td className="text-right font-semibold">
                    PROD-{product.id}
                  </td>
                </tr>
                <tr>
                  <td>Catégorie</td>
                  <td className="text-right font-semibold">
                    {product.category}
                  </td>
                </tr>
                <tr>
                  <td>Marque</td>
                  <td className="text-right font-semibold">
                    {product.brand || "Non renseignée"}
                  </td>
                </tr>
                <tr>
                  <td>Disponibilité</td>
                  <td className="text-right font-semibold">
                    {product.stock > 0 ? "En stock" : "Rupture de stock"}
                  </td>
                </tr>
                <tr>
                  <td>Stock disponible</td>
                  <td className="text-right font-semibold">{product.stock}</td>
                </tr>
                <tr>
                  <td>Note</td>
                  <td className="text-right font-semibold">
                    {product.rating}/5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
