import ProductCard from "@/components/products/ProductCard";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { popularAssetsDataApi } from "@/api/popularAssetsDataApi";
import { latestInvestmentDataApi } from "@/api/latestInvestmentDataApi";

import LatestInvestmentTable from "@/components/products/LatestInvestmentTable";
import { latestOrderDataApi } from "@/api/LatestOrderDataApi";
import LatestOrderTable from "@/components/products/LatestOrderTable";
import PopularAssetsTable from "@/components/products/PopularAssetsTable";
import { useNavigate } from "react-router-dom";
// import Header from "../UserDashboard/Header";

function ProductHome() {
  const limitedData = popularAssetsDataApi.slice(0, 4);
  const limitedDataLatestInvestment = latestInvestmentDataApi.slice(0, 4);
  const limitedDataLatestOrder = latestOrderDataApi.slice(0, 6);
  const navigate = useNavigate();

  return (
    <>
      {/* <Header /> */}
      <div className="p-10">
        {/*------------- Product card items --------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProductCard
            title="Current Balance"
            amount="1000"
            buttonLabel="Request Payment"
            icon={<TbCoinTakaFilled className="size-8 text-[#64449B]" />}
          />
          <ProductCard
            title="Invested Balance"
            amount="18500"
            icon={<FaWallet className="size-8 text-[#64449B]" />}
          />
          <ProductCard
            title="Income"
            amount="1500"
            icon={<FaSackDollar className="size-8 text-[#64449B]" />}
          />
        </div>

        {/*-------- Popular Assets & Latest Investment & Latest Order----------  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* ----------------------Popular Assets-------------------- */}
          <PopularAssetsTable
            title="Popular Assets"
            data={limitedData}
            buttonLabel="View More"
            onButtonClick={() =>
              navigate("/productBased-investment/product/assets")
            }
          />
          {/* -------------------Latest Investment--------------------- */}
          <LatestInvestmentTable
            title="Latest Investment"
            data={limitedDataLatestInvestment}
            buttonLabel="View More"
            onButtonClick={() =>
              navigate("/productBased-investment/product/latest-investment")
            }
          />
        </div>
        {/* ------------------Latest Order----------------------- */}
        <LatestOrderTable
          title="Latest Order"
          buttonLabel="View More"
          data={limitedDataLatestOrder}
          onButtonClick={() =>
            navigate("/productBased-investment/product/latest-order")
          }
        />
      </div>
    </>
  );
}

export default ProductHome;
