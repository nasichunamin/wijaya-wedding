import React, { useEffect, useState } from "react";
import { paketService } from "../services";
import { Paket } from "../types";
import { convertRupiahs } from "../components/ConvertRupiah/indexConverRupiah";

const Product: React.FC = () => {
  const [paket, setPaket] = useState<Array<Paket>>();
  const getPaket = async () => {
    try {
      const response = await paketService.location();
      setPaket(response?.data?.data);
      // response?.data.map((paket: any) => console.log(paket?.data));
      // console.log("response", response.data.data);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getPaket();
  });
  return (
    <>
      <div className="container mx-auto mt-32 px-6 md:px-0">
        <h1 className="text-center text-4xl">Paket Wedding</h1>
        <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4  w-full ">
          {paket?.map((list, index) => (
            <div className="rounded overflow-hidden shadow-lg  w-full pb-6">
              <img
                className="w-full h-2/4 object-cover"
                src={
                  list.gambar
                    ? `http://localhost/fullstack-wijaya-wedding-github-amin/backend/uploads/image/paket/${list.gambar}`
                    : `/assets/img/dummy-paket-wedding.png`
                }
                alt={list.gambar}
              />
              <div className="px-6 pt-6 h-full">
                <div className="font-bold text-2xl mb-1 capitalize">
                  {list.kategori === "hotel"
                    ? list.hotel_detail.nama
                    : list.kategori}
                </div>
                <p className="font-bold text-base mb-2 capitalize">
                  {list.nama}
                </p>

                <p className=" text-base capitalize">
                  {convertRupiahs.format(list.harga)}
                </p>
                <div className="my-6 flex flex-col gap-4">
                  <button className="btn bg-yellow-600 py-1 px-5 text-white font-bold rounded-md w-full ">
                    Lihat Detail
                  </button>
                  <button className="btn bg-green-500 py-1 px-5 text-white font-bold rounded-md w-full ">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
              {/* <div>
               
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
