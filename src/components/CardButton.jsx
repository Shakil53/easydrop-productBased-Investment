import { Button } from "./ui/button";

function CardButton({ label, onClick }) {
  return (
    <Button
      className="min-w-[87px] min-h-[21px] px:4 rounded-[15px] md:px-4 text-[10px] md:text-[14px] bg-[#522F8F] hover:bg-[#522F8F] "
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CardButton;
