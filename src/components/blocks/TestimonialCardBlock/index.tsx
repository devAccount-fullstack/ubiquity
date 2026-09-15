import Block from "@components/common/Block";
import { TestimonialCardBlockProps } from "./types";
import Card from "@components/common/Cards/Card";
import ReferenceLink from "@components/common/ReferenceLink";
import RichText from "@components/common/RichText";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function TestimonialCardBlock({
  attributes,
  text,
  link,
  name,
  jobTitle,
  logo,
  image,
}: TestimonialCardBlockProps) {
  return (
    <Block name="testimonial-card-block" attributes={attributes}>
      <Card
        className={twMerge(
          "not-prose",
          image ? "gap-6 md:flex-row" : "max-w-100",
        )}
      >
        {image && (
          <div className="relative aspect-square shrink-0 md:-my-8 md:-ml-8 md:w-7/12 lg:w-5/12">
            <Image
              src={`${image}`}
              alt={`${name} Image`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl md:rounded-none"
            />
          </div>
        )}
        <div className="flex flex-col gap-5">
        <RichText content={text} />
          {link ? (
            <ReferenceLink reference={link}>
              <p className="font-semibold">{name}</p>
                <p className="text-dune !mt-0">{jobTitle}</p>
            </ReferenceLink>
          ) : (
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-dune !mt-0">{jobTitle}</p>
            </div>
          )}
          {logo && (
            <Image
              src={`${logo}`}
              alt={`${name} Logo`}
              width={200}
              height={40}
              className="mt-auto mb-0"
            />
          )}
        </div>
      </Card>
    </Block>
  );
}

export default TestimonialCardBlock;
