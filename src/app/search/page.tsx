import { builder } from "@builder.io/sdk";
import SiteHeader from "@components/layout/SiteHeader";
import SearchComponent from "@components/sections/Search";
import { getModelData } from "@data/getModelData";
import type { Metadata } from "next";

// Init Builder
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: Promise<{
    page: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getModelData("/search", "page");

  return {
    title: content?.data?.title || "Search Results | Ubiquity",
    description: content?.data?.description || "Find resources with our search.",
    robots: {
      index: !content?.data?.noIndex,
      googleBot: {
        index: !content?.data?.noIndex,
      },
    },
  };
}

export default async function Page(props: PageProps) {
  const searchParams = await props?.searchParams;
  const searchTerm = searchParams?.s || "";

  return (
    <>
      <SiteHeader theme="light" />
      <div className="bg-mosswood text-white">
        <div className="mx-auto mb-22 w-full max-w-6xl px-7 pt-22">
          <h1 className="relative z-10 col-start-2 col-end-8 row-start-1 mt-auto pt-7 font-serif text-6xl text-balance capitalize md:col-end-5 md:my-20 md:pt-0 md:text-7xl lg:col-end-6 lg:text-8xl">
            Search Results
          </h1>
        </div>
      </div>
      <SearchComponent searchTerm={searchTerm} />
    </>
  );
}
