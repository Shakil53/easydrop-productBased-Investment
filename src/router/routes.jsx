import App from "@/App";
import LatestInvestmentPage from "@/pages/product/LatestInvestmentPage";
import LatestOrderPage from "@/pages/product/LatestOrderPage";
import PopularAssetsPage from "@/pages/product/PopularAssetsPage";
import ProductHome from "@/pages/product/ProductHome";
import Analytics from "@/pages/productBasedInvestment/Analytics";
import InvestedProduct from "@/pages/productBasedInvestment/InvestedProduct";
import ProductBasedInvestment from "@/pages/productBasedInvestment/ProductBasedInvestment";
import SuggestedProduct from "@/pages/productBasedInvestment/SuggestedProduct";
import TotalExpenses from "@/pages/productBasedInvestment/TotalExpenses";
import TotalProducts from "@/pages/productBasedInvestment/TotalProducts";
import TotalRevenue from "@/pages/productBasedInvestment/TotalRevenue";
import Pricing from "@/pages/wallet/Pricing";

import ProductBasedInvestmentWallet from "@/pages/wallet/ProductBasedInvestmentWallet";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "productBased-investment",
    element: <ProductBasedInvestment></ProductBasedInvestment>,
    children: [
      {
        path: "home",
        element: <ProductHome></ProductHome>,
      },
      {
        path: "product/assets",
        element: <PopularAssetsPage></PopularAssetsPage>,
      },
      {
        path: "product/latest-investment",
        element: <LatestInvestmentPage></LatestInvestmentPage>,
      },
      {
        path: "product/latest-order",
        element: <LatestOrderPage></LatestOrderPage>,
      },

      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      // analytics childs
      {
        path: "analytics/invested-products",
        element: <InvestedProduct></InvestedProduct>,
      },
      {
        path: "analytics/total-products",
        element: <TotalProducts></TotalProducts>,
      },
      {
        path: "analytics/total-expenses",
        element: <TotalExpenses></TotalExpenses>,
      },
      {
        path: "analytics/total-revenue",
        element: <TotalRevenue></TotalRevenue>,
      },
      {
        path: "analytics/suggested-product",
        element: <SuggestedProduct></SuggestedProduct>,
      },
      // ***MR AHAMED**
      {
        path: "wallet",
        element: <ProductBasedInvestmentWallet></ProductBasedInvestmentWallet>,
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
    ],
  },
]);
