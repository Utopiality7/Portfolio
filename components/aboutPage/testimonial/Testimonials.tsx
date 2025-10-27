"use client";

import Testimonial from "../../Testimonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialSkeleton from "../../TestimonialSkeleton";
import profileOperations from "@/lib/graphql/profile";
import { useQuery } from "@apollo/client/react";
import { TestimonialData } from "@/types";

interface TestimonialQuery {
  testimonials: TestimonialData[];
}

export default function Testimonials() {
  const { data, loading, error } = useQuery<TestimonialQuery>(
    profileOperations.Queries.getTestimonials
  );

  if (error) return <TestimonialSkeleton />;

  if (loading || data === undefined) return <TestimonialSkeleton />;

  return (
    <div className="testimonials">
      <Swiper pagination={true} modules={[Pagination]}>
        {data.testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <Testimonial testimonial={t} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Testimonial />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
