import type { JSX } from "astro/jsx-runtime";

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

export default function ChevronLeft({
  className = "",
  width = "",
  height = "",
}: Props): JSX.Element {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className= {className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="m12 19-7-7 7-7"></path>
        <path d="M19 12H5"></path>
    </svg>
  );
}

