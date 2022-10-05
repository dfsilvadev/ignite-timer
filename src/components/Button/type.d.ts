import { HtmlHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  icon?: ReactNode;
  color?: "primary" | "danger";
  children: ReactNode;
} & HtmlHTMLAttributes<HTMLButtonElement>;
