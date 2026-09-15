import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@components/builder";
import SiteHeader from "@components/layout/SiteHeader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { fetchAll } from "@data/fetchAll";

import { PageMetaDataProps } from "global.types";
import { getModelData } from "@data/getModelData";

import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE } from 'app/page';

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const posts = await fetchAll("page");

  const filteredPosts = posts
    .filter((post) => post.data && post.data.url)
    .map((post) => {
      const segments = post.data!.url.replace(/^\/|\/$/g, "").split("/");
      return { page: segments[0] === "" ? [] : segments };
    })
    .filter((param) => param.page.length > 0);

  return filteredPosts;
}

export async function generateMetadata(props: { params: Promise<{ page: string[] }>; searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const params = await props.params;
  const slug = '/' + (params?.page?.join('/') || '');

  const content = (await getModelData(slug, "page")) as PageMetaDataProps;

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
    openGraph: {
      url: canonicalUrl,
      title: content?.data?.title,
      description: content?.data?.description || DEFAULT_DESCRIPTION,
      images: [{ url: content?.data?.image || DEFAULT_IMAGE }],
    },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const builderModelName = "page";

  const { page } = await props.params;

  // Get the page path from the URL parameters
  const pagePath = page?.join("/") || "";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + pagePath,
      },
    })
    // Convert the result to a promise
    .toPromise();

  // Detect if the request is coming from Builder preview/editor
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const isBuilderEditor =
    referer.includes("builder.io") ||
    Object.keys(searchParams).some((key) => key.startsWith("builder."));

  const isPublished =
    content?.published === "published" || content?.published === true;

  if (!content && !isBuilderEditor) {
    notFound();
  }

  if (!isPublished && !isBuilderEditor) {
    notFound();
  }

  return (
    <>
      <SiteHeader pagePath={pagePath} />
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
