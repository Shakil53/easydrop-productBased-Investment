import Sidebar from "@/layout/Sidebar";
import { Outlet } from "react-router-dom";


const ProductBasedInvestment = () => {
    return (
        <>
      {/* Navbar goes here */}

      <div className="grid grid-cols-12 h-screen">
        <Sidebar></Sidebar>

        <div className="col-span-10 w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
    );
};

export default ProductBasedInvestment;