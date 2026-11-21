import { Link } from "react-router";
import { User, Mail, Lock, Eye, UserPlus } from "lucide-react";

type RegisterPanelProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export default function RegisterSection({
  imageSrc = "/images/eshop-auth-illustration.png",
  imageAlt = "Sac E-shop, application mobile et colis",
}: RegisterPanelProps) {
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

            <form className="space-y-4">
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
                  />
                </label>
              </div>

              {/* Adresse e-mail */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Adresse e-mail
                </label>
                <label className="input input-bordered bg-base-200/70 flex items-center gap-2.5 w-full h-11">
                  <Mail className="w-4 h-4 text-base-content/60 shrink-0" />
                  <input
                    type="email"
                    defaultValue="brice@gmail.com"
                    className="grow text-sm text-base-content"
                  />
                </label>
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Mot de passe
                </label>
                <label className="input input-bordered bg-base-200/70 flex items-center gap-2.5 w-full h-11">
                  <Lock className="w-4 h-4 text-base-content/60 shrink-0" />
                  <input
                    type="password"
                    defaultValue="1234"
                    className="grow text-sm text-base-content"
                  />
                  <Eye className="w-4 h-4 text-base-content/60 shrink-0" />
                </label>
              </div>

              {/* Confirmer le mot de passe */}
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Confirmer le mot de passe
                </label>
                <label className="input input-bordered bg-base-200/70 flex items-center gap-2.5 w-full h-11">
                  <Lock className="w-4 h-4 text-base-content/60 shrink-0" />
                  <input
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    className="grow text-sm"
                  />
                  <Eye className="w-4 h-4 text-base-content/60 shrink-0" />
                </label>
              </div>

              {/* Conditions d'utilisation */}
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-base-content/80">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-xs sm:checkbox-sm rounded-xs"
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
              </div>

              {/* Bouton S'inscrire */}
              <button
                type="submit"
                className="btn btn-primary w-full h-11 gap-2 text-sm font-semibold text-primary-content mt-2"
              >
                <UserPlus className="w-4 h-4" />
                <span>S&apos;inscrire</span>
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
            src={imageSrc}
            alt={imageAlt}
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
}
