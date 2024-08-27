import LatestOrderTable from "@/components/products/LatestOrderTable";
import { latestOrderDataApi } from "@/api/LatestOrderDataApi";

function LatestOrderPage({ onButtonClick }) {
  return (
    <div>
      <div className="my-2 mx-4">
        <LatestOrderTable
          title="Latest Order"
          data={latestOrderDataApi}
          details
        />
      </div>
    </div>
  );
}

export default LatestOrderPage;
