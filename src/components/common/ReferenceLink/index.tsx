import { Reference } from "@/global.types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

function ReferenceLink({
  reference,
  children,
  className,
  ...rest
}: {
  reference?: Reference;
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLAnchorElement>) {
  if (!reference) return null;
  return (
    <Link
      href={reference.value?.data?.url || "#"}
      className={twMerge(
        "group-[.card]:before:absolute group-[.card]:before:-inset-1 group-[.card]:before:block",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
export default ReferenceLink;
