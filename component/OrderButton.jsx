import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

const OrderButton = () => {
  return (
    <div className="">
      <Link
        href="#shopNow"
        className="btn w-[400px] h-[60px] flex-center gap-3 cursor-pointer bg-gradient-to-tl from-[#6b0609] to-fuchsia-500 text-white rounded-lg hover:bg-gradient-to-bl hover:text-slate-200 transition-all duration-300"
      >
        <HiOutlineShoppingBag className="text-[20px]" />
        <p>অর্ডার করতে চাই</p>
        <div className="flex items-center gap-2">
          <span className="line-through text-gray-300 text-base">৳২১০০</span>
          <span className="text-yellow-400 font-bold text-lg">৳১৪৯৯</span>
        </div>
      </Link>
    </div>
  );
};

export default OrderButton;
