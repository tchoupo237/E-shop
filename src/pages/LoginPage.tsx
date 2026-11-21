import React from "react";
import Navbar from "../components/ui/Navbar";
import Breadcrumb from "../components/ui/Breadcrumb";
import ReassuranceBar from "../components/ui/ReassuranceBar";
import Footer from "../components/ui/Footer";
import LoginSection from "../components/ui/LoginSection";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      {/* <Breadcrumb /> */}
      <Breadcrumb
        items={[{ label: "Accueil", to: "/" }, { label: "Connexion" }]}
      />
      <LoginSection />
      <ReassuranceBar />
      <Footer />
    </>
  );
}
