import Section from "@components/common/Section";
import { TeamProps } from "./types";
import Image from "next/image";
import LinkedInIcon from "@/assets/img/linkedin.svg";
import RichText from "@components/common/RichText";
import { twMerge } from "tailwind-merge";
import Button from "@components/common/Button";
import { striptags } from "@utils/striptags";
import { SvgAnimateOnScroll } from "@components/common/Svg";
import { SvgRight } from "@components/common/Svg/svgs";

function Team({
  heading,
  text,
  buttonText,
  buttonUrl,
  teamMembers = [],
  columnCount = 3,
  attributes,
  theme,
  showLineSvg,
}: TeamProps) {
  const cleanHeading = striptags(heading);
  const cleanText = striptags(text);

  return (
    <Section
      name="team"
      attributes={attributes}
      theme={theme}
      className="relative overflow-x-hidden"
    >
      {showLineSvg && (
        <SvgAnimateOnScroll className="absolute -right-[15%] bottom-[30%] z-0 hidden h-full w-[758px] rotate-45 lg:block">
          <SvgRight />
        </SvgAnimateOnScroll>
      )}
      <div
        className={twMerge(
          "mb-6 flex flex-col flex-wrap justify-between gap-x-6 md:mb-10 md:flex-row lg:mb-20",
        )}
      >
        {cleanHeading && (
          <div className="flex-1">
            <h2
              className={twMerge("font-serif text-5xl md:text-6xl lg:text-7xl")}
            >
              <RichText content={heading} noWrapper />
            </h2>
            {cleanText && (
              <RichText
                content={text}
                className={twMerge("mt-4 md:mt-6 lg:mt-8")}
              />
            )}
          </div>
        )}
        {cleanText || buttonUrl ? (
          <div
            className={twMerge(
              "mt-4 md:mt-auto md:pl-4",
              "basis-5/12 md:text-right",
            )}
          >
            {buttonUrl && buttonText && (
              <Button
                href={buttonUrl}
                variant="primary"
                asLink
                className={twMerge(text && "mt-4 md:mt-6 lg:mt-8")}
              >
                {buttonText}
              </Button>
            )}
          </div>
        ) : null}
      </div>
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-${columnCount}`}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            {member.image && (
              <Image
                src={member.image}
                alt={member.name || "Team Member Image"}
                width={384}
                height={384}
                className="h-full w-full object-cover"
              />
            )}
            {member.linkedIn ? (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute inset-0 z-10 block flex w-full items-end justify-between gap-4 bg-linear-to-t from-[rgba(82,31,40,0.8)] to-transparent to-50% p-8 text-white grayscale transition-all duration-300 hover:grayscale-0"
              >
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  {member.role && <p>{member.role}</p>}
                </div>
                <LinkedInIcon className="group-hover:text-dune opacity-0 transition-all duration-300 group-hover:opacity-100 min-w-[24px] min-h-[24px]" />
              </a>
            ) : (
              <div className="absolute inset-0 z-10 block flex w-full items-end bg-linear-to-t from-[rgba(82,31,40,0.8)] to-transparent to-50% p-8 text-white grayscale">
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  {member.role && <p>{member.role}</p>}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Team;
