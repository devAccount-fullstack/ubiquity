import { twMerge } from "tailwind-merge";

function NumberInputWithStepper({
  value,
  onChange,
  min = 0,
  step = 1,
  name,
  className,
  prefix,
  ...props
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
  name?: string;
  className?: string;
  prefix?: string;
  [key: string]: unknown;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - step))}
        className="bg-dune/20 hover:bg-dune/30 h-8 w-8 cursor-pointer rounded max-sm:hidden lg:h-12 lg:w-12"
        aria-label="decrement"
      >
        -
      </button>
      <div className="relative flex items-center">
        {prefix && <div className="absolute px-3">{prefix}</div>}
        <input
          type="number"
          id={name}
          min={Math.max(0, min)}
          step={step}
          value={value}
          onChange={(e) => {
            const newValue = Math.max(0, Number(e.target.value));
            onChange(newValue);
          }}
          className={twMerge(
            "border-dune focus:border-blaze focus:ring-blaze relative h-8 w-18 rounded-lg border bg-transparent px-2 pl-6 focus:outline-none lg:h-12 lg:w-18",
            className,
          )}
          {...props}
        />
      </div>
      <button
        type="button"
        onClick={() => onChange(value + step)}
        className="bg-dune/20 hover:bg-dune/30 h-8 w-8 cursor-pointer rounded max-sm:hidden lg:h-12 lg:w-12"
        aria-label="increment"
      >
        +
      </button>
    </div>
  );
}

export default NumberInputWithStepper;
