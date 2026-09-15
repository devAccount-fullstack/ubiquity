import Link from "next/link";
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const ArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="size-4"
  >
    <path
      fillRule="evenodd"
      d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
      clipRule="evenodd"
    />
  </svg>
);

const colorVariants = {
  primary:
    "bg-blaze text-obsidian border-blaze hover:bg-blaze/80 inline-flex h-11 items-center justify-center rounded-md border px-4 gap-1 py-2 font-semibold cursor-pointer text-md min-w-26 transition-colors duration-300",
  secondary:
    "bg-transparent transition-colors duration-300 text-blaze border-blaze hover:bg-blaze/80 hover:text-obsidian inline-flex h-11 items-center justify-center gap-1 rounded-md border px-4 py-2 font-semibold cursor-pointer text-md min-w-26",
  link: "text-blaze font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer group-[.card]:before:absolute group-[.card]:before:-inset-1 group-[.card]:before:block",
};

function Button({
  children,
  asLink,
  href,
  variant = "primary",
  withArrow = false,
  className,
  external,
  ...rest
}: ButtonProps) {
  const content = (
    <>
      {children}
      {withArrow && ArrowIcon}
    </>
  );

  if (asLink && href) {
    const isExternal =
      /^https?:\/\//.test(href) &&
      typeof window !== "undefined" &&
      new URL(href).origin !== window.location.origin;
    if (isExternal || external) {
      return (
        <a
          className={twMerge(colorVariants[variant], className)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          suppressHydrationWarning
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        className={twMerge(colorVariants[variant], className)}
        href={href}
        {...rest}
      >
        {content}
      </Link>
    );
  }
  return (
    <button className={twMerge(colorVariants[variant], className)} {...rest}>
      {content}
    </button>
  );
}

export default Button;
