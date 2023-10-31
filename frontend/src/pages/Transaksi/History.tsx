import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Transaksi } from "../../types";
import { transaksiService } from "../../services";
import { useSelector } from "react-redux";

const History: React.FC = () => {
  const [list, setList] = useState<Array<Transaksi>>([]);
  const profilUser = useSelector((state: any) => state.user);

  const getTransaksi = async () => {
    try {
      const response = await transaksiService.list(profilUser.id);
      // console.log("response", response?.data);
      setList(response?.data?.data);
      // response?.data.map((paket: any) => console.log(paket?.data));
      // console.log("response", response.data.data);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getTransaksi();
    // console.log({ paket });
  });
  return (
    <>
      <div className="container mx-auto mt-32 px-6 md:px-0">
        <h1 className="text-center text-4xl">History Transaksi</h1>
        <div className="mt-6 w-full bg-red-200 relative overflow-x-auto  ">
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
                      className="font-bold text-[#e8bd22] bg-white border border-[#e8bd22] py-2 lg:w-2/4 w-full text-sm"
                      // href="/tables"
                    >
                      <p>Detail</p>
                    </button>
                    {transaksi.status === "Menunggu Pembayaran" ? (
                      <button
                        className="font-bold bg-[#e8bd22] text-white  py-2 px-1 w-full text-sm"
                        // href="/tables"
                      >
                        <p>Bayar Sekarang</p>
                      </button>
                    ) : (
                      <button
                        className="font-bold bg-[#e8bd22] text-white  py-2 px-1 w-full text-sm"
                        // href="/tables"
                      >
                        <p>Bukti Pembayaran</p>
                      </button>
                    )}
                  </Table.Cell>
                  {/* <Table.Cell></Table.Cell> */}
                </Table.Row>
              ))}
            </Table.Body>
            {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple MacBook Pro 17"
                </Table.Cell>
                <Table.Cell>Sliver</Table.Cell>
                <Table.Cell>Laptop</Table.Cell>
                <Table.Cell>$2999</Table.Cell>
                <Table.Cell>
                  <a
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                  >
                    <p>Edit</p>
                  </a>
                </Table.Cell>
                <Table.Cell>
                  <a
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                  >
                    <p>Edit</p>
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body> */}
          </Table>
        </div>
      </div>
    </>
  );
};

export default History;
