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

type Props = {
  search: string;
  category: string;
};

export default function ProductGrid({ search, category }: Props) {
  const [produits, setProduits] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const productsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  useEffect(() => {
    const controller = new AbortController();

    const getProducts = async () => {
      try {
        setIsLoading(true);

        // Implémentation de la pagination : limit permet de donner une limite de produits par page
        // et skip permet de donner le nombre de produits à ignorer.
        const skip = (currentPage - 1) * productsPerPage;

        const url = category
          ? `https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${skip}`
          : search.trim()
            ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${productsPerPage}&skip=${skip}`
            : `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;

        const response = await axios.get<ApiResponse>(url, {
          signal: controller.signal,
        });

        // Formatage des produits
        const produitsFormates: Product[] = response.data.products.map(
          (produit) => ({
            id: produit.id,
            nom: produit.title,
            prix: produit.price.toString(),
            image: produit.thumbnail,
          }),
        );

        // Total des produits renvoyés par notre API.
        // Cela permet de calculer le nombre de pages pour la pagination.
        setProduits(produitsFormates);
        setTotalProducts(response.data.total);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Erreur lors de la récupération :", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      controller.abort();
    };
  }, [currentPage, search, category]);

  // Math.ceil calcule le nombre de pages nécessaire.
  // Par exemple, Math.ceil(25 / 12) retourne 3.
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Array.from({ length: 12 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : produits.length === 0 ? (
        <p className="text-center text-lg py-10">Aucun produit trouvé.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {produits.map((produit) => (
              <ProductCard key={produit.id} produit={produit} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10">
              <div className="join max-w-full overflow-x-auto">
                {/* Précédent */}
                <button
                  className="join-item btn btn-outline btn-sm sm:btn-md"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  «
                </button>

                {/* Numéros des pages */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    className={`join-item btn btn-sm sm:btn-md ${
                      currentPage === page ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}

                {/* Suivant */}
                <button
                  className="join-item btn btn-outline btn-sm sm:btn-md"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  »
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
