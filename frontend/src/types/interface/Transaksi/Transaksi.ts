export interface TransaksiRequest {
  account_id: string;
  paket_id: string;
  tgl_pemesanan: string;
  alamat_pemesanan: string;
}

export interface TransaksiResponse {
  message: string;
  data: Transaksi;
}

export interface Transaksi {
  account_id: string;
  paket_id: string;
  tgl_pemesanan: string;
  status: string;
  alamat_pemesanan: string;
  id: number;
}
