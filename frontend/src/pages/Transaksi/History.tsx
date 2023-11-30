import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Paket, Transaksi } from "../../types";
import { paketService, storageService, transaksiService } from "../../services";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const History: React.FC = () => {
  const [list, setList] = useState<Array<Transaksi>>([]);
  const profilUser = useSelector((state: any) => state.user);
  const [detailPaket, setDetailPaket] = useState<Paket>();
  const [showModal, setShowModal] = useState(false);
  const [showBuktiPembayaran, setShowBuktiPembayaran] = useState(false);
  const [showUploadPembayaran, setShowUploadPembayaran] = useState(false);
  const [detailTransaksi, setDetailTransaksi] = useState<Transaksi>();
  const [dekorasi, setDekorasi] = useState<Array<any>>();
  const [makeup, setMakeup] = useState<Array<any>>();
  const [upacaraDanTenda, setUpacaraDanTenda] = useState<Array<any>>();
  const [dokumentasi, setDokumentasi] = useState<Array<any>>();
  const [entertainment, setEntertainment] = useState<Array<any>>();
  const [buktiPembayaran, setBuktiPembayaran] = useState<any>();
  const [idTransaksi, setIdTransaksi] = useState<any>();
  const userToken = storageService.getToken() || "";

  const getTransaksi = async () => {
    try {
      const response = await transaksiService.list(profilUser.id);
      console.log("response", response?.data);
      setList(response?.data?.data);
      // response?.data.map((paket: any) => console.log(paket?.data));
      // console.log("response", response.data.data);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDetailTransaksi = async (id: number) => {
    try {
      const response = await transaksiService.detail(id);
      console.log("response", response?.data);
      setDetailTransaksi(response?.data);
      setShowBuktiPembayaran(true);
      // response?.data.map((paket: any) => console.log(paket?.data));
      // console.log("response", response.data.data);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDetailPaket = async (id: number) => {
    try {
      // setLoading(true);
      console.log("id", id);
      const response = await paketService.detail(id);
      // console.log("response", response?.data);
      setDetailPaket(response?.data);

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

      setShowModal(true);

      // console.log("desc", desc);
      // setDekorasi(desc);
      // console.log("detail", response?.data?.data);
      // setLoading(false);
    } catch (error) {}
  };

  const uploadBukti = () => {
    // console.log({ idTransaksi });
    // console.log("bukti", buktiPembayaran.target.files);
    var files = buktiPembayaran.target.files;
    console.log("files", files);

    let form = new FormData();

    Object.values(files).forEach((fileupload: any) => {
      form.append("bukti_pembayaran", fileupload);
    });

    axios
      .post(
        "http://localhost/fullstack-wijaya-wedding-github-amin/backend/web/api/transaksi/pembayaran?id=" +
          idTransaksi,
        form,
        {
          headers: {
            Token: userToken,
          },
        }
      )
      .then((res) => {
        let data = res.data.data;
        console.log("image", data);
        toast.success("berhasil");

        // setGetSingle(data);
        // let array = [...getImageDocument];
        // array.push(data.path);
        // // // console.log("arr", array);

        // setGetImageDocument(array);
        // notify();
        // // // console.log("getImage", getImageDocument);
      })
      .catch((err) => {
        console.log("gagal", err);
        // notifyGagal();
      });
  };
  useEffect(() => {
    getTransaksi();
    // console.log({ paket });
  }, []);
  return (
    <>
      <div className="bg-[#F7F3EF] text-[#9D6A42]">
        <div className="container mx-auto py-32 px-6 md:px-0">
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none w-full px-10 ">
                <div className="relative w-full md:w-2/6 mx-auto bg-white ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
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
                    <div className="p-6 h-[70vh] overflow-x-hidden overflow-y-auto">
                      <img
                        className="w-full h-2/4 object-cover"
                        src={
                          detailPaket?.gambar
                            ? `http://localhost/fullstack-wijaya-wedding-github-amin/backend/uploads/image/paket/${detailPaket?.gambar}`
                            : `/assets/img/dummy-paket-wedding.png`
                        }
                        alt={detailPaket?.gambar}
                      />
                      <div className="">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <h1 className="font-bold">1. Dekorasi :</h1>
                          <ol className="list-decimal  px-8 text-base">
                            {dekorasi?.map((list) => <li>{list}</li>)}
                            {/* <li>ss</li>
                            <li>ss</li>
                            <li>ss</li> */}
                          </ol>
                        </p>
                      </div>
                      <div>
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <h1 className="font-bold">2. Make Up dan Busana :</h1>
                          <ol className="list-decimal  px-8 text-base">
                            {makeup?.map((list) => <li>{list}</li>)}
                            {/* <li>ss</li>
                            <li>ss</li>
                            <li>ss</li> */}
                          </ol>
                        </p>
                      </div>
                      {detailPaket?.kategori === "rumahan" ? (
                        <div>
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            <h1 className="font-bold">
                              3. Upacara dan Tenda :
                            </h1>
                            <ol className="list-decimal  px-8 text-base">
                              {upacaraDanTenda?.map((list) => <li>{list}</li>)}
                              {/* <li>ss</li>
                            <li>ss</li>
                            <li>ss</li> */}
                            </ol>
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                            <h1 className="font-bold">3. Entertainment :</h1>
                            <ol className="list-decimal  px-8 text-base">
                              {entertainment?.map((list) => <li>{list}</li>)}
                              {/* <li>ss</li>
                            <li>ss</li>
                            <li>ss</li> */}
                            </ol>
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          <h1 className="font-bold">4. Dokumentasi :</h1>
                          <ol className="list-decimal  px-8 text-base">
                            {dokumentasi?.map((list) => <li>{list}</li>)}
                            {/* <li>ss</li>
                            <li>ss</li>
                            <li>ss</li> */}
                          </ol>
                        </p>
                      </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white bg-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {showBuktiPembayaran ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none w-full px-10 ">
                <div className="relative w-full md:w-2/6 mx-auto bg-white ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {/* {detailPaket?.nama} */}
                        Bukti Pembayaran
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
                    <div className="p-6 h-[70vh] overflow-x-hidden overflow-y-auto">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          detailTransaksi?.bukti_pembayaran
                            ? `http://localhost/fullstack-wijaya-wedding-github-amin/backend/uploads/image/paket/${detailTransaksi?.bukti_pembayaran}`
                            : `/../assets/img/dummy-paket-wedding.png`
                        }
                        alt={detailTransaksi?.bukti_pembayaran}
                      />
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white bg-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md"
                        type="button"
                        onClick={() => setShowBuktiPembayaran(false)}
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {showUploadPembayaran ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none w-full px-10 ">
                <div className="relative w-full md:w-2/6 mx-auto bg-white ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        {/* {detailPaket?.nama} */}
                        Upload Bukti Pembayaran
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
                    <div className="p-6 overflow-x-hidden overflow-y-auto">
                      <form action="" className="border p-6  w-full ">
                        <div className="grid md:grid-cols-1 gap-4 text-base font-poppins-medium w-full">
                          <div className="w-full ">
                            <label>Upload Bukti Pembayaran</label>
                            <input
                              type="file"
                              className={`my-2 w-full text-black font-poppins-regular border  border-[#e8bd22] rounded  py-1 `}
                              //   errorMessage={errors?.email?.message}
                              //   {...register("email", { required: "email is required" })}
                              name="buktiPembayaran"
                              id="buktiPembayaran"
                              // value={username}
                              // disabled={editMode ? false : true}
                              onChange={(e) => setBuktiPembayaran(e)}
                            />
                          </div>

                          <button
                            type="button"
                            //   isLoading={isSubmitting}
                            //   shadow="small"
                            //   size="large"
                            //   rounded="rounded"
                            className="  font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                            onClick={() => uploadBukti()}
                          >
                            <span className="text-white font-bold">Kirim</span>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-white bg-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md"
                        type="button"
                        onClick={() => setShowBuktiPembayaran(false)}
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <h1 className="text-center text-4xl">History Transaksi</h1>
          <div className="mt-10 w-full  relative overflow-x-auto  ">
            <Table
              hoverable
              className=""
              // onScroll=
            >
              <Table.Head>
                <Table.HeadCell>Nomor Pemesanan</Table.HeadCell>
                <Table.HeadCell>Tanggal Pemesanan</Table.HeadCell>
                <Table.HeadCell>Alamat Pemesanan</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell>
                  <span className="">Action</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {list.map((transaksi) => (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {transaksi.id}
                    </Table.Cell>
                    <Table.Cell>{transaksi.tgl_pemesanan}</Table.Cell>
                    <Table.Cell>{transaksi.alamat_pemesanan}</Table.Cell>
                    <Table.Cell>{transaksi.status}</Table.Cell>
                    <Table.Cell className="flex flex-col lg:flex-row gap-2 w-full">
                      <button
                        className={`font-bold text-[#e8bd22] bg-white border border-[#e8bd22] py-2  w-full ${
                          transaksi.status === "Menunggu Konfirmasi Pesanan"
                            ? "w-full"
                            : "lg:w-2/4"
                        } text-sm`}
                        // href="/tables"
                        onClick={() =>
                          getDetailPaket(parseInt(transaksi?.paket_id))
                        }
                      >
                        <p>Detail Paket</p>
                      </button>
                      {transaksi.status === "Menunggu Pembayaran" ? (
                        <button
                          className="font-bold bg-green-500 text-white  py-2 px-1 w-full text-sm"
                          // href="/tables"
                          onClick={() => {
                            setShowUploadPembayaran(true);
                            setIdTransaksi(transaksi?.id);
                          }}
                        >
                          <p>Bayar Sekarang</p>
                        </button>
                      ) : transaksi.status === "Disetujui" ||
                        transaksi.status ===
                          "Menunggu Konfirmasi Pembayaran" ? (
                        <button
                          className="font-bold bg-[#e8bd22] text-white  py-2 px-1 w-full text-sm"
                          // href="/tables"
                          onClick={() => getDetailTransaksi(transaksi.id)}
                        >
                          <p>Bukti Pembayaran</p>
                        </button>
                      ) : null}
                    </Table.Cell>
                    {/* <Table.Cell></Table.Cell> */}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
