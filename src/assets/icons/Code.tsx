import type { JSX } from "astro/jsx-runtime";

type Props = {
    className?: string;
    width?: string;
    height?: string;
};

export default function Code({ className = "", width = "", height = "" }: Props): JSX.Element {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    );
}

