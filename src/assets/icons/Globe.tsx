import type { JSX } from "astro/jsx-runtime";

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

export default function Globe({
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
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
  );
}
