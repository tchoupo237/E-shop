import { Truck, ShieldCheck, Award, Headphones } from "lucide-react";

type Assurance = {
  id: number;
  titre: string;
  texte: string;
  icone: React.ReactNode;
};

const assurances: Assurance[] = [
  {
    id: 1,
    titre: "Livraison rapide",
    texte: "Partout au Cameroun",
    icone: <Truck className="w-5 h-5" />,
  },
  {
    id: 2,
    titre: "Paiement sécurisé",
    texte: "Transactions 100% sécurisées",
    icone: <ShieldCheck className="w-5 h-5" />,
  },
  {
    id: 3,
    titre: "Produits de qualité",
    texte: "Satisfaction garantie",
    icone: <Award className="w-5 h-5" />,
  },
  {
    id: 4,
    titre: "Support 24/7",
    texte: "Nous sommes là pour vous",
    icone: <Headphones className="w-5 h-5" />,
  },
];

export default function ReassuranceBar() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {assurances.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3.5 bg-base-200 border border-base-300 rounded-box p-4"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-accent text-primary flex items-center justify-center">
              {item.icone}
            </div>

            <div>
              <h2 className="text-sm font-bold text-base-content">
                {item.titre}
              </h2>
              <p className="text-xs text-base-content/70 mt-0.5">
                {item.texte}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
