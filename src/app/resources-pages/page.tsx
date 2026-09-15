import SiteHeader from "@components/layout/SiteHeader";
import { fetchAllNoCache } from "@data/fetchAllNoCache";

export const metadata = {
  title: "Resources List | Ubiquity",
};

export default async function Page() {
  const resources = await fetchAllNoCache("resource-detail");

  return (
    <>
      <SiteHeader theme="light" />
      <div className="bg-mosswood text-white">
        <div className="mx-auto mb-22 w-full max-w-6xl px-7 pt-22">
          <h1 className="relative z-10 col-start-2 col-end-8 row-start-1 mt-auto pt-7 font-serif text-6xl text-balance capitalize md:col-end-5 md:my-20 md:pt-0 md:text-7xl lg:col-end-6 lg:text-8xl">
            Resources List
          </h1>
        </div>
      </div>
      <section className="mx-auto w-full max-w-6xl px-7 py-22">
        <ul className="marker:text-blaze sticky top-10 list-inside list-disc space-y-2">
          {resources.map(({ id, data }) => (
            <li key={id}>
              <a
                href={data?.url ?? "#"}
                className="text-black hover:underline"
              >
                {data?.title ?? "Untitled Resource"}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
