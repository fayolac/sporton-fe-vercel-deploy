import { fetchAPI } from "../(landing)/lib/api";
import { Category } from "../types";

export const getAllCategories = async (): Promise<Category[]> => {
    return await fetchAPI<Category[]>("/categories");
};