import { Paket } from "../Paket/ListPaket";

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

export interface ListTransaksiResponse {
  message: string;
  data: Transaksi[];
}
export interface Transaksi {
  account_id: string;
  paket_id: string;
  tgl_pemesanan: string;
  status: string;
  alamat_pemesanan: string;
  id: number;
  tgl_pembayaran?: string;
  paket_detail?: Paket;
  bukti_pembayaran?: string;
}

// export interface ListTransaksi {
//   id: number
//   account_id: number
//   paket_id: number
//   tgl_pemesanan: string
//   status: string
//   alamat_pemesanan: string
//   bukti_pembayaran?: string
//   tgl_pembayaran?: string
//   paket_detail: PaketDetail
// }
