"use client";

import { BuilderContent } from "@builder.io/sdk";
import Button from "@components/common/Button";
import ArticleCard from "@components/common/Cards/ArticleCard";
import Grid from "@components/common/Grid";
import { fetchAll } from "@data/fetchAll";
import { searchFilter } from "@utils/searchFilter";
import { useEffect, useState } from "react";

function SearchComponent({ searchTerm }: { searchTerm: string | string[] }) {
  const [allData, setAllData] = useState<BuilderContent[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const pages = await fetchAll("page", true);
      const resourceDetails = await fetchAll("resource-detail", true);

      const posts = [...pages, ...resourceDetails];

      const filteredData = searchFilter(
        posts,
        Array.isArray(searchTerm) ? searchTerm.join(", ") : searchTerm,
      );

      setAllData(filteredData);
      setHasMore(filteredData.length > 6);
      setLoading(false);
    }
    fetchData();
  }, [searchTerm]);

  const handleMore = async () => {
    setPageCount((prevPageCount) => prevPageCount + 1);

    if (allData.length <= (pageCount + 1) * 6) {
      setHasMore(false);
      return;
    }
  };

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-7 py-22 text-center">
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
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-7 py-22">
      {allData.length > 0 && (
        <Grid className="mt-6" desktop={3}>
          {allData.slice(0, pageCount * 6).map((article) => {
            return (
              <ArticleCard
                key={article.id}
                link={{ value: article, model: "resource-detail" }}
              />
            );
          })}
        </Grid>
      )}
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
      {!loading && allData.length === 0 && (
        <div className="text-center">
          <p className="text-lg">No articles found for this search.</p>
        </div>
      )}
    </div>
  );
}
export default SearchComponent;
