import Image from "next/image";

import type { TestimonialProps } from "./types";
import RichText from "@components/common/RichText";
import Button from "@components/common/Button";

function Testimonial({
  quote,
  text,
  logo,
  avatar,
  name,
  title,
  linkUrl,
  linkText,
}: TestimonialProps) {
  return (
    <div className="bg-tundra grid grid-cols-6 rounded-3xl md:grid-cols-10">
      <div className="col-span-6 rounded-t-3xl p-8 md:pb-0 text-white md:rounded-t-none md:rounded-l-2xl md:p-12 md:pb-6 lg:p-20">
        {quote && (
            <div className="font-serif text-3xl md:text-5xl">
              &lsquo;{quote}&rsquo;
            </div>
        )}
        {text && <RichText content={text} className="mt-4 md:mt-6 lg:mt-8" />}
        {linkUrl && linkText && (
            <Button
              href={linkUrl}
            variant="link"
            withArrow
            asLink
              className="mt-6 text-white hover:opacity-80"
            >
              {linkText}
            </Button>
        )}
      </div>

      <div className="grid bg-mist col-span-6 max-w-full justify-items-center rounded-b-2xl py-5 px-10 md:p-10 text-center md:col-span-4 md:rounded-l-none md:rounded-r-3xl lg:col-span-4">
        <div className="flex flex-col items-center justify-center">
          {logo && (
            <Image
              width={150}
              height={100}
              src={logo || "/default-image.jpg"}
              alt={logo || "Company logo"}
              className="pb-3 md:pb-10 max-w-[150px] md:max-w-[200px] w-full h-auto"
            />
          )}
          {avatar && (
          <Image
            width={100}
            height={100}
            src={avatar || "/default-image.jpg"}
            alt={name || "Avatar image"}
            className="mb-3 md:mb-5 rounded-full w-[60px] md:w-[100px]"
          />
          )}
          {name && <div className="font-semibold md:text-xl">{name}</div>}
          {title && <div className="md:text-l">{title}</div>}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
