import { Link } from "react-router";
import { User, Mail, Lock, Eye, UserPlus, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function RegisterSection() {
  type Utilisateur = {
    nom: string;
    email: string;
    mdp: string;
    confirmMdp: string;
    conditions: boolean;
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Utilisateur>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit = async (data: Utilisateur) => {
    try {
      setIsLoading(true);
      // Normaliser l'adresse e-mail
      const email = data.email.trim().toLowerCase();

      // Vérifier si l'utilisateur existe déjà
      const verification = await axios.get(
        "http://localhost:3000/Utilisateur",
        {
          params: { email },
        },
      );

      // Si l'adresse existe déjà
      if (verification.data.length > 0) {
        toast.error("Cette adresse e-mail est déjà utilisée !");
        return;
      }

      // Enregistrer le nouvel utilisateur
      const nouvelUtilisateur = {
        nom: data.nom,
        email: email,
        mdp: data.mdp,
      };

      const response = await axios.post(
        "http://localhost:3000/Utilisateur",
        nouvelUtilisateur,
      );

      console.log(response.data);
      toast.success("Inscription réussie !");
      navigate("/");
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
        {/* Colonne gauche : Formulaire */}
        <div className="w-full bg-base-100 p-6 sm:p-8 lg:p-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-base-content">
              Créer un compte
            </h1>
            <p className="text-sm text-base-content/70 mt-1 mb-6">
              Inscrivez-vous pour commencer vos achats sur E-shop.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Nom complet */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Nom complet
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11">
                  <User className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type="text"
                    placeholder="Entrez votre nom complet"
                    className="grow text-sm"
                    {...register("nom", {
                      required: "Le nom est obligatoire",
                      minLength: {
                        value: 3,
                        message:
                          "Votre nom doit contenir au moins 3 caractères",
                      },
                    })}
                  />
                </label>
                {errors.nom && (
                  <p className="text-error text-xs">{errors.nom.message}</p>
                )}
              </div>

              {/* Adresse e-mail */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Adresse e-mail
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11">
                  <Mail className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type="email"
                    placeholder="Entrez votre adresse e-mail"
                    className="grow text-sm"
                    {...register("email", {
                      required: "L'adresse e-mail est obligatoire",
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
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11">
                  <Lock className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                    className="grow text-sm"
                    {...register("mdp", {
                      required: "Le mot de passe est obligatoire",
                      minLength: {
                        value: 5,
                        message: "5 caractères minimum",
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

              {/* Confirmer le mot de passe */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Confirmer le mot de passe
                </label>
                <label className="input input-bordered bg-base-100 flex items-center gap-2.5 w-full h-11">
                  <Lock className="w-4 h-4 text-base-content/50 shrink-0" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmez votre mot de passe"
                    className="grow text-sm"
                    {...register("confirmMdp", {
                      required:
                        "La confirmation du mot de passe est obligatoire",
                      validate: (value) =>
                        value === getValues("mdp") ||
                        "Les mots de passe ne correspondent pas",
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
                {errors.confirmMdp && (
                  <p className="text-error text-xs">
                    {errors.confirmMdp.message}
                  </p>
                )}
              </div>

              {/* Conditions d'utilisation */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-base-content/80">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-xs sm:checkbox-sm rounded-xs"
                    {...register("conditions", {
                      required: "Vous devez accepter les conditions",
                    })}
                  />
                  <span>
                    J&apos;accepte les{" "}
                    <Link
                      to="/conditions"
                      className="text-primary underline font-medium"
                    >
                      conditions d&apos;utilisation
                    </Link>
                  </span>
                </label>
                {errors.conditions && (
                  <p className="text-error text-xs">
                    {errors.conditions.message}
                  </p>
                )}
              </div>

              {/* Bouton S'inscrire */}
              {isLoading ? (
                <button
                  type="submit"
                  className="btn btn-primary w-full h-11 gap-2 text-sm font-semibold text-primary-content mt-2"
                  disabled={isLoading}
                >
                  Inscription en cours{" "}
                  <span className="loading loading-spinner"></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary w-full h-11 gap-2 text-sm font-semibold text-primary-content mt-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>S&apos;inscrire</span>
                </button>
              )}

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
                <span>S&apos;inscrire avec Google</span>
              </button>
            </form>

            {/* Lien connexion */}
            <p className="text-center text-xs sm:text-sm text-base-content/70 mt-6">
              Vous avez déjà un compte ?{" "}
              <Link
                to="/connexion"
                className="text-primary font-semibold hover:underline"
              >
                Se connecter
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
