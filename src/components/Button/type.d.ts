import { ReactNode } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  icon?: ReactNode;
  color: "primary" | "danger";
  children: ReactNode;
} & ButtonType;
