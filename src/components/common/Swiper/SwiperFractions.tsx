import { twMerge } from "tailwind-merge";

/*
Requires pagination module on Swiper and config:

modules={[Pagination, ...]}
pagination={{
    el: ".swiper-pagination",
    type: "fraction",
}}
*/

export default function SwiperFractions(
  params: React.HTMLAttributes<HTMLSpanElement>,
) {
  const { className, ...rest } = params;
  return (
    <span className={twMerge("swiper-pagination", className)} {...rest}></span>
  );
}
