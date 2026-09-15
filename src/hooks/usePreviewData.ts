import { useEffect, useState } from "react";
import { getBuilderDataModel } from "@data/getBuilderDataModel";
import { Reference } from "@/global.types";

export function usePreviewData(isPreviewing: boolean, link: Reference) {
  const [previewData, setPreviewData] = useState<null | {
    [key: string]: unknown;
  }>(null);

  useEffect(() => {
    if (isPreviewing && link) {
      const model = link.model;
      const id = link.id;
      (async () => {
        const previewLink = await getBuilderDataModel(model, { query: { id } });
        setPreviewData(previewLink);
      })();
    }
  }, [isPreviewing, link]);

  return previewData;
}
export default usePreviewData;
