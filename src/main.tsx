import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Panier from "./pages/Panier";
import ProductDetailPage from "./pages/ProductDetailPage";
const router = createBrowserRouter([
  {
    path: "/" || "/Produit",
    element: <Dashboard />,
  },
  {
    path: "/Produit",
    element: <Dashboard />,
  },
  {
    path: "/Inscription",
    element: <RegisterPage />,
  },
  {
    path: "/Connexion",
    element: <LoginPage />,
  },
  {
    path: "/Panier",
    element: <Panier />,
  },
  {
    path: "/Produit/:id",
    element: <ProductDetailPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
