import InvestmentList from "@/components/Wallet/InvestmentList";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { data } from "@/api/InvestmentListDataApi";
import InvestmentButton from "@/components/Wallet/InvestmentButton";
import { FaPlus } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function InvestmentListPage() {
  return (
    <>
       {/* -----------Investment Details page ---------- */}

      <div className="mt-4 p-4 shadow-md">
        {/* ----------- Investment Details page ----------- */}
        <div className="flex flex-row justify-between items-center md:px-2">
          <p className="text-[14px] md:text-[24px] text-[#484646] font-semibold mb-4 sm:mb-0 sm:text-center mt-4">
            Investment List
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            <InvestmentButton icon={<RiDownload2Fill />} label="Export CSV" />
            <NavLink to="/equitybased-investment/pricing">
              <InvestmentButton icon={<FaPlus />} label="Add Invest" />
            </NavLink>
          </div>
        </div>

        <InvestmentList data={data} details />
      </div>
    </>
  );
}

export default InvestmentListPage;
