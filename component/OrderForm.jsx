"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    size: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
  };

  // Validate and submit
  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.size) newErrors.size = "Please select a size";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Final billing object
    console.log("Billing Details:", formData);
    alert("Billing details submitted successfully!");
  };

  return (
    <div>
      <div className="flex-center">
        <h1 className="text-[#6b0609] text-2xl font-bold text-center px-7 py-3 border-2 border-[#6b0609] rounded-tl-2xl rounded-br-2xl text-wrap inline m-auto">
          অর্ডার করতে নিচের ফর্মটি পূরণ করুন
        </h1>
      </div>

      <div className="flex justify-between mt-10">
        <div className="w-[500px]">
          <h2 className="text-2xl text-orange-500 font-semibold mb-6">
            Billing Details
          </h2>

          <div className="mb-3">
            <label className="block font-medium mb-1 text-[#6b0609]">
              আপনার নাম লিখুন *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-purple-400 rounded-md outline-none billing-input"
              placeholder="আপনার নাম"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1 text-[#6b0609]">
              ফোন নাম্বার লিখুন *
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border-2 border-purple-400 rounded-md outline-none billing-input"
              placeholder="ফোন নাম্বার"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1 text-[#6b0609]">
              ঠিকানা লিখুন *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border-2 border-purple-400 rounded-md outline-none billing-input"
              placeholder="বাসা নং, রোড নং, গ্রাম, থানা/উপজেলা, জেলা লিখুন"
              rows="3"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-[#6b0609]">
              আপনার সাইজ সিলেক্ট করুনঃ *
            </label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-2 border-2 border-purple-400 rounded-md outline-none billing-input"
            >
              <option value="">Choose size</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="3XL">3XL</option>
            </select>
            {errors.size && (
              <p className="text-red-500 text-sm">{errors.size}</p>
            )}
          </div>
        </div>

        <div className="w-lg">
          <h2 className="text-2xl text-orange-500 font-semibold mb-6">
            Your order
          </h2>
          <div className="col-flex gap-3">
            <div className="flex-between text-lg text-slate-800  border-b border-dashed border-slate-800 pb-2 font-semibold">
              <h4>Product</h4>
              <h4>Subtotal</h4>
            </div>

            <div className="border-b border-dashed border-slate-800 pb-2 flex-between gap-5">
              <div className="flex-center gap-3">
                <Image
                  width={100}
                  height={100}
                  src={"/images/product-boundle.png"}
                  alt={`Product`}
                  className="rounded-lg shadow-lg w-[100px] h-auto object-contain"
                />
                <h2 className="text-sm text-slate-800">
                  Premium Polo Shirt 2pcs Combo (Black, White) - M
                </h2>
                <h2 className="text-sm text-slate-800">x1</h2>
              </div>
              <div className="w-[200px] flex-end">
                <h2 className="font-sm text-slate-800">1,499.00৳ </h2>
              </div>
            </div>

            <div className="border-b border-dashed border-slate-800 pb-2 flex-between gap-5">
              <h2 className="text-sm text-slate-800">Subtotal</h2>
              <div className="w-[200px] flex-end">
                <h2 className="font-sm text-slate-800">1,499.00৳ </h2>
              </div>
            </div>

            <div className="border-b border-dashed border-slate-800 pb-2 flex-between gap-5">
              <h2 className="text-sm text-slate-800">Delivery Charge</h2>
              <div className="w-[200px] flex-end">
                <h2 className="font-sm text-slate-800">Free </h2>
              </div>
            </div>

            <div className="border-b border-dashed border-slate-800 pb-2 flex-between gap-5">
              <h2 className="text-sm text-slate-800 font-semibold">Total</h2>
              <div className="w-[200px] flex-end">
                <h2 className="font-sm text-slate-800 font-semibold">
                  1,499.00৳{" "}
                </h2>
              </div>
            </div>

            <div className="border-b border-dashed border-slate-800 pb-2 flex-between gap-5">
              <h2 className="text-sm text-slate-800 font-">Payment Method</h2>
              <div className="">
                <h2 className="font-xs text-slate-800 font-semibold">
                  Cash On Delivery
                </h2>
                <p className="text-xs">Pay with cash upon delivery.</p>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn w-full h-[60px] flex-center gap-3 cursor-pointer bg-gradient-to-tl from-purple-500 to-purple-400 text-white rounded-lg hover:bg-gradient-to-bl hover:text-slate-200 transition-all duration-300"
              >
                {/* <HiOutlineShoppingBag className="text-[20px]" /> */}
                <p className="text-xl">অর্ডার করুন</p>
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-300 text-base">
                    ৳২১০০
                  </span>
                  <span className="text-yellow-400 font-bold text-xl">
                    ৳১৪৯৯
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
