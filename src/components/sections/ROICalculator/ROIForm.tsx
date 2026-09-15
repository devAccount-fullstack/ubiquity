"use client";

import NumberInputWithStepper from "@components/forms/NumberInputWithStepper";
import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { calculateROI } from "./calculateROI";
import { ROITable } from "./ROITable";
import { ROIInputs } from "./types";
import Button from "@components/common/Button";
import * as Dialog from "@radix-ui/react-dialog";
import RichText from "@components/common/RichText";
import Select from "@components/forms/Select";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function ROIForm({
  leanMoreHeading,
  leanMoreContent,
}: {
  leanMoreHeading?: string;
  leanMoreContent?: string;
}) {
  const { watch, control } = useForm<ROIInputs>({
    defaultValues: {
      agents: 20,
      outsourcingType: "offshore",
      agentHourlyRate: 19,
      teamLeadHourlyRate: 34,
      accountManagerHourlyRate: 45,
    },
  });

  const [
    agents,
    outsourcingType,
    agentHourlyRate,
    teamLeadHourlyRate,
    accountManagerHourlyRate,
  ] = watch([
    "agents",
    "outsourcingType",
    "agentHourlyRate",
    "teamLeadHourlyRate",
    "accountManagerHourlyRate",
  ]);

  const results = useMemo(() => {
    if (
      !agents ||
      !outsourcingType ||
      !agentHourlyRate ||
      !teamLeadHourlyRate ||
      !accountManagerHourlyRate
    ) {
      return;
    }
    return calculateROI(
      agents,
      outsourcingType,
      agentHourlyRate,
      teamLeadHourlyRate,
      accountManagerHourlyRate,
    );
  }, [
    agents,
    outsourcingType,
    agentHourlyRate,
    teamLeadHourlyRate,
    accountManagerHourlyRate,
  ]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <form className="mx-auto grid w-full max-w-6xl gap-6 px-7">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <label className="mb-3 block font-bold" htmlFor="agents">
              Total Agents:
            </label>
            <Controller
              name="agents"
              control={control}
              rules={{ min: 10, required: true }}
              render={({ field }) => (
                <NumberInputWithStepper
                  {...field}
                  min={10}
                  step={1}
                  value={field.value}
                  onChange={field.onChange}
                  className="h-15 w-22"
                />
              )}
            />
          </div>
          <div>
            <label className="mb-3 block font-bold" htmlFor="outsourcingType">
              Outsourcing Type:
            </label>
            <div className="relative flex-1">
              <Controller
                name="outsourcingType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    className="w-full"
                    options={[
                      { label: "Offshore", value: "offshore" },
                      { label: "Nearshore", value: "nearshore" },
                    ]}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <ROITable control={control} results={results} />
      </form>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <div className="bg-claret relative mt-8 py-10 text-white lg:mt-24 lg:py-20">
          <div className="bg-claret absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 lg:h-16 lg:w-16"></div>
          <div className="mx-auto w-full max-w-5xl gap-6 px-7">
            <h2
              className={twMerge(
                "mb-6 flex-1 text-center font-serif text-3xl md:text-5xl lg:mb-12",
              )}
            >
              Baseline Savings Are Just the Beginning
            </h2>
          </div>
          <div className="mx-auto flex w-full max-w-5xl flex-col flex-wrap items-center justify-around gap-6 px-7 text-center md:flex-row">
            <div>
              <div className="text-blaze mb-3 font-serif text-4xl md:text-5xl lg:text-7xl">
                {results && formatter.format(results.totalSavings)}
              </div>
              <div>Total Cost Savings</div>
            </div>
            <div>
              <div className="text-blaze mb-3 font-serif text-4xl md:text-5xl lg:text-7xl">
                {results && results.percentageSavings}%
              </div>
              <div>Lower Operational Costs</div>
            </div>
            <div>
              <div className="text-blaze mb-3 font-serif text-4xl md:text-5xl lg:text-7xl">
                3X
              </div>
              <div>Revenue Growth Goal</div>
            </div>
            <div>
              <Dialog.Trigger asChild>
                <Button withArrow>Learn More</Button>
              </Dialog.Trigger>
            </div>
          </div>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-8 focus:outline-none md:p-13 md:pt-6 lg:max-w-xl">
            <div className="text-right">
              <button
                onClick={() => setOpen(false)}
                className="h-10 w-10 cursor-pointer"
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-auto size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Dialog.Title className="mb-5 max-w-100 text-lg font-bold text-black md:text-2xl">
              <RichText content={leanMoreHeading} noWrapper />
            </Dialog.Title>
            <RichText content={leanMoreContent} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
export default ROIForm;
