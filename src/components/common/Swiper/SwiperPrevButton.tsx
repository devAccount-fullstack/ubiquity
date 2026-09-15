import SliderArrow from "@/assets/img/slider-arrow-cc.svg";
import { twMerge } from "tailwind-merge";

/*
Requires navigation module on Swiper and config:

modules={[Navigation, ...]}
navigation={{
  nextEl: ".swiper-next-button",
  prevEl: ".swiper-prev-button",
}}
*/

export default function SwiperPrevButton(
  params: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { className, ...rest } = params;
  return (
    <button
      className={twMerge(
        "swiper-prev-button text-dune cursor-pointer disabled:cursor-default disabled:opacity-30",
        className,
      )}
      {...rest}
    >
      <span className="sr-only">Previous</span>
      <SliderArrow width={34} height={34} />
    </button>
  );
}
