"use server";

import "server-only";
import { TapTalentApiRes } from "@/global.types";

const API_URL = process.env.TAPTALENT_API_URL!;
const API_KEY = process.env.TAPTALENT_API_KEY!;

const fetchHeaders = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const getWorkDay = async ({
  pageNumber = 1,
  perPage = 100,
  jobTitle = "",
  country = "",
}: {
  pageNumber?: number;
  perPage?: number;
  jobTitle?: string;
  country?: string;
} = {}): Promise<{ jobs: TapTalentApiRes[]; total: number }> => {
  try {
    let url = `${API_URL}?status=ACTIVE&publishType=EXTERNAL&pageNumber=${pageNumber}&perPage=${perPage}`;
    if (jobTitle) url += `&jobTitle=${encodeURIComponent(jobTitle)}`;
    if (country) url += `&country=${encodeURIComponent(country)}`;

    const res = await fetch(url, {
      method: "GET",
      headers: fetchHeaders,
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Network error fetching jobs");

    const json = await res.json();
    const jobs: TapTalentApiRes[] = Array.isArray(json.jobs) ? json.jobs : [];
    const total: number = json.totalJobs || 0;

    return { jobs, total };
  } catch (error) {
    console.error(error);
    return { jobs: [], total: 0 };
  }
};