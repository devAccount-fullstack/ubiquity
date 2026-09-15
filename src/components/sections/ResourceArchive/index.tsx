"use client";

import Section from "@components/common/Section";
import { ResourceArchiveProps } from "./types";
import RichText from "@components/common/RichText";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BuilderContent } from "@builder.io/sdk";
import Grid from "@components/common/Grid";
import ArticleCard from "@components/common/Cards/ArticleCard";
import { getCategories } from "@data/getCategories";
import Select from "@components/forms/Select";
import { Controller, useForm } from "react-hook-form";
import Icon from "@components/common/Icon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "@components/common/Button";
import { getAllResources } from "@data/getAllResources";
import { searchFilter } from "@utils/searchFilter";
import Search from "@components/forms/Search";
import { twMerge } from "tailwind-merge";

function mergeCategories(category: string) {
  const synonyms = [
    ["Case Studies", "Customer Success Stories"],
    ["Customer Experience", "Customer Satisfaction"],
    ["Delivery & Logistics", "Logistics & Shipping"],
    ["E-commerce", "Retail & E-commerce", "E-Commerce", "Retail & E-Commerce"],
    ["Healthcare", "Healthcare & Wellness"],
    ["Hypergrowth Support"],
    ["Insurance", "Finance & Insurance", "Fintech"],
    ["Trends & News", "News", "Trends"],
    ["Non-Voice, Back Office"],
    ["People and Culture"],
    ["Reports & Guides", "Whitepapers", "CX Guides", "Education"],
    ["Risk & Response", "Banking Operations"],
    ["ROI Calculator"],
    ["Security and Compliance", "Security & Compliance"],
    ["Specialized Services", "Business Transformation", "Recruiting"],
    ["Technology Solutions", "Technology & Software"],
    ["Travel & Hospitality"],
    ["Uncategorized"],
    ["Utilities", "Energy & Utilities"],
  ];

  const lowerCaseSynonyms = synonyms.map((syn) => {
    return [...syn, ...new Set(syn.map((s) => s.toLowerCase()))];
  });

  const categorySynonyms = lowerCaseSynonyms.find((syn) =>
    syn.includes(category),
  );

  return categorySynonyms;
}

declare global {
  interface Window {
    resourceSearchDebounce?: ReturnType<typeof setTimeout>;
  }
}

function ResourceForm({
  categories,
  filters,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}: {
  categories: BuilderContent[];
  filters?: {
    industry?: boolean;
    solutions?: boolean;
    resourceType?: boolean;
  };
  setSelectedCategory: (category: string | string[] | undefined) => void;
  searchTerm: string | undefined;
  setSearchTerm: (term: string | undefined) => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { control, watch, reset, resetField, getValues } = useForm({
    defaultValues: {
      industry: searchParams.get("industry") || "",
      solutions: searchParams.get("solutions") || "",
      resourceType: searchParams.get("resource-type") || "",
    },
  });

  useEffect(() => {
    const industry = searchParams.get("industry");
    const solutions = searchParams.get("solutions");
    const resourceType = searchParams.get("resource-type");

    const values = getValues();

    if (values.industry !== industry) {
      resetField("industry", {
        keepDirty: false,
        keepTouched: false,
        defaultValue: industry || "",
      });
    }

    if (values.solutions !== solutions) {
      resetField("solutions", {
        keepDirty: false,
        keepTouched: false,
        defaultValue: solutions || "",
      });
    }

    if (values.resourceType !== resourceType) {
      resetField("resourceType", {
        keepDirty: false,
        keepTouched: false,
        defaultValue: resourceType || "",
      });
    }
  }, [searchParams, getValues, resetField]);

  const watchIndustry = watch("industry");
  const watchSolutions = watch("solutions");
  const watchResourceType = watch("resourceType");

  function handleCategoryChange(value: string, type: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (type === "industry") {
      params.set("industry", value);
    } else {
      params.delete("industry");
    }

    if (type === "solutions") {
      params.set("solutions", value);
    } else {
      params.delete("solutions");
    }

    if (type === "resourceType") {
      params.set("resource-type", value);
    } else {
      params.delete("resource-type");
    }

    router.push(`?${params.toString()}`, { scroll: false });

    setSelectedCategory(mergeCategories(value));
  }

  function handleClearFilters() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("industry");
    params.delete("solutions");
    params.delete("resource-type");
    router.push(`?${params.toString()}`, { scroll: false });
    setSelectedCategory(undefined);
    reset();
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <form className="flex flex-wrap gap-4">
        {(watchIndustry || watchSolutions || watchResourceType) && (
          <button onClick={handleClearFilters}>
            <Icon
              name="clear"
              className="fill-blaze size-6 cursor-pointer"
              icon="clear"
            />
          </button>
        )}
        <Controller
          name="industry"
          control={control}
          render={({ field }) => {
            return (
              <>
                {filters?.industry && (
                  <Select
                    {...field}
                    label="Filter by Industry"
                    options={categories
                      .filter((cat) => cat.data?.subCategory === "Industry")
                      .map((cat) => ({
                        label: cat.data?.title || "",
                        value: cat.name?.toLowerCase() || "",
                      }))}
                    placeholder="Industry"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      const value = event.target.value;
                      field.onChange(value);
                      handleCategoryChange(value, "industry");
                      resetField("solutions", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                      resetField("resourceType", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                    }}
                  />
                )}
              </>
            );
          }}
        />
        <Controller
          name="solutions"
          control={control}
          render={({ field }) => {
            return (
              <>
                {filters?.solutions && (
                  <Select
                    {...field}
                    label="Filter by Solutions"
                    options={categories
                      .filter((cat) => cat.data?.subCategory === "Solutions")
                      .map((cat) => ({
                        label: cat.data?.title || "",
                        value: cat.name?.toLowerCase() || "",
                      }))}
                    placeholder="Solutions"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      const value = event.target.value;
                      field.onChange(value);
                      handleCategoryChange(value, "solutions");
                      resetField("industry", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                      resetField("resourceType", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                    }}
                  />
                )}
              </>
            );
          }}
        />
        <Controller
          name="resourceType"
          control={control}
          render={({ field }) => {
            return (
              <>
                {filters?.resourceType && (
                  <Select
                    {...field}
                    label="Filter by Resource Type"
                    options={categories
                      .filter(
                        (cat) => cat.data?.subCategory === "Resource Type",
                      )
                      .map((cat) => ({
                        label: cat.data?.title || "",
                        value: cat.name?.toLowerCase() || "",
                      }))}
                    placeholder="Resource Type"
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                      const value = event.target.value;
                      field.onChange(value);
                      handleCategoryChange(value, "resourceType");
                      resetField("industry", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                      resetField("solutions", {
                        keepDirty: false,
                        keepTouched: false,
                        defaultValue: "",
                      });
                    }}
                  />
                )}
              </>
            );
          }}
        />
      </form>
      <Search
        name="resource-search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="py-3 pl-4"
      />
    </div>
  );
}

function ResourceGridContent({
  selectedCategory,
  searchTerm,
}: {
  selectedCategory: string | string[] | undefined;
  searchTerm: string | undefined;
}) {
  const [articles, setArticles] = useState<BuilderContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [allSearchData, setAllSearchData] = useState<BuilderContent[]>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    async function fetchSearchResources() {
      setLoading(true);
      const resources = await getAllResources(undefined, true);
      setAllSearchData(resources);
    }

    if (
      searchTerm !== undefined &&
      searchTerm.trim() !== "" &&
      allSearchData.length === 0
    ) {
      fetchSearchResources();
    }
  }, [searchTerm, allSearchData]);

  useEffect(() => {
    setLoading(true);
    setPageCount(1);

    if (searchTerm && searchTerm.trim() !== "" && allSearchData.length > 0) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        const filtered = searchFilter(allSearchData, searchTerm || "");
        setArticles(filtered);
        setHasMore(filtered.length > 6);
        setLoading(false);
      }, 300);
      return () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
      };
    } else {
      let isMounted = true;
      getAllResources(selectedCategory).then((result) => {
        if (isMounted) {
          setArticles(result);
          setHasMore(result.length > 6);
          setLoading(false);
        }
      });
      return () => {
        isMounted = false;
      };
    }
  }, [selectedCategory, searchTerm, allSearchData]);

  const handleMore = async () => {
    setPageCount((prevPageCount) => prevPageCount + 1);
    if (articles.length <= (pageCount + 1) * 6) {
      setHasMore(false);
      return;
    }
  };

  if (loading) {
    return (
      <div className="mt-12">
        <span className="relative mx-auto flex size-2">
          <span className="bg-blaze absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-blaze relative inline-flex size-2 rounded-full"></span>
        </span>
        <span className="relative mx-auto mt-2 flex size-2">
          <span className="bg-blaze absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-blaze relative inline-flex size-2 rounded-full"></span>
        </span>
      </div>
    );
  }

  return (
    <>
      <Grid className="mt-6" desktop={3}>
        {articles.slice(0, pageCount * 6).map((article) => {
          return (
            <ArticleCard
              key={article.id}
              link={{ value: article, model: "resource-detail" }}
            />
          );
        })}
      </Grid>
      {hasMore && !loading && (
        <div className="relative text-center">
          <Button
            variant="secondary"
            className="mt-12"
            onClick={handleMore}
            disabled={loading}
          >
            View More
          </Button>
        </div>
      )}
      {!loading && articles.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg">No articles found for this category.</p>
        </div>
      )}
    </>
  );
}

function ResourceArchive({
  heading,
  attributes,
  theme,
  filters,
}: ResourceArchiveProps) {
  const [categories, setCategories] = useState<BuilderContent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    string | string[] | undefined
  >();
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();

      const filteredCategories =
        categoriesData && categoriesData.filter((cat) => cat.data?.subCategory);
      setCategories(filteredCategories || []);
    }
    fetchCategories();
    setLoaded(true);
  }, []);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const industry = searchParams.get("industry");
    const solutions = searchParams.get("solutions");
    const resourceType = searchParams.get("resource-type");
    const selected =
      industry && industry !== ""
        ? industry
        : solutions && solutions !== ""
          ? solutions
          : resourceType && resourceType !== ""
            ? resourceType
            : undefined;

    if (selected) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedCategory(selected ? mergeCategories(selected) : undefined);
  }, [pathname, searchParams]);

  return (
    <Section
      name="resource-archive"
      attributes={attributes}
      theme={theme}
      id="resource-archive-grid"
      sectionRef={ref}
    >
      <div className={twMerge("flex flex-wrap items-center justify-between gap-6", loaded ? "pointer-events-auto" : "pointer-events-none")}>
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl">
          <RichText content={heading} noWrapper />
        </h2>
        <ResourceForm
          categories={categories}
          filters={filters}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {loaded ? (
        <ResourceGridContent
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />
      ) : (
        <div className="mt-12">
          <span className="relative mx-auto flex size-2">
            <span className="bg-blaze absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-blaze relative inline-flex size-2 rounded-full"></span>
          </span>
          <span className="relative mx-auto mt-2 flex size-2">
            <span className="bg-blaze absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-blaze relative inline-flex size-2 rounded-full"></span>
          </span>
        </div>
      )}
    </Section>
  );
}

export default ResourceArchive;
