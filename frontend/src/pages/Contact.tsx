"use client";

export default function Contact() {
  return (
    <>
      <div className="bg-[#F7F3EF] text-[#9D6A42]">
        <div className="bg-[#D9D9D9] w-full py-16 md:p-14 ">
          <div className="md:container md:mx-auto flex flex-col px-4 lg:px-0 justify-between w-full mt-14 md:mt-20">
            <h1 className="font-inter-bold text-2xl md:text-5xl tracking-normal text-black ">
              Hubungi Kami
            </h1>
          </div>
        </div>
        <div className="px-4 xl:px-0 py-16 xl:container mx-auto flex flex-col items-center md:h-max ">
          <div className="sm:container sm:mx-auto lg:px-20  w-full">
            <div className="bg-white flex flex-col md:flex-row justify-between rounded-xl shadow-xl mt-4 z-10 w-full h-full border">
              <div className="md:w-8/12 ">
                <div className="flex-auto border-b md:border-r h-96 md:h-full bg-[url('./background-wijaya-wedding.png')]  bg-cover bg-center bg-no-repeat "></div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center py-6 md:py-10 w-full border-b md:border-r">
                <form className="px-4 md:px-20 w-full">
                  <div className="mb-3 w-full flex flex-col md:flex-row gap-4">
                    <div className="w-full ">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-base font-inter-medium text-[#344054] text-left"
                      >
                        Nama
                      </label>
                      <input
                        type="nama"
                        id="email"
                        className="bg-white border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-grey-400 focus:border-grey-400 block w-full p-2.5 "
                        placeholder="Masukkan nama kamu"
                        required={true}
                      />
                    </div>
                    <div className="w-full mt-4 md:mt-0">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-base font-inter-medium text-[#344054] text-left"
                      >
                        No. Telp
                      </label>
                      <input
                        type="nama"
                        id="email"
                        className="bg-white border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-grey-400 focus:border-grey-400 block w-full p-2.5 "
                        placeholder="Masukkan no telp"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      htmlFor="nama"
                      className="block mb-2 text-base font-inter-medium text-[#344054] text-left"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-white border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-grey-400 focus:border-grey-400 block w-full p-2.5 "
                      placeholder="you@company.com"
                      required={true}
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      htmlFor="nama"
                      className="block mb-2 text-base font-inter-medium text-[#344054] text-left"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="pesan"
                      className="bg-white border border-gray-300 text-gray-500 text-base rounded-lg focus:ring-grey-400 focus:border-grey-400 block w-full p-2.5 "
                      required={true}
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="flex items-start mb-3">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="bg-white border border-gray-300 text-gray-500 text-base rounded-xl focus:ring-grey-400 focus:border-grey-400"
                        required={true}
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Anda setuju dengan kebijakan privasi
                    </label>
                  </div>
                  <div className="">
                    <button className="rounded-full bg-black text-white px-6 py-3 flex gap-2.5 justify-center items-center text-lg font-bold font-inter-bold w-full">
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
