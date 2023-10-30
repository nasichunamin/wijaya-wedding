import { AxiosResponse } from "axios";

import api from "./api.service";
import { LoginRequest, LoginResponse, User } from "../types";

// API GET DATA
export const login = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await api.post("user/login", data);
};

export const profile = async (id: string): Promise<AxiosResponse<User>> => {
  return await api.post("user/view?id=" + id);
};
