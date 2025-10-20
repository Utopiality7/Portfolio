"use client";

import Testimonial from "../Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialSkeleton from "../TestimonialSkeleton";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Testimonial />
          {/* <TestimonialSkeleton /> */}
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
          {/* <TestimonialSkeleton /> */}
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
          {/* <TestimonialSkeleton /> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
