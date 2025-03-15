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
    <main className="min-h-screen">
      <div className="page-bg"></div>
      <main className="max-w-[1280px] mx-auto relative z-50">
        <header className="flex-between px-10 py-5 backdrop-blur-lg">
          <div>
            <Image
              src="/images/fiora-logo.png"
              alt="Fiora"
              width={80}
              height={80}
              className="object-contain rounded-full"
            />
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
        <div className="px-10">
          <section className="flex h-[70vh] items-center ">
            <div className="col-flex gap-2 relative">
              <h2 className="text-6xl text-[#6b0609] font-bold pb-2">
                2 PCS Combo
              </h2>
              <h1 className="text-[50px] font-bold">
                <span className="text-blue-700">Premium</span>
                <span className="text-slate-800 px-3">|</span>
                <span className="text-orange-500">Polo T-shirt</span>
              </h1>
              <h4 className="text-slate-900 capitalize text-[33px] font-medium">
                100% soft cotton & comfortable feel
              </h4>
              <div className="mt-6">
                <Link
                  href="#shopNow"
                  className="btn w-[200px] h-[50px] flex-center gap-3 cursor-pointer bg-linear-to-tl from-[#6b0609] to-fuchsia-500 text-white rounded-full hover:bg-linear-to-bl hover:text-orange-400 transition-all duration-300"
                >
                  <HiOutlineShoppingBag className="text-[20px]" />
                  <p>Shop Now</p>
                </Link>
              </div>
              <div className="absolute right-0 -bottom-[100px]">
                <ScrollIndicator />
              </div>
            </div>

            <div className="relative flex items-end justify-end">
              <Image
                src="/images/t-shirt-white.png"
                alt="T-shirt"
                width={300}
                height={300}
                className="object-contain absolute left-[200px] bottom-0"
              />
              <Image
                src="/images/t-shirt-black.png"
                alt="T-shirt"
                width={400}
                height={400}
                className="object-contain "
              />
            </div>
          </section>
          <section className="pt-[160px]">
            <div className="">
              <h1 className="text-[#6b0609] text-[40px] font-bold text-center">
                ২ টি সলিড ব্র্যান্ড টি-শার্টের কম্বো পাচ্ছেন মাত্র
                <span className="block">১৪৯০ টাকায়</span>
              </h1>
              <h2 className="text-orange-600 text-center text-2xl font-bold mt-4 px-5">
                এই টি-শার্টগুলো লোকাল টি-শার্টের মতো পরনে হার্শ হবে না, বব্লিন
                উঠবে না, দীর্ঘদিন ব্যবহারের উপযোগী, পড়তে খুবই আরামদায়ক, একই সাথে
                দেখতেও বেশ সুন্দর।
              </h2>
            </div>

            <div className="mx-auto border-2 border-dashed flex-between mt-16 text-slate-900 rounded-lg font-bold border-slate-500 bg-slate-200/20">
              <div className="flex-col gap-2 border-r-2 border-dashed border-slate-500">
                {shirt_quality_left.map((quality, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border-dashed border-b-2 last:border-0 p-4 px-6 border-slate-500"
                  >
                    <div className="w-[30px] h-[30px] bg-blue-500 rounded-full flex-center">
                      <FaRegCheckCircle className="text-lg text-slate-100" />
                    </div>
                    <p>{quality.quality}</p>
                  </div>
                ))}
              </div>

              <div className="h-full flex items-center justify-center">
                <h1 className="vertical-text text-[23px] text-[#6b0609] font-bold">
                  আমাদের টিশার্টের কোয়ালিটি
                </h1>
              </div>

              <div className="flex-col gap-2 border-l-2 border-dashed border-slate-500">
                {shirt_quality_right.map((quality, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-center border-dashed border-b-2 last:border-0 p-4 px-6 border-slate-500"
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

          <section className="pt-[100px]">
            <h1 className="text-[#6b0609] text-[40px] font-bold text-center">
              কাস্টমার ফিডব্যাক
            </h1>
            <ReviewSlider />
          </section>

          <section className="pt-10">
            <div>
              <Image
                width={500}
                height={500}
                src={"/images/size-chart.png"}
                alt={`Size Chart`}
                className="rounded-2xl shadow-lg w-[700px] h-auto object-contain border-2 border-slate-200 mx-auto"
              />
            </div>
          </section>

          <section className="pt-10">
            <div className="bg-purple-300 py-9 rounded-2xl">
              <h1 className="text-[#6b0609] text-4xl font-bold text-center line-through">
                রেগুলার প্রাইস ২১০০ টাকা
              </h1>
              <h2 className="text-orange-600 text-center text-4xl font-bold mt-3">
                ঈদ স্পেশাল অফার প্রাইস মাত্র ১৪৯৯ টাকা
              </h2>
            </div>
          </section>

          <section
            className="bg-purple-200 rounded-2xl mt-14 py-10 px-12"
            id="shopNow"
          >
            <OrderForm />
          </section>

          <footer className="border-t border-slate-300 mt-[80px] pb-5">
            <div className="m-auto flex-center">
              <ul className="flex items-center gap-6 mt-10">
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
