import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@components/builder";
import SiteHeader from "@components/layout/SiteHeader";
import type { Metadata } from "next";
import { shapeOldResource } from "@utils/legacy/shapeOldResource";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { fetchAll } from "@data/fetchAll";

import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE } from "app/page";

// Init Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const posts = await fetchAll("resource-detail");

  const filteredPosts = posts
    .filter((post) => post.data && post.data.url)
    .map((post) => {
      const segments = post.data!.url.replace(/^\/|\/$/g, "").split("/");
      return { page: segments[0] === "" ? [] : segments };
    });

  return filteredPosts;
}
export const generateMetadata = async (props: PageProps): Promise<Metadata> => {
  const builderModelName = "resource-detail";
  const { params } = props;
  const slug = "/resources/" + ((await params)?.page?.join("/") || "");

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: slug,
      },
    })
    .toPromise();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ubiquity.com";
  const canonicalUrl = content?.data?.canonicalUrl || `${siteUrl}${slug}`;

  return {
    title: content?.data?.title,
    description: content?.data?.description || DEFAULT_DESCRIPTION,
    robots: {
      index: !content?.data?.noIndex,
      googleBot: {
        index: !content?.data?.noIndex,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: content?.data?.title,
      description: content?.data?.description || DEFAULT_DESCRIPTION,
      images: [{ url: content?.data?.image || DEFAULT_IMAGE }],
    },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  };
};

export default async function Page(props: PageProps) {
  const builderModelName = "resource-detail";

  const slugPath = (await props.params)?.page?.join("/") || "";
  const fullPath = "/resources/" + slugPath;

  // Await and assign searchParams from props
  const searchParams = await props?.searchParams;

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: fullPath,
      },
    })
    .toPromise();

  // Detect Builder preview/editor
  const referer = (await headers()).get("referer") || "";
  const isBuilderEditor =
    referer.includes("builder.io") ||
    Object.keys(searchParams).some((key) => key.startsWith("builder."));

  // Handle old content structure
  if (content?.data?.blocks?.[0]?.component?.name === "Guide Hero") {
    const reshaped = shapeOldResource(content);
    if (Array.isArray(content.data.blocks) && content.data.blocks.length > 2) {
      content.data.blocks = [
        content.data.blocks[0],
        reshaped,
        content.data.blocks[content.data.blocks.length - 1],
      ];
    }
  }

  const isPublished =
    content?.published === "published" || content?.published === true;

  // Only show 404 if content is missing and not in preview/editor
  if (!content && !isBuilderEditor) {
    notFound();
  }

  // If draft content and not previewing, show 404
  if (!isPublished && !isBuilderEditor) {
    notFound();
  }

  return (
    <>
      <SiteHeader pagePath={fullPath} theme="light" model="resource-detail" />
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
