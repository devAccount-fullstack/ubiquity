"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("@dreamdata/analytics-next").then(({ AnalyticsBrowser }) => {
      const analytics = AnalyticsBrowser.load({
        writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY!,
      });
      analytics.page();
    });
  }, [pathname, searchParams]);

  return null;
}