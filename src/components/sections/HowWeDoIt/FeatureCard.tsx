import Image from "next/image";

import { HowWeDoItCardProps } from "./types";
import Icon from "@/assets/img/check-circle.svg?url";
import Card from "@components/common/Cards/Card";

const FeatureCard = ({ heading, text }: HowWeDoItCardProps) => {
  return (
    <Card className="bg-linen gap-0 p-7">
      <Image
        src={Icon}
        alt="Checkmark"
        width={24}
        height={24}
        className="mb-2"
      />
      <h3 className="mb-1.5 text-base font-bold text-neutral-900 leading-6">{heading}</h3>
      <p className="text-opacity-90 text-base text-neutral-800 leading-6">{text}</p>
    </Card>
  );
};

export default FeatureCard;
