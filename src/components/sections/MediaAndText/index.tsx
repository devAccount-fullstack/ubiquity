import Section from "@components/common/Section";
import ContentBlock from "@components/common/ContentBlock";

import { MediaAndTextProps } from "./types";
import Image from "next/image";
import { striptags } from "@utils/striptags";

function MediaAndText({
  heading,
  text,
  buttonText,
  buttonUrl,
  media,
  theme,
  attributes,
}: MediaAndTextProps) {
  const mediaType = media?.includes("/image/") ? "image" : "video";

  return (
    <Section name="media-and-text" attributes={attributes} theme={theme}>
      <div className="grid grid-cols-6 gap-6 md:grid-cols-12">
        <div className="col-span-6 flex flex-col justify-center md:col-span-5">
          <ContentBlock
            heading={heading}
            text={text}
            buttonText={buttonText}
            buttonUrl={buttonUrl}
          />
        </div>
        {media && (
          <div className="col-span-6 overflow-hidden rounded-2xl md:col-start-7">
            {mediaType === "image" ? (
              <Image
                src={media}
                alt={striptags(heading) || "Media Image"}
                width={1296}
                height={800}
                className="h-auto w-full object-cover"
              />
            ) : (
              <video
                src={media}
                controls
                className="h-auto w-full object-cover"
              />
            )}
          </div>
        )}
      </div>
    </Section>
  );
}

export default MediaAndText;
