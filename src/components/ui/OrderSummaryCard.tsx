import { Lock } from "lucide-react";

export default function OrderSummaryCard() {
  return (
    <aside className="space-y-4">
      {/* Carte Récapitulatif de commande */}
      <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-6">
        <h2 className="text-base sm:text-lg font-bold text-base-content mb-4">
          Récapitulatif de commande
        </h2>

        <div className="space-y-3 text-sm border-b border-base-300 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-base-content/60">Sous-total</span>
            <span className="font-medium text-base-content">57,400.0 FCFA</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-base-content/60">
              <span>Frais de livraison</span>
              <span
                title="Frais standard de livraison"
                className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-base-content/40 text-[10px] text-base-content/60 cursor-help"
              >
                ?
              </span>
            </span>
            <span className="font-medium text-base-content">2,000.0 FCFA</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 pb-5">
          <span className="text-base font-bold text-base-content">Total</span>
          <span className="text-lg font-bold text-primary">59,400.0 FCFA</span>
        </div>

        <button
          type="button"
          className="btn btn-primary w-full h-11 gap-2 text-sm font-semibold text-primary-content"
        >
          <Lock className="w-4 h-4" />
          <span>Passer la commande</span>
        </button>
      </div>
    </aside>
  );
}
