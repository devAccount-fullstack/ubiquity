import builder from "@builder.io/react";
import { getRelatedResources } from "@data/getRelatedResources";
import { usePathname } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

import { useEffect, useState } from "react";
import Card from "../Cards/Card";
import Link from "next/link";
import { BuilderContent } from "@builder.io/sdk";
import { updatedCategoryName } from "@utils/updatedCategoryName";

function RelatedResources({ layout = "side" }: { layout?: "side" | "bottom" }) {
  const builderModelName = "resource-detail";

  const pagePath = usePathname();

  const [content, setContent] = useState<BuilderContent[]>([]);

  useEffect(() => {
    async function fetchContent() {
      const result = await getRelatedResources(pagePath);

      if (!result) {
        return;
      }
      setContent(result);
    }

    fetchContent();
  }, [builderModelName, pagePath]);

  const containerClassName =
    layout === "bottom"
      ? "mt-0"
      : "sticky top-10 mt-10 lg:mt-0";

  const listClassName =
    layout === "bottom"
      ? "grid gap-6 md:grid-cols-3"
      : "grid gap-6";

  return (
    <div className={containerClassName}>
      {content.length > 0 && (
        <h2 className="mb-6 text-lg font-semibold md:text-2xl">
          Related Resources
        </h2>
      )}
      <ul className={listClassName}>
        {content.map((article) => {
          if (!article.data) return null;
          return (
            <li key={article.id}>
              <Link href={article.data.url}>
                <Card className="hover:bg-mist gap-2 transition-colors">
                  <div className="text-mosswood font-semibold">
                    {updatedCategoryName(article.data.category)}
                  </div>
                  <div className="text-lg font-semibold capitalize md:text-2xl md:text-xl">
                    {article.data.title}
                  </div>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RelatedResources;
