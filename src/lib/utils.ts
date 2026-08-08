import type { ImageMetadata } from "astro";
import { CATEGORIAS } from "./consts";

/**
 * Helper function to append Astro's BASE_URL to internal paths.
 * Automatically handles absolute URLs (http/https/mailto/#), leading/trailing slashes,
 * and respects Astro's configured `base` in astro.config.mjs.
 */
export function basePath(path: string = ''): string {
    if (!path) return import.meta.env.BASE_URL || '/';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
        return path;
    }
    const rawBase = import.meta.env.BASE_URL || '/';
    const cleanBase = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (cleanPath === '/' && cleanBase === '') return '/';
    return `${cleanBase}${cleanPath}`;
}

// Relative glob from src/lib/utils.ts to src/assets/
const assetsGlob = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.{jpeg,jpg,png,gif,webp,svg}', { eager: true });

// Index images by relative path, clean path, and filename
const imageMap = new Map<string, ImageMetadata>();

for (const path in assetsGlob) {
    const mod = assetsGlob[path];
    const imageMetadata = mod?.default || mod;
    if (imageMetadata && typeof imageMetadata === 'object') {
        imageMap.set(path, imageMetadata);
        const cleanPath = path.replace(/^\.\.\//, '/src/');
        imageMap.set(cleanPath, imageMetadata);
        imageMap.set(cleanPath.replace(/^\//, ''), imageMetadata);
        const filename = path.split('/').pop();
        if (filename) {
            imageMap.set(filename, imageMetadata);
            imageMap.set(filename.toLowerCase(), imageMetadata);
        }
    }
}

export const getCategoryHref = (categoryName: string) => {
    return CATEGORIAS.find((cat) => cat.id === categoryName)?.href ?? categoryName.toLowerCase().replace(/\s+/g, "-");
};

export function resolveImage(imgSrc: any): any {
    if (!imgSrc) return null;

    // 1. If already a valid ImageMetadata object (has a .src property and is not a plain string)
    if (typeof imgSrc === 'object' && imgSrc !== null) {
        if ('default' in imgSrc && typeof imgSrc.default === 'object') {
            return imgSrc.default;
        }
        if ('src' in imgSrc && typeof imgSrc.src === 'string' && ('width' in imgSrc || 'format' in imgSrc)) {
            return imgSrc;
        }
    }

    // 2. Extract string representation if passed a string or object wrapping a string
    let searchStr = '';
    if (typeof imgSrc === 'string') {
        searchStr = imgSrc;
    } else if (typeof imgSrc === 'object' && imgSrc !== null && typeof imgSrc.src === 'string') {
        searchStr = imgSrc.src;
    }

    if (searchStr) {
        const clean = searchStr.split('?')[0];

        if (imageMap.has(clean)) {
            return imageMap.get(clean);
        }

        const filename = clean.split('/').pop();
        if (filename && imageMap.has(filename)) {
            return imageMap.get(filename);
        }
        if (filename && imageMap.has(filename.toLowerCase())) {
            return imageMap.get(filename.toLowerCase());
        }
    }

    return imgSrc;
}