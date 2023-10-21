export interface ResponsePaket {
  message: string;
  data: Paket[];
}

export interface Paket {
  id: number;
  hotel_id: number;
  kategori: string;
  nama: string;
  harga: number;
  gambar: string;
  dekorasi: string;
  makeup_dan_busana: string;
  upacara_dan_tenda: string;
  dokumentasi: string;
  entertainment: string;
  updateAt: any;
  deleteAt: any;
  hotel_detail: HotelDetail;
}

export interface HotelDetail {
  id: number;
  nama: string;
  alamat: string;
}
