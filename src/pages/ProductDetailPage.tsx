import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Navbar from "../components/ui/Navbar";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductGallery from "../components/ui/ProductGallery";
import ProductInfoPanel from "../components/ui/ProductInfoPanel";
import ProductDescriptionTabs from "../components/ui/ProductDescriptionTabs";
import ReassuranceBar from "../components/ui/ReassuranceBar";
import Footer from "../components/ui/Footer";
import ProductError from "../components/errors/ProductError";

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
  thumbnail: string;
};

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log("ID du produit :", id);
        console.log("URL API :", `https://dummyjson.com/products/${id}`);
        const response = await axios.get<Product>(
          `https://dummyjson.com/products/${id}`,
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Erreur API :", error);
        setError("Impossible de récupérer les informations du produit.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Navbar />

      <main className="grow flex flex-col">
        {isLoading ? (
          <div className="flex justify-center items-center grow">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          // <div className="text-center py-20 text-error">{error}</div>
          <div className="flex justify-center items-center grow">
            <ProductError />
          </div>
        ) : product ? (
          <>
            <Breadcrumb
              items={[
                { label: "Accueil", to: "/" },
                { label: product.category, to: "/" },
                { label: product.title },
              ]}
            />

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6">
                  <ProductGallery product={product} />
                </div>

                <div className="lg:col-span-6">
                  <ProductInfoPanel product={product} />
                </div>
              </div>
            </section>

            <ProductDescriptionTabs product={product} />
          </>
        ) : null}
      </main>

      <ReassuranceBar />
      <Footer />
    </div>
  );
}
