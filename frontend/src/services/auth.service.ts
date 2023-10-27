import { AxiosResponse } from "axios";

import api from "./api.service";
import { LoginRequest, LoginResponse } from "../types";

// API GET DATA
export const login = async (
  data: LoginRequest
): Promise<AxiosResponse<LoginResponse>> => {
  return await api.post("user/login", data);
};
