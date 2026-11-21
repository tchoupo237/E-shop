import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Fil d'Ariane"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        {items.map((item, index) => {
          const estDernier = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {item.to && !estDernier ? (
                <Link
                  to={item.to}
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={
                    estDernier
                      ? "text-primary font-medium"
                      : "text-base-content/70"
                  }
                >
                  {item.label}
                </span>
              )}

              {!estDernier && (
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-base-content/40" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
