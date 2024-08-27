import { Button } from "./ui/button";

function CardButton({ label, onClick }) {
  return (
    <Button
      className=" py-[4px] md:py-[8px] px-[10px] md:px-[15px] rounded-[10px] text-[12px] md:text-[14px] bg-[#522F8F] hover:bg-[#522F8F]"
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default CardButton;
