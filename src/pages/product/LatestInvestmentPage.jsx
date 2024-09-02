import { latestInvestmentDataApi } from "@/api/latestInvestmentDataApi";
import LatestInvestmentTable from "@/components/products/LatestInvestmentTable";

function LatestInvestmentPage({ onButtonClick }) {
  return (
    <>

      <div className="px-4 py-2">
        <LatestInvestmentTable
          title="Latest Investment"
          data={latestInvestmentDataApi}
          onButtonClick={onButtonClick}
          details
        />
      </div>
    </>
  );
}

export default LatestInvestmentPage;
