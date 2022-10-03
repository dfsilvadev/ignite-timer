import { HeadProps } from "./types";

export default function ({ title, description }: HeadProps) {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);

  return <></>;
}
