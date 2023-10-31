import { AxiosResponse } from "axios";

import api from "./api.service";
import { TransaksiRequest, TransaksiResponse } from "../types";

// API GET DATA
export const create = async (
  data: TransaksiRequest
): Promise<AxiosResponse<TransaksiResponse>> => {
  return await api.post("transaksi/create", data);
};

// export const profile = async (id: string): Promise<AxiosResponse<User>> => {
//   return await api.post("user/view?id=" + id);
// };

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };
