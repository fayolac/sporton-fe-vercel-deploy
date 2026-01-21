import { fetchAPI } from "../(landing)/lib/api";
import { Product } from "../types";

export const getAllProducts = async(): Promise<Product[]> => {
    return await fetchAPI<Product []>("/products");
}

export const getProductDetail = async(id:string): Promise<Product> => {
    return await fetchAPI<Product>(`/products/${id}`);
}