import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Panier from "./pages/Panier";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Produit",
    element: <Dashboard />,
  },
  {
    path: "/Produit/:id",
    element: <ProductDetailPage />,
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
      }}
    />
  </StrictMode>,
);
