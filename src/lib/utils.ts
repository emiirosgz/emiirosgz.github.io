import { CATEGORIAS } from "./consts";

export const getCategoryHref = (categoryName: string) => {
    return CATEGORIAS.find((cat) => cat.id === categoryName)?.href ?? categoryName.toLowerCase().replace(/\s+/g, "-");
};