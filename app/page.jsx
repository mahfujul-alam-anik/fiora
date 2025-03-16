import ScrollIndicator from "@/component/ScrollIndicator";
import {
  shirt_quality_left,
  shirt_quality_right,
} from "@/constant/shirt_quality";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import OrderButton from "@/component/OrderButton";
import ReviewSlider from "@/component/Reviews";
import OrderForm from "@/component/OrderForm";
import { socialLinks } from "@/constant/reviews";

const Page = () => {
  return (
    <main className="min-h-screen relative">
      <div className="page-bg"></div>
      <main className="max-w-[1280px] mx-auto relative z-50">
        <header className="flex-between px-10 max-md:px-4 py-5 pt-7 backdrop-blur-lg">
          <div className="flex-center gap-3">
            <Image
              src="/images/fiora-logo.png"
              alt="Fiora"
              width={80}
              height={80}
              className="object-contain rounded-full"
            />
            <h1 className="text-slate-900 font-bold text-3xl">Fiora</h1>
          </div>
          <div>
            <Link
              href="#shopNow"
              className="p-3 block w-auto rounded-full hover:bg-slate-500/20 transition-all duration-200 cursor-pointer"
            >
              <HiOutlineShoppingBag className="text-[30px]" />
            </Link>
          </div>
        </header>
        <div className="px-10 max-md:px-4">
          <section className="flex h-[70vh] items-center max-md:flex-col">
            <div className="col-flex gap-2 relative">
              <h2 className="text-6xl text-[#6b0609] font-bold pb-2 max-md:text-4xl">
                2 PCS Combo
              </h2>
              <h1 className="text-[50px] max-md:text-3xl font-bold">
                <span className="text-blue-700">Premium</span>
                <span className="text-slate-800 px-3">|</span>
                <span className="text-orange-500">Polo Shirt</span>
              </h1>
              <h4 className="text-slate-900 capitalize text-[33px] max-md:text-base font-medium">
                100% soft cotton & comfortable feel
              </h4>
              <div className="mt-6 max-md:hidden">
                <Link
                  href="#shopNow"
                  className="btn w-[200px] h-[50px] flex-center gap-3 cursor-pointer bg-linear-to-tl from-[#6b0609] to-fuchsia-500 text-white rounded-full hover:bg-linear-to-bl hover:text-orange-400 transition-all duration-300"
                >
                  <HiOutlineShoppingBag className="text-[20px]" />
                  <p>Shop Now</p>
                </Link>
              </div>
              <div className="absolute right-0 -bottom-[100px] max-md:hidden">
                <ScrollIndicator />
              </div>
            </div>

            <div className="relative flex items-end justify-end max-md:w-full">
              <Image
                src="/images/t-shirt-white.png"
                alt="T-shirt"
                width={300}
                height={300}
                className="object-contain max-md:w-[220px] absolute left-[200px] max-md:left-[-13px] bottom-0"
              />
              <Image
                src="/images/t-shirt-black.png"
                alt="T-shirt"
                width={400}
                height={400}
                className="object-contain max-md:w-[300px]"
              />
            </div>
          </section>

          <div className="mt-8 hidden max-md:block max-md:flex-center">
            <Link
              href="#shopNow"
              className="btn w-[200px] h-[50px] flex-center gap-3 cursor-pointer bg-linear-to-tl from-[#6b0609] to-fuchsia-500 text-white rounded-full hover:bg-linear-to-bl hover:text-orange-400 transition-all duration-300 max-md:m-auto"
            >
              <HiOutlineShoppingBag className="text-[20px]" />
              <p>Shop Now</p>
            </Link>
          </div>

          <section className="pt-[160px] max-md:pt-10">
            <div className="">
              <h1 className="text-[#6b0609] text-[40px] max-md:text-3xl font-bold text-center">
                ২ টি সলিড ব্র্যান্ড টি-শার্টের কম্বো পাচ্ছেন মাত্র
                <span className="block max-md:inline">{` ১৪৯৯ টাকায়`}</span>
              </h1>
              <h2 className="text-orange-600 text-center text-2xl max-md:text-base font-bold mt-4 px-5">
                এই টি-শার্টগুলো লোকাল টি-শার্টের মতো পরনে হার্শ হবে না, বব্লিন
                উঠবে না, দীর্ঘদিন ব্যবহারের উপযোগী, পড়তে খুবই আরামদায়ক, একই সাথে
                দেখতেও বেশ সুন্দর।
              </h2>
            </div>

            <div className="mx-auto border-2 border-dashed flex-between mt-16 max-md:mt-10 text-slate-900 rounded-lg font-bold border-slate-500 bg-slate-200/20 max-md:flex-col">
              <div className="h-full max-md:flex items-center justify-center hidden px-2 py-4 border-b-2 border-dashed">
                <h1 className="text-[23px] text-[#6b0609] font-bold text-center">
                  আমাদের টিশার্টের কোয়ালিটি
                </h1>
              </div>

              <div className="flex-col gap-2 border-r-2 max-md:border-r-0 border-dashed border-slate-500">
                {shirt_quality_left.map((quality, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border-dashed border-b-2 last:border-0 p-4 px-6 max-md:px-4 border-slate-500"
                  >
                    <div className="w-[30px] h-[30px] bg-blue-500 rounded-full flex-center">
                      <FaRegCheckCircle className="text-lg text-slate-100" />
                    </div>
                    <p>{quality.quality}</p>
                  </div>
                ))}
              </div>

              <div className="h-full flex items-center justify-center max-md:hidden">
                <h1 className="vertical-text text-[23px] text-[#6b0609] font-bold">
                  আমাদের টিশার্টের কোয়ালিটি
                </h1>
              </div>

              <div className="flex-col gap-2 border-l-2 max-md:border-l-0 max-md:border-t-2 border-dashed border-slate-500">
                {shirt_quality_right.map((quality, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border-dashed border-b-2 last:border-0 p-4 px-6 border-slate-500 max-md:px-4"
                  >
                    <div className="w-[30px] h-[30px] bg-blue-500 rounded-full flex-center">
                      <FaRegCheckCircle className="text-lg text-slate-100" />
                    </div>
                    <p>{quality.quality}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex-center">
              <OrderButton />
            </div>
          </section>

          <section className="pt-[100px] max-md:pt-14">
            <h1 className="text-[#6b0609] text-[40px] max-md:text-3xl font-bold text-center">
              কাস্টমার ফিডব্যাক
            </h1>
            <ReviewSlider />
          </section>

          <section className="pt-10 max-md:pt-4">
            <div>
              <Image
                width={500}
                height={500}
                src={"/images/size-chart.png"}
                alt={`Size Chart`}
                className="rounded-2xl shadow-lg w-[700px] max-md:w-full h-auto object-contain border-2 border-slate-200 mx-auto"
              />
            </div>
          </section>

          <section className="pt-10 max-md:pt-5">
            <div className="bg-purple-300 py-9 rounded-2xl">
              <h1 className="text-[#6b0609] text-4xl max-md:text-3xl font-bold text-center line-through">
                রেগুলার প্রাইস ২১০০ টাকা
              </h1>
              <h2 className="text-[#dd5700] text-center text-4xl max-md:text-4xl font-bold mt-3">
                ঈদ স্পেশাল অফার প্রাইস মাত্র ১৪৯৯ টাকা
              </h2>
            </div>
          </section>

          <section
            className="bg-purple-200 rounded-2xl mt-14 py-10 px-12 max-md:px-4 max-md:mt-5"
            id="shopNow"
          >
            <OrderForm />
          </section>

          <footer className="border-t border-slate-300 mt-[80px] max-md:mt-14 pb-5">
            <div className="m-auto flex-center">
              <ul className="flex items-center gap-6 mt-10 max-md:mt-6">
                {socialLinks.map((item, index) => (
                  <li key={index} className="hover:scale-125 duration-300">
                    <Link href={item.href}>
                      <Image
                        src={`/images/social/${item.icon}`}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-center py-5">
              <p className="text-slate-800">
                &copy; {new Date().getFullYear()} Fiora. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </main>
  );
};

export default Page;
