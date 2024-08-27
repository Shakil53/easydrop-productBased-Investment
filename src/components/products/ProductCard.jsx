import CardButton from "../CardButton";

function ProductCard({ title, amount, buttonLabel, icon }) {
  return (
    <div>
      <div className="w-full h-full p-6 border-4 rounded-lg flex flex-col justify-between">
        {/* Title and Amount */}
        <div>
          <span className="flex justify-between items-center">
            <h3 className="text-[12px] md:text-[16px] md:text-base font-bold text-[#484646]">
              {title}
            </h3>

            {icon}
          </span>
          <span className="flex justify-between my-4">
            <p className="text-[16px] md:text-[26px] font-bold">TK {amount}</p>
            {/* Button */}
            {buttonLabel && (
              <div className="flex justify-end">
                <CardButton label={buttonLabel} />
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
