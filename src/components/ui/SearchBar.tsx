export default function SearchBar() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
      <form className="flex w-full">
        <input
          type="text"
          placeholder="Entre le nom du produit que vous recherchez"
          className="input input-bordered bg-base-100 w-full h-11 sm:h-12 text-sm rounded-r-none focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="btn btn-primary h-11 sm:h-12 px-5 sm:px-6 text-sm font-medium text-primary-content rounded-l-none shrink-0"
        >
          Recherche
        </button>
      </form>
    </div>
  );
}
