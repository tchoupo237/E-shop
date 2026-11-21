const specifications = [
  { label: "Référence", valeur: "ESH-M01-2026" },
  { label: "Catégorie", valeur: "Accessoires" },
  { label: "Disponibilité", valeur: "En stock" },
  { label: "Garantie", valeur: "12 mois" },
];

export default function ProductDescriptionTabs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-7 space-y-6">
        <div className="border-b border-base-300 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-base-content">
            Description et caractéristiques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Description détaillée */}
          <div className="lg:col-span-7 space-y-3 text-sm text-base-content/75 leading-relaxed">
            <p>
              Conçue pour accompagner vos journées avec style et praticité, la{" "}
              <strong className="text-base-content font-semibold">
                montre n01
              </strong>{" "}
              allie légèreté, lisibilité et finitions soignées. Son boîtier
              résistant et son bracelet agréable à porter conviennent aussi bien
              aux tenues décontractées qu&apos;aux occasions plus formelles.
            </p>
            <p>
              Chaque produit est vérifié avant expédition afin de garantir une
              qualité constante et une mise en main immédiate dès la réception
              de votre commande.
            </p>
          </div>

          {/* Tableau des caractéristiques */}
          <div className="lg:col-span-5 bg-base-200/50 border border-base-300 rounded-box overflow-hidden">
            <table className="table table-zebra text-xs sm:text-sm">
              <tbody>
                {specifications.map((item) => (
                  <tr key={item.label}>
                    <td className="font-medium text-base-content/70">
                      {item.label}
                    </td>
                    <td className="font-semibold text-base-content text-right">
                      {item.valeur}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
