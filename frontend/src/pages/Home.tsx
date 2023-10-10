import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-[url('./background-wijaya-wedding.png')] bg-fixed bg-cover bg-no-repeat  h-screen static  ">
        <div className="block ">
          <div className="container mx-auto flex flex-col-reverse justify-center  md:flex-row h-screen md:items-center px-4 md:px-0 text-center">
            <div className="w-full md:w-11/12 flex flex-col  text-white items-center ">
              <div className="w-full ">
                <h1 className=" font-poppins-bold text-xl  ">Wedding Organizer</h1>
              </div>
              <div className="w-full mt-2 ">
                <h1 className="font-poppins-medium  text-7xl ">Made Perfect </h1>
                <h1 className="font-poppins-medium  text-7xl ">Your Dream Wedding </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-24">
        <div className="flex gap-10">
          <img src="/assets/img/about.png"></img>
          <div className="flex flex-col justify-center">
            <h1 className="text-[56px]">Tentang Kami</h1>
            <h3 className="text-4xl">
              We are a team of passionate and experienced wedding planners
            </h3>
            <h6 className="text-base mt-4">
              Our team of wedding planners is passionate about creating unforgettable wedding
              experiences. We understand that every wedding is unique, and we work closely with our
              clients to ensure that their vision becomes a reality. Our approach is personal,
              friendly, and professional, and we strive to make the planning process as stress-free
              as possible.
            </h6>
            <button className="border border-black w-1/4 rounded-full p-2 mt-4 ">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-32">
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
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam
              purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
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
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam
              purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
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
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam
              purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
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
              Lorem ipsum dolor sit amet consectetur. Augue non malesuada placerat faucibus nam
              purus sem. Urna pulvinar porttitor dignissim congue pellentesque ac hac.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32">
        <h1 className="text-center text-4xl">Benefit</h1>
        <div className=" mt-4 grid grid-cols-1 gap-6 md:grid-cols-4  sm:w-auto ">
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
      <div className="container mx-auto mt-24">
        <h1 className="text-center text-4xl">Paket Wedding</h1>
        <div className=" py-10 grid grid-cols-1 gap-10 md:grid-cols-4  sm:w-auto ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="/assets/img/dummy-paket-wedding.png"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
          </div>
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
          <div className="grid gap-4">
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
