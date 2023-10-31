import { AxiosResponse } from "axios";

import api from "./api.service";
import {
  ListTransaksiResponse,
  TransaksiRequest,
  TransaksiResponse,
} from "../types";

// API GET DATA
export const create = async (
  data: TransaksiRequest
): Promise<AxiosResponse<TransaksiResponse>> => {
  return await api.post("transaksi/create", data);
};

export const list = async (
  id: any
): Promise<AxiosResponse<ListTransaksiResponse>> => {
  return await api.post("transaksi/list?id=" + id);
};

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };
