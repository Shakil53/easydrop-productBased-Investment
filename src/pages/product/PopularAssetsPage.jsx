import { popularAssetsDataApi } from "@/api/popularAssetsDataApi";
import PopularAssetsTable from "@/components/products/PopularAssetsTable";


function PopularAssetsPage() {
  return (
    <div>
      <div className="px-4 py-2">
        <PopularAssetsTable
          title="Popular Assets"
          // tableHeading={PopularAssetsTableHeading}
          data={popularAssetsDataApi}
          details
        />
      </div>
    </div>
  );
}

export default PopularAssetsPage;
