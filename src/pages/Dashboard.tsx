import React from "react";
import Navbar from "../components/ui/Navbar";
import SearchBar from "../components/ui/SearchBar";
import ProductGrid from "../components/ui/ProductGrid";
import Footer from "../components/ui/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <ProductGrid />
      <Footer />
    </>
  );
}
