import type { JSX } from "astro/jsx-runtime";

type Props = {
    className?: string;
    width?: string;
    height?: string;
};

export default function Mail({ className = "", width = "", height = "" }: Props): JSX.Element {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>

    );
}

