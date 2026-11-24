import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

export type Product = {
  id: number;
  nom: string;
  prix: string;
  image: string;
};

type ApiProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ApiResponse = {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
};

export default function ProductGrid() {
  const [produits, setProduits] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const productsPerPage = 12;

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        // implémentation de la pagination : limit permet de donner une limite de produits par page
        // et Skip permet de donner le nombre de produit a ignorer
        const skip = (currentPage - 1) * productsPerPage;

        const response = await axios.get<ApiResponse>(
          `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`,
        );

        // Formatage des produits
        const produitsFormates: Product[] = response.data.products.map(
          (produit) => ({
            id: produit.id,
            nom: produit.title,
            prix: produit.price.toString(),
            image: produit.thumbnail,
          }),
        );

        // Total produit correspond au nombre total de produit que notre API
        // a envoyer et cela va permettre de faire une pagination.
        setProduits(produitsFormates);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  // Math.ceil calcule le nombre de pages nécessaire. Par exemple, Math.ceil(25 / 12) retourne 3,
  // car une page supplémentaire est nécessaire pour contenir les produits restants.
  // Sa valeur est donc toujours égale ou supérieure au quotient d’origine.
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {isLoading ? (
        // <div className="flex justify-center py-10">
        //   <span className="loading loading-spinner loading-lg"></span>
        // </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {produits.map((produit) => (
              <ProductCard key={produit.id} produit={produit} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10">
            <div className="join">
              {/* Précédent */}
              <button
                className="join-item btn btn-outline"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                «
              </button>

              {/* Numéros des pages */}
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`join-item btn ${
                      currentPage === page ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ),
              )}

              {/* Suivant */}
              <button
                className="join-item btn btn-outline"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                »
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
