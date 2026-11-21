import Navbar from "../components/ui/Navbar";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductGallery from "../components/ui/ProductGallery";
import ProductInfoPanel from "../components/ui/ProductInfoPanel";
import ProductDescriptionTabs from "../components/ui/ProductDescriptionTabs";
import ReassuranceBar from "../components/ui/ReassuranceBar";
import Footer from "../components/ui/Footer";

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />

      <main className="grow flex flex-col">
        <Breadcrumb
          items={[
            { label: "Accueil", to: "/" },
            { label: "Accessoires", to: "/" },
            { label: "montre n01" },
          ]}
        />

        {/* Section principale : galerie + informations produit */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <ProductGallery />
            </div>

            <div className="lg:col-span-6">
              <ProductInfoPanel />
            </div>
          </div>
        </section>

        {/* Description et caractéristiques */}
        <ProductDescriptionTabs />
      </main>

      <ReassuranceBar />
      <Footer />
    </div>
  );
}
