import Navbar from "../components/ui/Navbar";
import Breadcrumb from "../components/ui/Breadcrumb";
import ReassuranceBar from "../components/ui/ReassuranceBar";
import Footer from "../components/ui/Footer";
import RegisterSection from "../components/ui/RegisterSection";
// import { useState } from "react";

export default function RegisterPage() {
  // const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      {/* <Breadcrumb /> */}
      <Breadcrumb
        items={[{ label: "Accueil", to: "/" }, { label: "Inscription" }]}
      />
      <RegisterSection />
      <ReassuranceBar />
      <Footer />
    </>
  );
}
