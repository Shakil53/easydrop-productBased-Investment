import App from "@/App";
import Analytics from "@/pages/productBasedInvestment/Analytics";
import Home from "@/pages/productBasedInvestment/Home";
import ProductBasedInvestment from "@/pages/productBasedInvestment/ProductBasedInvestment";
import Wallet from "@/pages/productBasedInvestment/Wallet";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
  },
  {
    path: 'productBased-investment',
    element: <ProductBasedInvestment></ProductBasedInvestment>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'analytics',
        element: <Analytics></Analytics>
      },
      {
        path: 'wallet',
        element: <Wallet></Wallet>
      },
    ]
  },
  ]);