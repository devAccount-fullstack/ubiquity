import SearchIcon from "@/assets/img/search-icon.svg";
import { twMerge } from "tailwind-merge";

function Search({
  name,
  id,
  className,
  ...rest
}: React.HTMLProps<HTMLInputElement>) {
  return (
    <div className="relative">
      <input
        id={id || name}
        type="text"
        className={twMerge(
          "border-dune focus:border-blaze focus:ring-blaze text-md block w-full appearance-none rounded-lg border bg-transparent py-2 pr-6 pl-2 font-semibold focus:outline-none",
          className,
        )}
        {...rest}
      />
      <a
        className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
        href={'/resources-pages'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SearchIcon className="text-blaze" />
      </a>
    </div>
  );
}

export default Search;
