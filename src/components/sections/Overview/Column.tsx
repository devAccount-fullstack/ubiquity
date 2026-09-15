import Image from "next/image";

import type { OverviewColumnProps } from "./types";

import icon from "@/assets/img/check-circle.svg?url";
import RichText from "@components/common/RichText";

function OverviewColumn({ heading, text, iconOpacity }: OverviewColumnProps) {
  return (
    <div>
      <Image width={25} height={25} src={icon} alt="Check circle" style={{opacity: iconOpacity}}/>
      {heading && <h3 className="mt-3 md:mt-5 text-xl md:text-2xl font-semibold">{heading}</h3>}
      {text && <RichText content={text} className="mt-3" />}
    </div>
  );
}

export default OverviewColumn;
