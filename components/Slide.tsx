"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/effect-fade";

export default function Slide() {
  return (
    <div className="bgSlider h-[32rem] overflow-hidden rounded-lg relative before:content-[''] before:absolute before:z-10 before:-left-8 before:-right-8 before:-bottom-[6.72rem] w-auto before:h-40 before:bg-gray-900 before:rounded-tl-[100%] before:rounded-tr-[100%]">
      <Swiper
        // loop={true}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <Image
              src="/images/b-1.jpg"
              alt="tour"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/b-2.jpg"
              alt="tour"
              fill
              style={{ objectFit: "cover" }}
            />
            2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/b-3.jpg"
              alt="tour"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
