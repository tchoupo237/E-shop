import Navbar from "../components/ui/Navbar";
import Breadcrumb from "../components/ui/Breadcrumb";
import CartItemsList from "../components/ui/CartItemsList";
import OrderSummaryCard from "../components/ui/OrderSummaryCard";
import ReassuranceBar from "../components/ui/ReassuranceBar";
import Footer from "../components/ui/Footer";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />

      <main className="grow flex flex-col">
        <Breadcrumb
          items={[{ label: "Accueil", to: "/" }, { label: "Panier" }]}
        />

        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
              Mon panier{" "}
              <span className="text-base sm:text-lg font-normal text-base-content/60">
                (3 articles)
              </span>
            </h1>
            <p className="text-sm text-base-content/60 mt-1">
              Vérifiez vos articles et passez votre commande.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <CartItemsList />
            </div>

            <div className="lg:col-span-4">
              <OrderSummaryCard />
            </div>
          </div>
        </section>
      </main>

      <ReassuranceBar />
      <Footer />
    </div>
  );
}
