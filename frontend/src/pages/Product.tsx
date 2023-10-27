import React, { useEffect, useState } from "react";
import { paketService } from "../services";
import { Paket } from "../types";
import { convertRupiahs } from "../components/ConvertRupiah/indexConverRupiah";

const Product: React.FC = () => {
  const [paket, setPaket] = useState<Array<Paket>>();
  const [detailPaket, setDetailPaket] = useState<Paket>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPaket, setFilteredPaket] = useState<Array<Paket>>();
  const [loading, setLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [dekorasi, setDekorasi] = useState<Array<any>>();
  const getPaket = async () => {
    try {
      setLoading(true);
      const response = await paketService.location();
      console.log("response", response?.data);
      setPaket(response?.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  // const getPaket = async () => {
  //   try {
  //     const response = await paketService.location();
  //     setPaket(response?.data?.data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const getDetailPaket = async (id: number) => {
    try {
      setLoading(true);
      const response = await paketService.detail(id);
      console.log("response", response?.data);
      setDetailPaket(response?.data);

      let list = response.data.dekorasi;
      let trim = list.trim();
      const desc = trim.split("\r\n");
      console.log("desc", desc);
      // setDekorasi(desc);
      setShowModal(true);
      // console.log("detail", response?.data?.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getPaket();
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // Tunggu 500ms setelah selesai mengetik

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  // Implementasi algoritma Boyer-Moore untuk pencarian
  const boyerMooreSearch = (text: string, pattern: string): boolean => {
    const patternLength = pattern.length;
    const textLength = text.length;

    const lastOccurrence: Record<string, number> = {};
    for (let i = 0; i < patternLength; i++) {
      lastOccurrence[pattern[i]] = i;
    }

    let i = patternLength - 1;
    let j = patternLength - 1;

    while (i < textLength) {
      if (text[i] === pattern[j]) {
        if (j === 0) {
          return true; // Pattern found
        }
        i--;
        j--;
      } else {
        const lastOccur = lastOccurrence[text[i]] ?? -1;
        i += Math.max(1, j - lastOccur);
        j = patternLength - 1;
      }
    }

    return false; // Pattern not found
  };

  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setFilteredPaket(paket);
    } else {
      const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();
      const filtered = paket?.filter((p) =>
        boyerMooreSearch(p.nama.toLowerCase(), lowerCaseSearchTerm)
      );
      setFilteredPaket(filtered);
    }
  }, [debouncedSearchTerm, paket]);
  // useEffect(() => {
  //   if (searchTerm.trim() === "") {
  //     setFilteredPaket(paket); // Jika searchTerm kosong, tampilkan semua paket
  //   } else {
  //     const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //     const filtered = paket?.filter((p) =>
  //       boyerMooreSearch(p?.nama?.toLowerCase(), lowerCaseSearchTerm)
  //     );
  //     setFilteredPaket(filtered);
  //   }
  // }, [searchTerm, paket]);
  // Buat fungsi pencarian yang berjalan saat perubahan searchTerm
  // useEffect(() => {
  //   if (searchTerm.trim() === "") {
  //     setFilteredPaket(paket); // Jika searchTerm kosong, tampilkan semua paket
  //   } else {
  //     const lowerCaseSearchTerm = searchTerm.toLowerCase();
  //     const filtered = paket?.filter((p) =>
  //       p.nama.toLowerCase().includes(lowerCaseSearchTerm)
  //     );
  //     setFilteredPaket(filtered);
  //   }
  // }, [searchTerm, paket]);

  return (
    <>
      <div className="container mx-auto mt-32 px-6 md:px-0">
        <h1 className="text-center text-4xl">Paket Wedding</h1>
        <div className="mt-6 flex justify-center ">
          <form className="w-2/4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari Nama Paket"
                required
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="py-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4  w-full ">
              {filteredPaket?.map((list, index) => (
                <div
                  className="rounded overflow-hidden shadow-lg  w-full h-[70vh] md:h-[70vh] lg:h-[80vh]  "
                  key={index}
                >
                  <div className="h-2/4 md:h-2/4 lg:h-3/6 bg-red-200">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        list.gambar
                          ? `http://localhost/fullstack-wijaya-wedding-github-amin/backend/uploads/image/paket/${list.gambar}`
                          : `/assets/img/dummy-paket-wedding.png`
                      }
                      alt={list.gambar}
                    />
                  </div>
                  <div className="px-6 py-3 lg:py-6  flex flex-col justify-between  h-[35vh] md:h-[33vh] lg:h-[40vh]">
                    <div className="flex flex-col  justify-center">
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
                    <div className=" flex flex-col gap-4">
                      <button
                        className="btn bg-yellow-600 py-1 px-5 text-white font-bold rounded-md w-full "
                        onClick={() => getDetailPaket(list.id)}
                      >
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
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          {detailPaket?.nama}
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          1. Dekorasi :
                        </p>
                        <ul>{dekorasi?.map((list) => <li>{list}</li>)}</ul>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default Product;
