import React, { useEffect, useState } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { paketService } from "../services";
import { Paket } from "../types";
import { convertRupiahs } from "../components/ConvertRupiah/indexConverRupiah";

const Home: React.FC = () => {
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
                  Made Perfect{" "}
                </h1>
                <h1 className="font-poppins-medium text-5xl md:text-7xl">
                  Your Dream Wedding{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-24">
        <div className="flex flex-col md:flex-row gap-10 px-10 sm:px-0">
          <img
            src="/assets/img/about.png"
            alt="about"
            className="md:w-2/4 lg:w-full"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl lg:text-[56px] mb-2">Tentang Kami</h1>
            <h3 className="text-3xl lg:text-4xl">
              We are a team of passionate and experienced wedding planners
            </h3>
            <h6 className="text-base mt-4">
              Our team of wedding planners is passionate about creating
              unforgettable wedding experiences. We understand that every
              wedding is unique, and we work closely with our clients to ensure
              that their vision becomes a reality. Our approach is personal,
              friendly, and professional, and we strive to make the planning
              process as stress-free as possible.
            </h6>
            <button className="border border-black w-2/4 xl:w-1/4 rounded-full p-2 mt-4 ">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32 px-6 md:px-0">
        <h1 className="text-center text-4xl">Layanan Kami</h1>
        <div className=" mt-10 grid grid-cols-1 gap-6 md:grid-cols-2  sm:w-auto ">
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black text-center">
              Make Up
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black text-center">
              Dekorasi
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black text-center">
              Dokumentasi
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start shadow-xl border border-[#f5f5f5]">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black text-center">
              Hiburan
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada
              placerat faucibus nam purus sem. Urna pulvinar porttitor dignissim
              congue pellentesque ac hac.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32">
        <h1 className="text-center text-4xl">Benefit</h1>
        <div className=" mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4  sm:w-auto ">
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black ">
              Save Times and Energy
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              By Using Wedding organizer you will save times and energy
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black ">
              Budget Management
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              By Using Wedding organizer you will save times and energy
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black ">
              Efficient Management
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              By Using Wedding organizer you will save times and energy
            </div>
          </div>
          <div className="rounded-xl bg-white p-10  flex flex-col gap-2 items-start ">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-[32px] text-white">
              <FaMoneyBillAlt />
            </div>

            <div className="mt-2 font-poppins-bold text-xl md:text-2xl text-black ">
              Handling Unexpected Situation
            </div>

            <div className="mt-1 font-poppins-medium text-base text-[#616161]">
              By Using Wedding organizer you will save times and energy
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-24 px-6 md:px-0">
        <h1 className="text-center text-4xl">Paket Wedding</h1>
        <div className="py-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4  w-full ">
          {paket?.map((list, index) => (
            <div className="rounded overflow-hidden shadow-lg h-[45vh] w-full">
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
          <button className="btn bg-yellow-600 py-3 px-5 text-white font-bold rounded-full">
            {" "}
            Paket Lainnya{" "}
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-24">
        <h1 className="text-center text-4xl">Portofolio</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="md:grid gap-4 hidden ">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
