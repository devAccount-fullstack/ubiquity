import Image from "next/image";
import ReferenceLink from "../../ReferenceLink";
import RichText from "../../RichText";
import { TestimonialCardProps } from "./types";
import Card from "../Card";

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { link, name, jobTitle, text, logo } = testimonial;
  return (
    <Card
      className={link ? "hover:bg-mist transition-colors" : ""}
    >
      <RichText content={text} />
      {link ? (
        <ReferenceLink reference={link}>
          <p className="font-semibold">{name}</p>
          <p className="text-dune">{jobTitle}</p>
        </ReferenceLink>
      ) : (
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-dune">{jobTitle}</p>
        </div>
      )}
      {logo && (
        <Image
          src={logo}
          alt={`${name} Logo`}
          width={200}
          height={40}
          className="mt-auto max-w-[150px] md:max-w-[170px]"
        />
      )}
    </Card>
  );
}

export default TestimonialCard;
