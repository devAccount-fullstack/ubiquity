"use client";
import { Controller } from "react-hook-form";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ROITableProps } from "./types";
import NumberInputWithStepper from "@components/forms/NumberInputWithStepper";
import * as Dialog from "@radix-ui/react-dialog";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const TableRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={twMerge(
      "border-dune grid grid-cols-4 border-b bg-white lg:grid-cols-6",
      className,
    )}
  >
    {children}
  </div>
);

const TableCell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={twMerge(
      "flex items-baseline justify-center gap-1 p-4 font-semibold first:justify-start",
      className,
    )}
  >
    {children}
  </div>
);

export function ROITable({ control, results }: ROITableProps) {
  const [tab, setTab] = useState<"in-house" | "outsourced">("in-house");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`group/table grid gap-6 is-${tab}`}>
        <div className="border-tundra bg-linen sticky top-4 grid grid-cols-2 rounded-lg border p-1 lg:hidden z-1">
          <button
            type="button"
            className={twMerge(
              "cursor-pointer rounded-lg px-4 py-2 font-semibold",
              tab === "in-house" ? "bg-blaze text-white" : "text-gray-800",
            )}
            onClick={() => setTab("in-house")}
          >
            In-House
          </button>
          <button
            type="button"
            className={twMerge(
              "cursor-pointer rounded-lg px-4 py-2 font-semibold",
              tab === "outsourced" ? "bg-blaze text-white" : "text-gray-800",
            )}
            onClick={() => setTab("outsourced")}
          >
            Outsourced
          </button>
        </div>
        <div>
          <TableRow className="border-b-0">
            <TableCell className="bg-mosswood col-span-2 rounded-tl-lg font-semibold text-white">
              Direct Salary Costs{" "}
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="text-blaze flex inline-flex h-4 w-4 items-center justify-center rounded-full border text-xs"
                  >
                    i
                  </button>
                </Dialog.Trigger>
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
                    <Dialog.Title className="sr-only text-lg font-semibold">
                      Direct Salary Costs
                    </Dialog.Title>
                    Hourly rates based on U.S. averages from Glassdoor
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </TableCell>
            <TableCell className="bg-tundra col-span-2 font-semibold text-white max-lg:rounded-tr-lg group-[.is-outsourced]/table:max-lg:hidden">
              In-House
            </TableCell>
            <TableCell className="bg-mosswood col-span-2 rounded-tr-lg font-semibold text-white group-[.is-in-house]/table:max-lg:hidden">
              Outsourced
            </TableCell>
          </TableRow>

          <TableRow className="border-mosswood">
            <TableCell className="col-span-2">Role</TableCell>
            <TableCell className="max-lg:hidden">Hourly</TableCell>
            <TableCell className="max-lg:hidden">Yearly</TableCell>
            <TableCell className="col-span-2 max-lg:hidden">Yearly</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              <label htmlFor="agentHourlyRate">Agent</label>
            </TableCell>
            <TableCell className="col-span-2 items-center max-lg:justify-start max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:hidden">
              Hourly
            </TableCell>
            <TableCell className="col-span-2 max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              <Controller
                name="agentHourlyRate"
                control={control}
                rules={{ min: 0, required: true }}
                render={({ field }) => (
                  <NumberInputWithStepper
                    {...field}
                    prefix="$"
                    min={0}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              {results && formatter.format(results.agentCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-in-house]/table:max-lg:hidden">
              {results && formatter.format(results.agentCostOutsourced)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              <label htmlFor="teamLeadHourlyRate">
                Team Lead <small>(1:15)</small>
              </label>
            </TableCell>
            <TableCell className="col-span-2 items-center max-lg:justify-start max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:hidden">
              Hourly
            </TableCell>
            <TableCell className="col-span-2 max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              <Controller
                name="teamLeadHourlyRate"
                control={control}
                rules={{ min: 0, required: true }}
                render={({ field }) => (
                  <NumberInputWithStepper
                    {...field}
                    prefix="$"
                    min={0}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              {results && formatter.format(results.teamLeadCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-in-house]/table:max-lg:hidden">
              Included
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              <label htmlFor="accountManagerHourlyRate">
                Account Manager <small>(1 per account)</small>
              </label>
            </TableCell>
            <TableCell className="col-span-2 items-center max-lg:justify-start max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:hidden">
              Hourly
            </TableCell>
            <TableCell className="col-span-2 max-lg:pb-0 group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              <Controller
                name="accountManagerHourlyRate"
                control={control}
                rules={{ min: 0, required: true }}
                render={({ field }) => (
                  <NumberInputWithStepper
                    {...field}
                    prefix="$"
                    min={0}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-outsourced]/table:max-lg:hidden lg:col-span-1">
              {results && formatter.format(results.accountManagerCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-in-house]/table:max-lg:hidden">
              Included
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="col-span-2">
              <span>
                Training{" "}
                <small>(Yearly average based on number of agents)</small>
              </span>
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.trainingCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 items-center group-[.is-in-house]/table:max-lg:hidden">
              {results && formatter.format(results.trainingCostOutsourced)}
            </TableCell>
          </TableRow>

          <TableRow className="border-b-0">
            <TableCell className="bg-dune col-span-2 rounded-bl-lg">
              Direct Salary Costs Subtotal
            </TableCell>
            <TableCell className="bg-dune col-span-2 items-center max-lg:rounded-br-lg group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.directSalarySubtotalInHouse)}
            </TableCell>
            <TableCell className="bg-dune col-span-2 items-center rounded-br-lg group-[.is-in-house]/table:max-lg:hidden">
              {results &&
                formatter.format(results.directSalarySubtotalOutsourced)}
            </TableCell>
          </TableRow>
        </div>
        <div>
          <TableRow className="border-b-0">
            <TableCell className="bg-mosswood col-span-2 rounded-tl-lg font-semibold text-white">
              Overhead & Indirect Costs
            </TableCell>
            <TableCell className="bg-tundra col-span-2 font-semibold text-white max-lg:rounded-tr-lg group-[.is-outsourced]/table:max-lg:hidden">
              In-House
            </TableCell>
            <TableCell className="bg-mosswood col-span-2 rounded-tr-lg font-semibold text-white group-[.is-in-house]/table:max-lg:hidden">
              Outsourced
            </TableCell>
          </TableRow>

          <TableRow className="border-mosswood">
            <TableCell className="col-span-2">Item</TableCell>
            <TableCell className="col-span-2 max-lg:hidden">Yearly</TableCell>
            <TableCell className="col-span-2 max-lg:hidden">Yearly</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              Office Space
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.officeSpaceCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 group-[.is-in-house]/table:max-lg:hidden">
              Included
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              Hardware & Software
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.hardwareCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 group-[.is-in-house]/table:max-lg:hidden">
              Included
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="border-dune/20 col-span-4 items-center border-b lg:col-span-2 lg:border-none">
              <span>
                Indirect Employee Costs <small>(Benefits, Healthcare)</small>
              </span>
            </TableCell>
            <TableCell className="col-span-2 max-lg:justify-start lg:hidden">
              Yearly
            </TableCell>
            <TableCell className="col-span-2 group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.indirectCostInHouse)}
            </TableCell>
            <TableCell className="col-span-2 group-[.is-in-house]/table:max-lg:hidden">
              Included
            </TableCell>
          </TableRow>

          <TableRow className="border-b-0">
            <TableCell className="bg-dune col-span-2 rounded-bl-lg">
              Overhead & Indirect Costs Subtotal
            </TableCell>
            <TableCell className="bg-dune col-span-2 items-center max-lg:rounded-br-lg group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.overheadSubtotalInHouse)}
            </TableCell>
            <TableCell className="bg-dune col-span-2 items-center rounded-br-lg group-[.is-in-house]/table:max-lg:hidden">
              {results && formatter.format(results.overheadSubtotalOutsourced)}
            </TableCell>
          </TableRow>
        </div>
        <div>
          <TableRow className="border-b-0">
            <TableCell className="bg-claret col-span-2 rounded-tl-lg rounded-bl-lg font-semibold text-white">
              Total Costs
            </TableCell>
            <TableCell className="bg-claret font-semibold. col-span-2 text-white max-lg:rounded-tr-lg max-lg:rounded-br-lg group-[.is-outsourced]/table:max-lg:hidden">
              {results && formatter.format(results.totalCostInHouse)}
            </TableCell>
            <TableCell className="bg-claret col-span-2 rounded-tr-lg rounded-br-lg font-semibold text-white group-[.is-in-house]/table:max-lg:hidden">
              {results && formatter.format(results.totalCostOutsourced)}
            </TableCell>
          </TableRow>
        </div>
      </div>
    </>
  );
}
