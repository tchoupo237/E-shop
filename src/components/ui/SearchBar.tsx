import { useState } from "react";

type Props = {
  onSearch: (search: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [search, setSearch] = useState("");

  function handleChange(value: string) {
    setSearch(value);
    onSearch(value);
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Entre le nom du produit que vous recherchez"
          className="input input-bordered bg-base-100 w-full h-11 sm:h-12 text-sm rounded-r-none focus:outline-none focus:border-primary"
        />

        <button
          type="button"
          className="btn btn-primary h-11 sm:h-12 px-5 sm:px-6 text-sm font-medium text-primary-content rounded-l-none shrink-0"
        >
          Recherche
        </button>
      </form>
    </div>
  );
}
