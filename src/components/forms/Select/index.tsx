import ChevronDown from "@/assets/img/chevron-down.svg";
import { SelectProps } from "./types";
import { twMerge } from "tailwind-merge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
} from "@radix-ui/react-select";

function SelectInput({
  name,
  id,
  options,
  placeholder,
  className,
  value,
  onChange,
}: SelectProps & React.HTMLProps<HTMLSelectElement>) {
  return (
    <Select
      value={
        typeof value === "number"
          ? String(value)
          : Array.isArray(value)
            ? value[0]
            : value
      }
      onValueChange={
        onChange
          ? (val) => {
              const event = {
                target: { value: val, name },
              } as unknown as React.FormEvent<HTMLSelectElement>;

              onChange(event);
            }
          : undefined
      }
    >
      <SelectTrigger
        id={id}
        className={twMerge(
          "border-dune text-mosswood data-[state=open]:border-blaze text-md flex cursor-pointer items-center gap-6 rounded-lg border px-4 py-3 font-bold focus:outline-none",
          className,
        )}
      >
        <SelectValue placeholder={placeholder} />
        <ChevronDown className="text-blaze ml-auto" />
      </SelectTrigger>
      <SelectContent
        position="popper"
        className="bg-mist text-mosswood z-10 w-(--radix-popper-anchor-width) min-w-[280px] rounded-lg"
        sideOffset={10}
        side="bottom"
      >
        <SelectViewport>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="border-linen hover:bg-dune hover:text-mosswood cursor-pointer border-t px-4 py-2 outline-none first:rounded-t-lg last:rounded-b-lg hover:font-bold"
            >
              <SelectItemText>{option.label}</SelectItemText>
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}

export default SelectInput;
