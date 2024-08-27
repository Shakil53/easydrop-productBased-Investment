import { Button } from "../ui/button";

function InvestmentButton({ icon, label, viewAll }) {
  return (
    <>
      <Button
        className={`flex items-center gap-[4px] text-[#000000] border-[1px] border-[#676767] border-opacity-50 bg-transparent text-[10px] md:text-[14px] hover:bg-transparent ${
          viewAll && "flex-row-reverse"
        }`}
      >
        {icon}
        {label}
      </Button>
    </>
  );
}

export default InvestmentButton;
