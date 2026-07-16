import type { JSX } from "astro/jsx-runtime";

type Props = {
  className?: string;
  width?: string; 
  height?: string;
};

export default function ChevronRight({ className = "", width = "", height = "" }: Props): JSX.Element {
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
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
</svg>
    
  );
}