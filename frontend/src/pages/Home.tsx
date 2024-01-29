import React, { useEffect, useState } from "react";
import { GiLipstick, GiMicrophone, GiFlowers } from "react-icons/gi";
import { IoCamera } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiViewTimeline } from "react-icons/ci";
import { IoTime } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { paketService } from "../services";
import { Paket } from "../types";
import { convertRupiahs } from "../components/ConvertRupiah/indexConverRupiah";

const Home: React.FC = () => {
  const [paket, setPaket] = useState<Array<Paket>>([]);
  const getPaket = async () => {
    try {
      const response = await paketService.location();
      // console.log("response", response?.data);
      setPaket(response?.data);
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
    // console.log({ paket });
  });
  return (
    <>
      <div className="bg-[#F7F3EF] text-[#9D6A42] pb-32">
        <div className="bg-[url('./background-wijaya-wedding.png')] bg-fixed bg-cover bg-no-repeat  h-screen static  ">
          <div className="block ">
            <div className="container mx-auto flex flex-col-reverse justify-center  md:flex-row h-screen md:items-center px-4 md:px-0 text-center">
              <div className="w-full md:w-11/12 flex flex-col  text-white items-center ">
                <div className="w-full ">
                  <h1 className=" font-poppins-bold text-xl  ">
                    Wedding Organizer
                  </h1>
                </div>
                <div className="w-full mt-2 ">
                  <h1 className="font-poppins-medium text-5xl md:text-7xl mb-4">
                    Buatlah Sempurna{" "}
                  </h1>
                  <h1 className="font-poppins-medium text-5xl md:text-7xl">
                    Pernikahan Impian Anda{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-24" id="about">
          <div className="flex flex-col md:flex-row gap-10 px-10 sm:px-0">
            <img
              src="/assets/img/about.png"
              alt="about"
              className="md:w-2/4 lg:w-full"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl lg:text-[56px] mb-2 ">Tentang Kami</h1>
              <h3 className="text-3xl lg:text-4xl">
                Kami adalah tim wedding organizer yang berpengalaman.
              </h3>
              <h6 className="text-base mt-4">
                Tim wedding organizer kami dapat menciptakan pengalaman
                pernikahan yang tak terlupakan. Kami memahami bahwa setiap
                pernikahan itu unik, dan kami bekerja sama dengan klien kami
                untuk memastikan visi dan misi mereka menjadi kenyataan.
              </h6>
              <button className="border border-[#9D6A42] w-2/4 xl:w-1/4 rounded-full p-2 mt-4 hover:bg-[#9D6A42] hover:text-white">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-32 px-6 md:px-0">
          <h1 className="text-center text-4xl">Layanan Kami</h1>
          <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-2  sm:w-auto ">
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <GiLipstick />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-center">
                Make Up
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Make Up adalah proses menciptakan tampilan yang mempesona dan
                memukau bagi kedua mempelai baik mempelai wanita ataupun
                mempelai pria pada hari pernikahan.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <GiFlowers />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-center">
                Dekorasi
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Dekorasi pernikahan mencakup pengaturan estetika dan tata letak
                ruang acara pernikahan. Hal ini meliputi penggunaan bunga, kain,
                pencahayaan, dan elemen dekoratif lainnya untuk menciptakan
                suasana yang sesuai dengan tema pernikahan.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <IoCamera />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-center">
                Dokumentasi
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Dokumentasi merupakan pengambilan gambar dan video dari acara
                pernikahan secara keseluruhan. Hal ini termasuk momen-momen
                penting yang ada dalam acara.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <GiMicrophone />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-center">
                Hiburan
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Hiburan dalam pernikahan mencakup berbagai elemen yang bertujuan
                untuk menambahkan kesenangan dan menghidupkan suasana
                pernikahan. Hal ini biasanya pertunjukan musik dan yang lainnya.
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-32">
          <h1 className="text-center text-4xl">Keuntungan</h1>
          <div className=" mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4  sm:w-auto ">
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <IoTime />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl ">
                Menghemat waktu dan tenaga
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Manajemen anggaran dan komunikasi digital, pasangan dapat
                menghemat waktu dan tenaga.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <FaMoneyBillAlt />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl ">
                Pengelolaan Anggaran
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Membantu calon pengantin mengontrol dan memantau pengeluaran
                mereka selama proses perencanaan pernikahan.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <CiViewTimeline />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl ">
                Lebih Efisien
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Manajemen anggaran dan komunikasi digital, pasangan dapat
                menjadikan proses pernikahan lebih teratur dan efisien.
              </div>
            </div>
            <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#9D6A42] text-[32px] text-white">
                <FaPeopleGroup />
              </div>

              <div className="mt-2 font-poppins-bold text-xl md:text-2xl ">
                Mengatasi situasi tak terduga
              </div>

              <div className="mt-1 font-poppins-medium text-base ">
                Memberikan solusi saat ada peristiwa yang tidak terduga atau
                perubahan pada rencana pernikahan.
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-24 px-6 md:px-0">
          <h1 className="text-center text-4xl">Paket Wedding</h1>
          <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4  w-full ">
            {paket?.map((list, index) => (
              <div className="rounded overflow-hidden shadow-lg h-[45vh] w-full bg-white">
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
                </div>
              </div>
            ))}
          </div>
          <div className="w-full  flex justify-center mt-4">
            <a href="/Paket">
              <button className="btn bg-yellow-600 py-3 px-5 text-white font-bold rounded-full">
                Paket Lainnya
              </button>
            </a>
          </div>
        </div>
        <div className="container mx-auto mt-24" id="portofolio">
          <h1 className="text-center text-4xl">Portofolio</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 px-4 md:px-0">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY-280923_-12-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY_130823-16-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY-280923_-18-min.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-6 lg:gap-8 xl:gap-10 h-full">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY_130823-12-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY-280923_-16-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY_130823-20-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY-280923_-47-min.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="md:grid gap-4 hidden ">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY_130823-31-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJY_130823-18-min.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/img/WJYy-06328-min.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
