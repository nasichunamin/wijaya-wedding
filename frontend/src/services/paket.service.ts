import { AxiosResponse } from "axios";

import api from "./api.service";
import { ResponsePaket } from "../types";

// API GET DATA
export const location = async (): Promise<AxiosResponse<ResponsePaket>> => {
  return await api.get("paket/list");
};
