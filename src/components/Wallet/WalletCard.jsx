import { ArrowUp } from "lucide-react";
import CardButton from "../CardButton";

function WalletCard({ title, amount, analytics, buttonLabel }) {
  return (
    <div className="w-full h-full p-6 border-2 rounded-md flex flex-col justify-between">
      {/* Title and Amount */}
      <div>
        <h3 className="text-[12px] md:text-[16px] md:text-base font-medium text-gray-500">
          {title}
        </h3>
        <p className="text-[16px] md:text-[26px] font-extrabold">TK {amount}</p>
      </div>

      {/* Analytics */}
      {analytics && (
        <div className="flex items-center gap-2 mt-2">
          <div className="bg-[#00E676] bg-opacity-20 w-6 h-6 rounded-full flex items-center justify-center">
            <ArrowUp className="text-[#00E676] w-4 h-4" />
          </div>
          <p className="text-xs md:text-sm text-[#949494]">
            <span className="text-[#00E676]">+50%</span> From last week
          </p>
        </div>
      )}

      {/* Button */}
      {buttonLabel && (
        <div className="flex justify-end mt-4">
          <CardButton label={buttonLabel} />
        </div>
      )}
    </div>
  );
}

export default WalletCard;
