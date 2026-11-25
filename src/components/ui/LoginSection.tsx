import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, LogIn, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

type Utilisateur = {
  email: string;
  mdp: string;
};

export default function LoginSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Utilisateur>();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = async (data: Utilisateur) => {
    try {
      setIsLoading(true);
      console.log(data);
      const utilisateur = await axios.get(
        `http://localhost:3000/Utilisateur?email=${data.email}`,
      );
      console.log("recherche0 ", utilisateur.data[0]);
      if (utilisateur.data.length > 0) {
        const user = utilisateur.data[0];
        if (data.email == user.email && data.mdp == user.mdp) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          window.dispatchEvent(new Event("auth-change"));
          navigate("/");
          navigate("/");
          toast.success("Connexion reussi!");
        } else {
          toast.error("Email ou mot de passe incorrecte!");
        }
      } else {
        toast.error("Cet utilisateur n'existe pas dans la base de donner!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-base-100 border border-base-300 rounded-box overflow-hidden shadow-xs">
        {/* Colonne gauche : Formulaire de connexion */}
        <div className="w-full bg-base-100 p-6 sm:p-8 lg:p-10 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
              Se connecter
            </h1>
            <p className="text-sm text-base-content/70 mt-1 mb-6">
              Connectez-vous pour accéder à votre compte E-shop.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Adresse e-mail */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Adresse e-mail
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11">
                  <Mail className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type="email"
                    placeholder="brice@gmail.com"
                    className="grow text-sm"
                    {...register("email", {
                      required: "Le champs email est obligattoire",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Adresse e-mail invalide",
                      },
                    })}
                  />
                </label>
                {errors.email && (
                  <p className="text-error text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Mot de passe
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11 relative">
                  <Lock className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                    className="grow text-sm"
                    {...register("mdp", {
                      required: "Le mot de passe est obligatoire",
                      minLength: {
                        value: 5,
                        message:
                          "Le mot de passe doit avoir au moins 5 carractère",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </label>
                {errors.mdp && (
                  <p className="text-error text-xs">{errors.mdp.message}</p>
                )}
              </div>

              {/* Se souvenir de moi + Mot de passe oublié */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs sm:text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-base-content/80">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-xs sm:checkbox-sm rounded-xs"
                  />
                  <span>Se souvenir de moi</span>
                </label>

                <Link
                  to="/mot-de-passe-oublie"
                  className="text-primary font-medium hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Bouton Se connecter */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary w-full h-11 gap-2 text-sm font-semibold text-primary-content mt-2"
              >
                {isLoading ? (
                  <>
                    Connexion en cours...
                    <span className="loading loading-spinner loading-sm"></span>
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Se connecter</span>
                  </>
                )}
              </button>

              {/* Séparateur ou */}
              <div className="flex items-center gap-3 py-1">
                <div className="grow border-t border-base-300" />
                <span className="text-xs text-base-content/60">ou</span>
                <div className="grow border-t border-base-300" />
              </div>

              {/* Bouton Google */}
              <button
                type="button"
                className="btn btn-outline border-base-300 bg-base-100 hover:bg-base-200 hover:border-base-300 text-base-content w-full h-11 gap-2.5 text-sm font-medium"
              >
                <span className="font-bold text-base leading-none">
                  <span className="text-info">G</span>
                </span>
                <span>Se connecter avec Google</span>
              </button>
            </form>

            {/* Lien inscription */}
            <p className="text-center text-xs sm:text-sm text-base-content/70 mt-6">
              Vous n&apos;avez pas encore de compte ?{" "}
              <Link
                to="/inscription"
                className="text-primary font-semibold hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>

        {/* Colonne droite : Panneau vert doux + illustration */}
        <div className="w-full bg-accent/45 flex items-center justify-center p-6 sm:p-10 lg:p-12 border-t lg:border-t-0 lg:border-l border-base-300/60">
          {/* <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80"
            alt="Sac E-shop, application mobile et colis"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-box"
          /> */}
        </div>
      </div>
    </section>
  );
}
