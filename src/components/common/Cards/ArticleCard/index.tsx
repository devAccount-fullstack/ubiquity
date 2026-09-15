import { Reference } from "@/global.types";
import Card from "../Card";
import RichText from "@components/common/RichText";
import Image from "next/image";
import ReferenceLink from "@components/common/ReferenceLink";
import { updatedCategoryName } from "@utils/updatedCategoryName";

function ArticleCard({
  title,
  eyebrow,
  image,
  link,
}: {
  title?: string;
  eyebrow?: string;
  image?: string;
  link: Reference;
}) {
  const article = {
    title: title ? title : link ? link?.value?.data?.title : "",
    image: image
      ? image
      : link && link?.value?.data?.image
        ? link?.value?.data?.image
        : "/placeholder.jpg",
    eyebrow: eyebrow
      ? eyebrow
      : link
        ? updatedCategoryName(link?.value?.data?.category)
        : "",
  };

  return (
    <Card
      className="hover:bg-mist transition-all duration-200"
      data-publised-date={link?.value?.data?.publishedDate}
    >
      <div className="-mx-8 -mt-8">
        {article.image && (
          <Image
            width={700}
            height={440}
            src={article.image}
            alt={`${article.title} Image`}
            className="aspect-47/30 h-auto w-full object-cover"
          />
        )}
      </div>
      {article.eyebrow && (
        <RichText content={article.eyebrow} className="mt-2" />
      )}
      <ReferenceLink reference={link}>
        <h3 className="text-lg font-semibold capitalize md:text-2xl">
          <RichText content={article.title} noWrapper />
        </h3>
      </ReferenceLink>
    </Card>
  );
}
export default ArticleCard;
