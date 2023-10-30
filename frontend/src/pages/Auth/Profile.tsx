import React, { useEffect, useState } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Table } from "flowbite-react";

const Profile: React.FC = () => {
  //   const [paket, setPaket] = useState<Array<Paket>>([]);
  //   const getPaket = async () => {
  //     try {
  //       const response = await paketService.location();
  //       // console.log("response", response?.data);
  //       setPaket(response?.data);
  //       // response?.data.map((paket: any) => console.log(paket?.data));
  //       // console.log("response", response.data.data);
  //       // console.log(response.data.username)
  //       // console.log("responpetugas",(petugas))
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  useEffect(() => {
    // getPaket();
    // console.log({ paket });
  });
  return (
    <>
      <div className="container mx-auto mt-32 px-6 md:px-0">
        <h1 className="text-center text-4xl">Profile</h1>
        <div className="mt-6 w-full justify-center flex ">
          <form
            className="border p-6  w-3/4 "
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 gap-4 text-base font-poppins-medium ">
              <div className="w-full ">
                <h2>Username</h2>
                <input
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.email?.message}
                  //   {...register("email", { required: "email is required" })}
                  name="username"
                  id="username"
                  // value={username}
                  //   onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <h2>Password</h2>
                <input
                  type="password"
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  // value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>Nama Lengkap</h2>
                <input
                  type="password"
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  // value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>Jenis Kelamin</h2>
                <input
                  type="password"
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  // value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>Tanggal Lahir</h2>
                <input
                  type="password"
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  // value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>No HP</h2>
                <input
                  type="password"
                  className="my-2 bg-white w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  // value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 flex justify-center">
              <button
                type="button"
                //   isLoading={isSubmitting}
                //   shadow="small"
                //   size="large"
                //   rounded="rounded"
                className="mt-3 w-2/4 font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                // onClick={() => login()}
              >
                <span className="text-white font-bold">Edit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
