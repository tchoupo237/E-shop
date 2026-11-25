import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import {
  Search,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Settings,
  LogOut,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

type Props = {
  onSearch?: (search: string) => void;
};

type Categorie = {
  slug: string;
  name: string;
  url: string;
};

type CurrentUser = {
  firstname: string;
  lastname: string;
  email: string;
};

export default function Navbar({ onSearch }: Props) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [rechercheOuverte, setRechercheOuverte] = useState(false);
  const [recherche, setRecherche] = useState("");
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const { cart } = useCart();
  const navigate = useNavigate();

  // Nombre de produits différents dans le panier
  const cartCount = cart.length;

  // Récupérer l'utilisateur connecté
  useEffect(() => {
    function getCurrentUser() {
      const user = localStorage.getItem("currentUser");

      if (user) {
        try {
          setCurrentUser(JSON.parse(user));
        } catch (error) {
          console.error("Erreur de lecture de l'utilisateur :", error);
          localStorage.removeItem("currentUser");
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    }

    getCurrentUser();

    // Actualiser après connexion ou déconnexion
    window.addEventListener("auth-change", getCurrentUser);

    return () => {
      window.removeEventListener("auth-change", getCurrentUser);
    };
  }, []);

  // Récupérer les catégories
  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get<Categorie[]>(
          "https://dummyjson.com/products/categories",
        );

        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    }

    getCategories();
  }, []);

  function basculerMenu() {
    setMenuOuvert(!menuOuvert);
  }

  function fermerMenu() {
    setMenuOuvert(false);
  }

  function basculerRecherche() {
    setRechercheOuverte(!rechercheOuverte);
  }

  function handleSearch(value: string) {
    setRecherche(value);
    onSearch?.(value);
  }

  // Déconnexion
  function handleLogout() {
    localStorage.removeItem("currentUser");

    window.dispatchEvent(new Event("auth-change"));

    setCurrentUser(null);
    setMenuOuvert(false);

    toast.success("Déconnexion réussie !");
    navigate("/connexion");
  }

  // Première lettre du prénom
  const initiale = currentUser?.firstname?.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-40 w-full bg-base-100 border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Gauche : Bouton menu mobile + Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={basculerMenu}
            className="btn btn-ghost btn-square btn-sm lg:hidden"
            aria-label="Menu"
          >
            {menuOuvert ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <Link
            to="/"
            onClick={fermerMenu}
            className="text-xl sm:text-2xl font-bold tracking-tight text-base-content"
          >
            E<span className="text-primary">-shop</span>
          </Link>
        </div>

        {/* Centre : Liens de navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-base-content">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1 hover:text-primary transition-colors py-2"
            >
              <span>Catégories</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-30 w-56 p-2 shadow-md"
            >
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/?category=${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Droite : Recherche, Connexion, Panier */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Recherche */}
          <button
            type="button"
            onClick={basculerRecherche}
            className="btn btn-ghost btn-circle btn-sm text-base-content hover:text-primary"
            aria-label="Rechercher"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Authentification */}
          {currentUser ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar placeholder bg-primary text-primary-content"
                aria-label="Menu du profil"
              >
                <span className="text-lg font-bold">{initiale}</span>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-50 w-52 p-2 shadow-lg mt-2"
              >
                <li className="menu-title">
                  <span>
                    {currentUser.firstname} {currentUser.lastname}
                  </span>
                </li>

                <li>
                  <Link to="/profil">
                    <User className="w-4 h-4" />
                    Profil
                  </Link>
                </li>

                <li>
                  <Link to="/parametres">
                    <Settings className="w-4 h-4" />
                    Paramètres
                  </Link>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-error"
                  >
                    <LogOut className="w-4 h-4" />
                    Déconnexion
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/connexion"
              className="flex items-center gap-1.5 text-sm font-medium text-base-content hover:text-primary transition-colors px-1.5 py-1"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Se connecter</span>
            </Link>
          )}

          {/* Panier avec compteur dynamique */}
          <Link
            to="/panier"
            className="relative btn btn-ghost btn-circle btn-sm text-base-content hover:text-primary"
            aria-label={`Panier, ${cartCount} produit(s)`}
          >
            <ShoppingCart className="w-5 h-5" />

            {cartCount > 0 && (
              <span className="badge badge-success badge-xs font-bold text-white h-4 min-w-4 px-1 rounded-full absolute -top-0.5 -right-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Barre de recherche */}
      {rechercheOuverte && (
        <div className="border-t border-base-300 bg-base-100 px-4 py-3">
          <div className="max-w-2xl mx-auto">
            <label className="input input-bordered input-sm sm:input-md flex items-center gap-2 w-full">
              <Search className="w-4 h-4 text-base-content/50" />

              <input
                type="search"
                value={recherche}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Rechercher un produit sur E-shop..."
                className="grow"
              />

              <button
                type="button"
                onClick={basculerRecherche}
                className="btn btn-ghost btn-xs"
              >
                Fermer
              </button>
            </label>
          </div>
        </div>
      )}

      {/* Menu mobile / tablette */}
      {menuOuvert && (
        <nav className="lg:hidden border-t border-base-300 bg-base-100 px-4 py-4 shadow-md">
          <ul className="menu p-0 gap-1 text-base font-medium text-base-content">
            <li>
              <Link to="/" onClick={fermerMenu}>
                Accueil
              </Link>
            </li>

            <li>
              <details>
                <summary>Catégories</summary>

                <ul>
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <Link to={`/?category=${cat.slug}`} onClick={fermerMenu}>
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <Link to="/contact" onClick={fermerMenu}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-base-300 flex flex-col sm:flex-row gap-2">
            {currentUser ? (
              <>
                {/* Informations utilisateur */}
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="avatar placeholder">
                    <div className="bg-primary text-primary-content rounded-full w-9">
                      <span>{initiale}</span>
                    </div>
                  </div>

                  <span className="font-medium">
                    {currentUser.firstname} {currentUser.lastname}
                  </span>
                </div>

                <Link
                  to="/profil"
                  onClick={fermerMenu}
                  className="btn btn-outline btn-sm w-full"
                >
                  <User className="w-4 h-4" />
                  Profil
                </Link>

                <Link
                  to="/parametres"
                  onClick={fermerMenu}
                  className="btn btn-outline btn-sm w-full"
                >
                  <Settings className="w-4 h-4" />
                  Paramètres
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-error btn-sm w-full"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/connexion"
                  onClick={fermerMenu}
                  className="btn btn-outline btn-sm w-full sm:w-auto flex-1"
                >
                  Se connecter
                </Link>

                <Link
                  to="/inscription"
                  onClick={fermerMenu}
                  className="btn btn-primary btn-sm w-full sm:w-auto flex-1"
                >
                  Créer un compte
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
