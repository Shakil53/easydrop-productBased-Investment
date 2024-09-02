import InvestmentButton from "@/components/Wallet/InvestmentButton";
import InvestmentList from "@/components/Wallet/InvestmentList";
import WalletCard from "@/components/Wallet/WalletCard";
import { RiDownload2Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import LastTransaction from "@/components/Wallet/LastTransaction";
import { NavLink } from "react-router-dom";
import { data } from "@/api/InvestmentListDataApi";

const ProductBasedInvestmentWallet = () => {
  // Slice the data array to send only the first 4 items to InvestmentList
  const limitedData = data.slice(0, 4);

  return (
    <div className="px-4 md:px-6 py-10">
      {/*------------- Wallet Card Items -------------*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <WalletCard
          title="Current Balance"
          amount="200"
          buttonLabel="Request Payment"
        />
        <WalletCard title="Total Profit" amount="750" analytics />
        <WalletCard title="Total Investment Amount" amount="650" analytics />
        <WalletCard
          title="Deposit Balance"
          amount="800"
          buttonLabel="Add Deposit"
        />
      </div>
      {/* ------------- Investment List-------------  */}
      <div className="border mt-4 px-2 py-4 rounded-lg shadow-md">
        <div className="flex flex-row justify-between items-center md:px-2">
          <p className="text-[14px] md:text-[24px] text-[#484646] font-semibold mb-4 sm:mb-0 sm:text-center mt-4">
            Payment Request
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {/* *******CSV Download Button *********** */}
            <InvestmentButton icon={<RiDownload2Fill />} label="Export CSV" />

            {/* *******Add Investment Button *********** */}
            <NavLink to="/productBased-investment/pricing">
              <InvestmentButton icon={<FaPlus />} label="Add Invest" />
            </NavLink>
            {/* ******View All Button******** */}
            <NavLink to="/productBased-investment/payment-request">
              <InvestmentButton
                icon={<FaArrowRight />}
                label="View All"
                viewAll
              />
            </NavLink>
          </div>
        </div>
        {/* ******Payment Request Table  ******** */}
        <InvestmentList data={limitedData} />
      </div>
      {/* -------------Last Transaction ------------- */}
      <div className="border mt-4 px-4 sm:px-8 py-4 sm:py-6 rounded-lg shadow-md">
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:text-[24px] text-[#484646] font-semibold mb-4 sm:mb-0 text-center sm:text-left">
            Last Transaction
          </p>
          <InvestmentButton icon={<FaArrowRight />} label="View All" viewAll />
        </div>

        <LastTransaction />
      </div>
    </div>
  );
};

export default ProductBasedInvestmentWallet;
