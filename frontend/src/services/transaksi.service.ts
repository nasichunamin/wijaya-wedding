import { AxiosResponse } from "axios";

import api from "./api.service";
import {
  ListTransaksiResponse,
  Transaksi,
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
  return await api.get("transaksi/list?id=" + id);
};

export const detail = async (id: any): Promise<AxiosResponse<Transaksi>> => {
  return await api.get("transaksi/detail?id=" + id);
};

// export const update = async (
//   data: RegisterOrEditRequest,
//   id: any
// ): Promise<AxiosResponse<LoginResponse>> => {
//   return await api.post("user/update?id=" + id, data);
// };
