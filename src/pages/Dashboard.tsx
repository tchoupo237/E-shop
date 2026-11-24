import { useState } from "react";
import { useSearchParams } from "react-router";
import Navbar from "../components/ui/Navbar";
import ProductGrid from "../components/ui/ProductGrid";
import Footer from "../components/ui/Footer";
import SearchBar from "../components/ui/SearchBar";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  return (
    <>
      <Navbar onSearch={setSearch} />

      <SearchBar onSearch={setSearch} />

      <ProductGrid search={search} category={category} />

      <Footer />
    </>
  );
}
