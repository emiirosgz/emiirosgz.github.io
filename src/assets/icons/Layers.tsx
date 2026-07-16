import type { JSX } from "astro/jsx-runtime";

type Props = {
    className?: string;
    width?: string;
    height?: string;
};

export default function Layers({ className = "", width = "", height = "" }: Props): JSX.Element {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
    );
}

