import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paket } from "../../types";
import { paketService } from "../../services";
import { convertRupiahs } from "../../components/ConvertRupiah/indexConverRupiah";

const CreateTransaksi: React.FC = () => {
  const [paket, setPaket] = useState<Paket>();
  const params = useParams();
  const [dekorasi, setDekorasi] = useState<Array<any>>();
  const [makeup, setMakeup] = useState<Array<any>>();
  const [upacaraDanTenda, setUpacaraDanTenda] = useState<Array<any>>();
  const [dokumentasi, setDokumentasi] = useState<Array<any>>();
  const [entertainment, setEntertainment] = useState<Array<any>>();

  //   console.log(params.idPaket);
  const getPaket = async () => {
    try {
      const response = await paketService.detail(params?.idPaket);
      //   console.log("response", response?.data);
      setPaket(response?.data);
      let listDekorasi = response?.data?.dekorasi;
      let trimDekorasi = listDekorasi.trim();
      const descDekorasi = trimDekorasi.split("\r\n");
      setDekorasi(descDekorasi);

      let listMakeup = response?.data?.makeup_dan_busana;
      let trimMakeup = listMakeup.trim();
      const descMakeup = trimMakeup.split("\r\n");
      setMakeup(descMakeup);

      let listUpacara = response?.data?.upacara_dan_tenda;
      let trimUpacara = listUpacara.trim();
      const descUpacara = trimUpacara.split("\r\n");
      setUpacaraDanTenda(descUpacara);

      let listDokumentasi = response?.data?.dokumentasi;
      let trimDokumentasi = listDokumentasi.trim();
      const descDokumentasi = trimDokumentasi.split("\r\n");
      setDokumentasi(descDokumentasi);

      let listEntertainment = response?.data?.entertainment;
      let trimEntertainment = listEntertainment.trim();
      const descEntertainment = trimEntertainment.split("\r\n");
      setEntertainment(descEntertainment);
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
      <div className="container mx-auto mt-24 px-6 md:px-0">
        <h1 className="text-center text-4xl">Buat Pesanan</h1>
        <div className="mt-12 grid grid-cols-2 gap-2">
          <div className="w-full">
            <img
              className="w-11/12 object-cover"
              src={
                paket?.gambar
                  ? `http://localhost/fullstack-wijaya-wedding-github-amin/backend/uploads/image/paket/${paket?.gambar}`
                  : `/assets/img/dummy-paket-wedding.png`
              }
              alt={paket?.gambar}
            />
            <div>
              <h2 className="font-bold text-3xl capitalize mt-2">
                {paket?.kategori === "hotel"
                  ? paket?.hotel_detail.nama
                  : paket?.kategori}
              </h2>
              <p className="font-bold text-xl capitalize">{paket?.nama}</p>
              <p className="font-bold text-xl capitalize">
                {" "}
                {convertRupiahs.format(paket?.harga)}
              </p>
            </div>
            <h2 className="font-bold text-xl my-4">Detail Paket : </h2>
            <div className="mt-2">
              <h1 className="font-bold">1. Dekorasi :</h1>
              <ol className="list-decimal  px-8 text-base">
                {dekorasi?.map((list) => <li>{list}</li>)}
              </ol>
            </div>
            <div className="mt-2">
              <h1 className="font-bold">2. Make Up dan Busana :</h1>
              <ol className="list-decimal  px-8 text-base">
                {makeup?.map((list) => <li>{list}</li>)}
              </ol>
            </div>
            {paket?.kategori === "rumahan" ? (
              <div className="mt-2">
                <h1 className="font-bold">3. Upacara dan Tenda :</h1>
                <ol className="list-decimal  px-8 text-base">
                  {upacaraDanTenda?.map((list) => <li>{list}</li>)}
                </ol>
              </div>
            ) : (
              <div className="mt-2">
                <h1 className="font-bold">3. Entertainment :</h1>
                <ol className="list-decimal  px-8 text-base">
                  {entertainment?.map((list) => <li>{list}</li>)}
                </ol>
              </div>
            )}
            <div className="mt-2">
              <h1 className="font-bold">4. Dokumentasi :</h1>
              <ol className="list-decimal  px-8 text-base">
                {dokumentasi?.map((list) => <li>{list}</li>)}
              </ol>
            </div>
          </div>
          <div>
            <form action="" className="border p-6  w-full ">
              <div className="grid md:grid-cols-1 gap-4 text-base font-poppins-medium w-full">
                <div className="w-full ">
                  <label>Tanggal Pemesanan</label>
                  <input
                    type="date"
                    className={`my-2 w-full text-black font-poppins-regular border  border-[#e8bd22] rounded  py-1 `}
                    //   errorMessage={errors?.email?.message}
                    //   {...register("email", { required: "email is required" })}
                    name="username"
                    id="username"
                    // value={username}
                    // disabled={editMode ? false : true}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="w-full ">
                  <label>Alamat</label>
                  <textarea
                    rows={6}
                    className={`my-2 w-full text-black font-poppins-regular border  border-[#e8bd22] rounded  py-1 `}
                    //   errorMessage={errors?.email?.message}
                    //   {...register("email", { required: "email is required" })}
                    name="username"
                    id="username"
                    // value={username}
                    // disabled={editMode ? false : true}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  //   isLoading={isSubmitting}
                  //   shadow="small"
                  //   size="large"
                  //   rounded="rounded"
                  className="  font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                  //   onClick={() => setEditMode(true)}
                >
                  <span className="text-white font-bold">Kirim</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTransaksi;
