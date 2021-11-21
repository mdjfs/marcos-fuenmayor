import { HTMLAttributes, ReactNode } from "react";
import { CardProps } from "../../atoms/card/card.interfaces";

export interface IndexBlogType extends HTMLAttributes<HTMLButtonElement> {
  document?: ReactNode;
  content: ReactNode;
  children?: IndexBlogType[];
  defaultOpen?: boolean;
}

export interface BlogProps extends CardProps {
  blog: IndexBlogType[];
  startDocument: ReactNode;
}
