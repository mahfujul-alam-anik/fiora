"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviews } from "@/constant/reviews";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          640: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Small Laptops
          1280: { slidesPerView: 3, spaceBetween: 25 }, // Large Screens
        }}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="review-swiper"
      >
        {reviews.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="p-3">
              <Image
                width={500}
                height={500}
                src={img.src}
                alt={`Review ${index + 1}`}
                className="rounded-2xl shadow-lg w-full h-[500px] object-contain border-2 border-slate-200"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
