import { AxiosResponse } from "axios";

import api from "./api.service";
import { Paket, ResponsePaket } from "../types";

// API GET DATA
export const location = async (): Promise<AxiosResponse<Paket[]>> => {
  return await api.get("paket/list");
};

// API GET DETAIL DATA
export const detail = async (id: number): Promise<AxiosResponse<Paket>> => {
  return await api.get("paket/detail?id=" + id);
};
