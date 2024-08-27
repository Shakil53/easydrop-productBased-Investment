import InvestorPlan from "@/components/Wallet/InvestorPlan";

const basicPlan = {
  title: "Basic Investor Plan",
  amount: "50,000",
  items: [
    { id: 1, name: "Monthly reports" },
    { id: 2, name: "Annual meeting" },
    { id: 3, name: "Portfolio analysis" },
    { id: 4, name: "Company visit" },
    { id: 5, name: "Customer care support" },
  ],
};

const popularPlan = {
  title: "Elite Investment Plan",
  amount: "300,000",
  items: [
    { id: 1, name: "Monthly reports" },
    { id: 2, name: "Annual meeting" },
    { id: 3, name: "Portfolio analysis" },
    { id: 4, name: "Company visit" },
    { id: 5, name: "Customer care support" },
    { id: 6, name: "Full financial access" },
    { id: 7, name: "Monthly CEO meetings" },
    { id: 8, name: "Company event access" },
    { id: 9, name: "24-hour customer care" },
  ],
};

const premiumPlan = {
  title: "Premium Investment Plan",
  amount: "100,000",
  items: [
    { id: 1, name: "Monthly reports" },
    { id: 2, name: "Annual meeting" },
    { id: 3, name: "Portfolio analysis" },
    { id: 4, name: "Full financial access" },
    { id: 5, name: "Company visit" },
  ],
};

function Pricing() {
  return (
    <div>
      <div className="w-full mx-auto text-center">
        <h1
          className="text-[#522F8F] font-[700] text-[26px] text-center mt-4
        "
        >
          Invest confidently with our excellent plans designed <br />{" "}
          specifically for you
        </h1>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-center items-center mt-8">
          <InvestorPlan plan={basicPlan} />
          <InvestorPlan plan={popularPlan} mostPopular />
          <InvestorPlan plan={premiumPlan} />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
