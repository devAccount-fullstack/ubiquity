interface SubHeaderLinkProps {
  text: string;
  url: string;
  subMenu?: SubHeaderLinkProps[];
}

export interface HeaderData {
  primaryMenu: SubHeaderLinkProps[];
  secondaryMenu: (SubHeaderLinkProps & {
    buttonVariant: "primary" | "secondary";
  })[];
}
