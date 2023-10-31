import { AxiosResponse } from "axios";

import api from "./api.service";
import {
  LoginRequest,
  LoginResponse,
  RegisterOrEditRequest,
  User,
} from "../types";

// API GET DATA
export const login = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await api.post("user/login", data);
};

export const profile = async (id: string): Promise<AxiosResponse<User>> => {
  return await api.post("user/view?id=" + id);
};

export const update = async (
  data: RegisterOrEditRequest,
  id: any
): Promise<AxiosResponse<LoginResponse>> => {
  return await api.post("user/update?id=" + id, data);
};
