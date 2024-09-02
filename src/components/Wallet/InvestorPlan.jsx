import { IoIosCheckmark } from "react-icons/io";
import InvestmentButton from "./InvestmentButton";

function InvestorPlan({ plan, mostPopular }) {
  return (
    <div className="block">
      {mostPopular && (
        <div className="bg-[#C2397E]   z-10 rounded-t-md">
          <p className="text-white py-5 text-md">Most Popular</p>
        </div>
      )}
      <div
        className={`${
          mostPopular
            ? "border-l-2 border-r-2 border-b-2 rounded-b-md "
            : "border-2 rounded-md"
        } border-[#DBDBDB] z-1 p-4  min-w-[320px]`}
      >
        <div className="py-1">
          <h2 className=" text-md font-[400] mb-2 mt-2 text-center text-[#484646] ">
            {plan.title}
          </h2>
          <p className="text-[20px] font-bold text-[#C2397E] mb-4 text-center">
            {plan.amount} Taka
          </p>
        </div>
        <hr />

        <ul className="mt-6 space-y-3 ml-4">
          {plan.items.map((item) => (
            <li
              key={item.id}
              className="flex items-center text-sm font-[500] text-[#454545]"
            >
              <span className="text-white mr-2 rounded-full bg-[#C2397E]">
                <IoIosCheckmark className="text-xl" />
              </span>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <InvestmentButton label="Get Started" className="" />
        </div>
      </div>
    </div>
  );
}

export default InvestorPlan;
