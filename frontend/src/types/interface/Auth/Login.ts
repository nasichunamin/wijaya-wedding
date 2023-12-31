export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: User;
}

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
  nama_lengkap: string;
  jenis_kelamin: string;
  tgl_lahir: string;
  no_telepon: string;
  token: string;
  createdAt: any;
  updatedAt: any;
  deleteAt: any;
}

export interface RegisterOrEditRequest {
  username?: string;
  password?: string;
  role?: string;
  nama_lengkap?: string;
  jenis_kelamin?: string;
  tgl_lahir?: string;
  no_telepon?: string;
}
