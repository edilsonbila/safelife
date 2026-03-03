import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/AppLayout";
import { LandingPage } from "./pages/LandingPage";
import { CustomerDashboard } from "./pages/CustomerDashboard";
import { PartnerDashboard } from "./pages/PartnerDashboard";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ProductList } from "./pages/ProductList";
import { ProductSimulation } from "./pages/ProductSimulation";
import { AboutPage } from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: LandingPage },
      { path: "products", Component: ProductList },
      { path: "products/:id/simulate", Component: ProductSimulation },
      { path: "dashboard", Component: CustomerDashboard },
      { path: "dashboard/policies", Component: CustomerDashboard },
      { path: "dashboard/claims", Component: CustomerDashboard },
      { path: "partner", Component: PartnerDashboard },
      { path: "admin", Component: AdminDashboard },
      { path: "about", Component: AboutPage },
      { path: "claims/public", Component: AboutPage }, // Using AboutPage as placeholder for simple info
    ],
  },
]);
