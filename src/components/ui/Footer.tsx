type FooterProps = {
  annee?: number;
  nomBoutique?: string;
};

export default function Footer({
  annee = new Date().getFullYear(),
  nomBoutique = "E-shop",
}: FooterProps) {
  return (
    <footer className="w-full bg-primary text-primary-content mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs sm:text-sm">
        <p>
          &copy; {annee} {nomBoutique}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
