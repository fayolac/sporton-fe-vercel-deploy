import { fetchAPI } from "../(landing)/lib/api";
import { Bank } from "../types";

export const getAllBanks = async (): Promise<Bank[]> => {
    return await fetchAPI<Bank[]>("/banks");
};