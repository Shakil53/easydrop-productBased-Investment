import App from "@/App";
import Analytics from "@/pages/productBasedInvestment/Analytics";
import Home from "@/pages/productBasedInvestment/Home";
import InvestedProduct from "@/pages/productBasedInvestment/InvestedProduct";
import ProductBasedInvestment from "@/pages/productBasedInvestment/ProductBasedInvestment";
import SuggestedProduct from "@/pages/productBasedInvestment/SuggestedProduct";
import TotalExpenses from "@/pages/productBasedInvestment/TotalExpenses";
import TotalProducts from "@/pages/productBasedInvestment/TotalProducts";
import TotalRevenue from "@/pages/productBasedInvestment/TotalRevenue";
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
      // analytics childs
      {
        path: 'analytics/invested-products',
        element: <InvestedProduct></InvestedProduct>
      },
      {
        path: 'analytics/total-products',
        element: <TotalProducts></TotalProducts>
      },
      {
        path: 'analytics/total-expenses',
        element: <TotalExpenses></TotalExpenses>
      },
      {
        path: 'analytics/total-revenue',
        element: <TotalRevenue></TotalRevenue>
      },
      {
        path: 'analytics/suggested-product',
        element: <SuggestedProduct></SuggestedProduct>
      },
      {
        path: 'wallet',
        element: <Wallet></Wallet>
      },
      // {
      //   path: 'wallet/add-investment',
      //   element: <TODO>
      // },
     
    ]
  },
  ]);