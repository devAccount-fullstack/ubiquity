import { getWorkDay } from "@/data/getWorkDay";
import { useEffect, useMemo, useState } from "react";
import { TapTalentApiRes } from "@/global.types";
import { twMerge } from "tailwind-merge";
import Section from "@components/common/Section";
import Button from "@components/common/Button";
import Select from "@components/forms/Select";
import Search from "@components/forms/Search";
import { JobBoardProps } from "./types";
import Card from "@components/common/Cards/Card";
import Grid from "@components/common/Grid";
import RichText from "@components/common/RichText";
import { Controller, useForm } from "react-hook-form";
import Icon from "@components/common/Icon";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";

const APPLY_URL = process.env.NEXT_PUBLIC_TAPTALENT_APPLY_URL!;

const PER_DISPLAY = 9;
const PER_API = 100;

function getPaginationItems(currentPage: number, totalPages: number) {
  if (totalPages < 6) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pageWindowStart = Math.floor((currentPage - 1) / 2) * 2 + 1;

  if (pageWindowStart >= totalPages - 3) {
    return [
      "ellipsis-start",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    pageWindowStart,
    pageWindowStart + 1,
    "ellipsis-end",
    totalPages - 1,
    totalPages,
  ];
}

function JobCard({ job }: { job: TapTalentApiRes }) {
  const { id, title, description, country, city, jobType, createdAt, workMode } = job;

  const [openDialog, setDialogOpen] = useState(false);
  const [openTooltip, setTooltipOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`;

    await navigator.clipboard.writeText(url);
    setLinkCopied(true);
    setTooltipOpen(true);

    setTimeout(() => {
      setLinkCopied(false);
      setTooltipOpen(false);
    }, 2000);
  };

  return (
    <Card tag="li" className="job-card hover:bg-mist transition-bg-none">
      <div className="text-mosswood font-bold">
        {city && city}
        {country && ` - ${country}`}
      </div>

      {title && (
        <h3 className="text-obsidian m-0 p-0 text-xl font-semibold">
          {title}
        </h3>
      )}
      {description && (
        <div className="relative group z-1">
          <div
            className="m-0 p-0 text-sm line-clamp-3"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Button
            asLink
            href=""
            variant="link"
            onClick={() => {
              setDialogOpen(true);
            }}
            className="absolute text-sm -bottom-[1px] right-0 leading-normal pl-4 bg-linear-to-l from-white to-[#ffffff99] from-90% to-100% group-hover:from-mist group-hover:to-[#E0ECDF99] transition-bg-none"
          >
            View More
          </Button>

          <Dialog.Root open={openDialog} onOpenChange={setDialogOpen}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60" />
              <Dialog.Content className="fixed flex flex-col top-1/2 left-1/2 z-50 w-full max-h-[90vh] max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-linen p-8 focus:outline-none md:p-12 lg:max-w-9/12 space-y-6">
                <Button
                  variant="link"
                  onClick={() => setDialogOpen(false)}
                  className="absolute top-5 right-5"
                >
                  <Icon
                    name="clear"
                    className="fill-claret size-5 cursor-pointer"
                    icon="clear"
                  />
                </Button>
                <Dialog.Title>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-2xl">
                        {title}
                      </div>
                      <div className="text-tundra flex flex-wrap items-center gap-x-3">
                        <span className="font-semibold">{jobType === 'Full_Time' ? 'Full Time' : jobType}</span>
                        <span>|</span>
                        <span className="capitalize font-semibold">{workMode && workMode.toLowerCase()}</span>
                        <span>|</span>
                        <span className="font-semibold">{city} - {country}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        asLink
                        variant="secondary"
                        className="hidden md:flex"
                        href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
                      >
                        Refer a Friend
                      </Button>
                      <Button
                        asLink
                        className="hidden md:flex"
                        href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Dialog.Title>
                <div className="overflow-auto md:pr-7" dangerouslySetInnerHTML={{ __html: description }}/>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asLink
                    variant="secondary"
                    className="block md:hidden text-center"
                    href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
                  >
                    Refer a Friend
                  </Button>
                  <Button
                    asLink
                    className="block md:hidden text-center"
                    href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
                  >
                    Apply Now
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
            </Dialog.Root>

        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {jobType && (
          <p className="text-sm border border-dune rounded-4xl group-hover:border-white group-hover:text-tundra px-3 py-1 font-semibold text-obsidian transition-all group-hover:bg-white capitalize">
            {jobType  && jobType.toLowerCase().replace("_", " ")}
          </p>
        )}
        {workMode && (
          <p
            className="text-sm border border-dune rounded-4xl group-hover:border-white group-hover:text-tundra px-3 py-1 font-semibold text-obsidian transition-all group-hover:bg-white capitalize"
            >
            {workMode.toLowerCase()}
          </p>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-5 items-center z-0">
        <Button
          asLink
          href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
          className="transition-all before:absolute before:-inset-1 before:block group-hover:!bg-blaze/80"
        >
          Apply Now
        </Button>
        <Button
          asLink
          variant="secondary"
          href={`${APPLY_URL}/${title.replaceAll(" ", "-")}-${id}`}
          className="transition-all before:absolute before:-inset-1 before:block group-hover:!bg-blaze/80 group-hover:!text-obsidian"
        >
          Refer a Friend
        </Button>

        <Tooltip.Provider>
          <Tooltip.Root open={openTooltip} onOpenChange={setTooltipOpen} delayDuration={0}>
            <Tooltip.Trigger asChild>
              <Button
                asLink
                variant="link"
                onClick={handleCopy}
                className="inline-flex items-center justify-center relative"
              >
                <Icon
                  name="share"
                  icon="share"
                  className="fill-dune size-4 cursor-pointer"
                />
              </Button>
            </Tooltip.Trigger>

            <Tooltip.Portal>
              <Tooltip.Content sideOffset={5} className="bg-linen py-1 px-1.5 rounded-md text-xs z-[9999]">
                <span className="opacity-70">{linkCopied ? "Link copied!" : "Copy link"}</span>
                <Tooltip.Arrow className="fill-linen"/>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <span className="text-sm opacity-60 -z-1 ml-auto">
          {createdAt &&
            new Date(createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
        </span>
      </div>
    </Card>
  );
}

function JobBoard({
  heading,
  theme,
  split_theme,
  split_theme_color,
  attributes,
}: JobBoardProps) {

  const { watch, control, reset, register, setValue } = useForm({
    defaultValues: {
      sortBy: "",
      jobType: "",
      workMode: "",
      country: "",
      state: "",
      city: "",
      searchTerm: "",
    },
  });

  const sortBy = watch("sortBy");
  const jobType = watch("jobType");
  const workMode = watch("workMode");
  const country = watch("country");
  const state = watch("state");
  const city = watch("city");
  const searchTerm = watch("searchTerm");

  const [allJobs, setAllJobs] = useState<TapTalentApiRes[]>([]);
  const [loading, setLoading] = useState(true);
  const [uiPage, setUiPage] = useState(1);
  const [layoutTick, setLayoutTick] = useState(0);

  useEffect(() => {
    const fetchAllJobs = async () => {
      setLoading(true);

      let page = 1;
      let hasMore = true;
      let accumulated: TapTalentApiRes[] = [];

      try {
        while (hasMore) {
          const { jobs, total } = await getWorkDay({
            pageNumber: page,
            perPage: PER_API,
          });

          const validJobs = jobs.filter(
            job => job.status === "ACTIVE" && job.publishType === "EXTERNAL"
          );

          accumulated = [...accumulated, ...validJobs];

          if (total < PER_API) {
            hasMore = false;
          } else {
            page++;
          }
        }

        setAllJobs(accumulated);
        setLayoutTick(t => t + 1);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  useEffect(() => {
    setUiPage(1);
  }, [searchTerm, country, state, city, workMode, sortBy, jobType]);

  const filteredJobs = useMemo(() => {
    let jobs = [...allJobs];

    if (searchTerm) {
      jobs = jobs.filter(job => {
        return job.title?.toLowerCase().includes(searchTerm.toLowerCase()) || job.description?.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    if (country) {
      jobs = jobs.filter(job =>
        job.country?.toLowerCase() === country.toLowerCase()
      );
    }

    if (state) {
      jobs = jobs.filter(job =>
        job.state?.toLowerCase() === state.toLowerCase()
      );
    }

    if (city) {
      jobs = jobs.filter(job =>
        job.city?.toLowerCase() === city.toLowerCase()
      );
    }

    if (workMode) {
      jobs = jobs.filter(job =>
        job.workMode?.toLowerCase() === workMode.toLowerCase()
      );
    }
    
    if (jobType) {
      jobs = jobs.filter(job =>
        job.jobType?.toLowerCase() === jobType.toLowerCase()
      );
    }

    switch (sortBy) {
      case "Latest":
        jobs.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;

      case "Oldest":
        jobs.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        );
        break;
    }

    return jobs;
  }, [allJobs, searchTerm, country, state, city, workMode, jobType, sortBy]);

  const totalPages = Math.ceil(filteredJobs.length / PER_DISPLAY);
  const paginationItems = useMemo(
    () => getPaginationItems(uiPage, totalPages),
    [uiPage, totalPages]
  );

  const visibleJobs = useMemo(() => {
    const start = (uiPage - 1) * PER_DISPLAY;
    const end = start + PER_DISPLAY;
    return filteredJobs.slice(start, end);
  }, [filteredJobs, uiPage]);

  useEffect(() => {
    setValue("state", "");
    setValue("city", "");
  }, [country, setValue]);

  useEffect(() => {
    setValue("city", "");
  }, [state, setValue]);

  const countryOptions = useMemo(() => {
    const unique = Array.from(
      new Set(allJobs.map(job => job.country).filter(Boolean))
    );

    return unique.map(loc => ({
      label: loc!,
      value: loc!,
    }));
  }, [allJobs]);

  const stateOptions = useMemo(() => {
    if (!country) return [];

    const unique = Array.from(
      new Set(
        allJobs
          .filter(job => job.country === country)
          .map(job => job.state)
          .filter(Boolean)
      )
    );

    return unique.map(loc => ({
      label: loc!,
      value: loc!,
    }));
  }, [allJobs, country]);

  const cityOptions = useMemo(() => {
    if (!country || !state) return [];

    const unique = Array.from(
      new Set(
        allJobs
          .filter(job =>
            job.country === country &&
            job.state === state
          )
          .map(job => job.city)
          .filter(Boolean)
      )
    );

    return unique.map(loc => ({
      label: loc!,
      value: loc!,
    }));
  }, [allJobs, country, state]);

  return (
    <Section
      key={layoutTick}
      name="job-board"
      attributes={attributes}
      theme={theme}
      splitThemeOn={split_theme}
      splitThemeClass=".job-card:last-child"
      splitThemeColor={split_theme_color}
      containerClassName="space-y-8"
    >
      <h2 className="grow font-serif text-5xl md:text-6xl lg:text-7xl">
        {heading && <RichText content={heading} noWrapper />}
      </h2>
      <div className="flex flex-col">
        
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto]">
        <Controller
          name="searchTerm"
          control={control}
          render={({ field }) => (
            <Search
              {...register("searchTerm")}
              onChange={(e) => field.onChange(e.currentTarget.value)}
              name="job-search"
              aria-label="Search by job title"
              placeholder="Search by job title"
              className="p-4"
            />
          )}
        />
        <div className="flex flex-wrap gap-4 order-first lg:order-last">
          <Controller
            name="jobType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Filter by Job Type"
                options={[
                  { label: "Full time", value: "FULL_TIME" },
                  { label: "Part time", value: "PART_TIME" },
                  { label: "Contract", value: "CONTRACT" },
                ]}
                placeholder="Job Type"
              />
            )}
          />

          <Controller
            name="workMode"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Filter by Work Mode"
                options={[
                  { label: "Remote", value: "REMOTE" },
                  { label: "Onsite", value: "ONSITE" },
                  { label: "Hybrid", value: "HYBRID" },
                ]}
                placeholder="Work Mode"
              />
            )}
          />

          <Controller
            name="sortBy"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="Sort by"
                options={[
                  { label: "Latest", value: "Latest" },
                  { label: "Oldest", value: "Oldest" },
                ]}
                placeholder="Sort by"
              />
            )}
          />

          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className={!country ? "" : "lg:pointer-events-none lg:hidden"}
                label="Filter by country"
                options={countryOptions}
                placeholder="Country"
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className={twMerge(
                  "lg:hidden lg:pointer-events-none",
                  !country ? "pointer-events-none hidden" : "")}
                label="Filter by Location"
                options={stateOptions}
                placeholder="Location"
              />
            )}
          />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className={twMerge(
                "lg:hidden lg:pointer-events-none",
                !country && "pointer-events-none hidden",
                !state && "pointer-events-none opacity-50")}
              label="Filter by city"
              options={cityOptions}
              placeholder="City"
            />
          )}
        />

          {(country || city || state || searchTerm || sortBy || workMode || jobType) && (
            <button
              onClick={() => {
                reset();
              }}
            >
              <Icon
                name="clear"
                className="fill-blaze size-6 cursor-pointer"
                icon="clear"
              />
            </button>
          )}
        </div>
      </div>

      <div className="flex-wrap gap-4 hidden lg:flex lg:-mt-2">
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className={!country ? "pointer-events-none hidden" : ""}
              label="Filter by country"
              options={countryOptions}
              placeholder="Country"
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className={!country ? "pointer-events-none hidden" : ""}
              label="Filter by Location"
              options={stateOptions}
              placeholder="Location"
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              className={twMerge(
                !country && "pointer-events-none hidden",
                !state && "pointer-events-none opacity-50")}
              label="Filter by city"
              options={cityOptions}
              placeholder="City"
            />
          )}
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 min-h-[320px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="job-card h-60 animate-pulse rounded-lg bg-white p-8"
            >
              <div className="mb-4 h-6 w-1/2 rounded bg-gray-300"></div>
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
              <div className="h-4 w-1/4 rounded bg-gray-300"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <Grid tag="ul">
            {visibleJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}

            {!loading && visibleJobs.length === 0 && (
              <li className="job-card flex h-80 flex-col items-center justify-center rounded-lg bg-white p-8">
                <p className="font-semibold">
                  No jobs available at the moment. Please check back later.
                </p>
              </li>
            )}
          </Grid>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 text-white">

              <Button
                onClick={() => setUiPage(p => Math.max(1, p - 1))}
                disabled={uiPage === 1}
                className="rotate-180 text-white disabled:opacity-40 disabled:cursor-not-allowed [&>svg]:size-5"
                variant="link"
                withArrow
                label="Previous"
              >
                <span className="hidden">Previous</span>
              </Button>

              {paginationItems.map((item) => {
                if (typeof item === "string") {
                  return (
                    <span
                      key={item}
                      className="flex h-11 min-w-6 items-center justify-center font-semibold text-linen"
                      aria-hidden="true"
                    >
                      ...
                    </span>
                  );
                }

                return (
                  <Button
                    key={item}
                    onClick={() => setUiPage(item)}
                    variant={uiPage === item ? "primary" : "secondary"}
                    aria-current={uiPage === item ? "page" : undefined}
                    aria-label={`Go to page ${item}`}
                    className={twMerge(
                      "min-w-auto w-11",
                      uiPage === item
                        ? ""
                        : "border-linen text-linen hover:bg-blaze hover:border-blaze"
                    )}
                  >
                    {item}
                  </Button>
                );
              })}

              <Button
                onClick={() =>
                  setUiPage(p => Math.min(totalPages, p + 1))
                }
                disabled={uiPage === totalPages}
                className="text-white disabled:opacity-40 disabled:cursor-not-allowed [&>svg]:size-5"
                variant="link"
                withArrow
                label="Next"
              >
                <span className="hidden">Next</span>
              </Button>

            </div>
          )}
        </>
      )}

    </Section>
  );
}

export default JobBoard;
