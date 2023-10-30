import React, { useEffect, useState } from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { Table } from "flowbite-react";
import { User } from "../../types";
import { authService, storageService } from "../../services";
import { useSelector } from "react-redux";

// enum JenisKelaminEnum {
//     "L"
// }
const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();
  const token = storageService.getToken();
  const profilUser = useSelector((state: any) => state.user);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [namaLengkap, setNamaLengkap] = useState<string>("");
  const [jenisKelamin, setJenisKelamin] = useState<string>("");
  const [tanggalLahir, setTanggalLahir] = useState<string>("");
  const [noHp, setNoHp] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);

  //   const rev = ReverseMd5({
  //     lettersUpper: false,
  //     lettersLower: true,
  //     numbers: true,
  //     special: false,
  //     whitespace: true,
  //     maxLen: 12,
  //   });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDetailUser = async () => {
    try {
      const response = await authService.profile(profilUser.id);
      console.log("response", response?.data);
      setUser(response?.data);
      setUsername(response?.data?.username);
      setPassword(response?.data?.password);
      setNamaLengkap(response?.data?.nama_lengkap);
      setJenisKelamin(response?.data?.jenis_kelamin);
      setTanggalLahir(response?.data?.tgl_lahir);
      setNoHp(response?.data?.no_telepon);

      //   console.log("decode", rev(response?.data));
      // response?.data.map((paket: any) => console.log(paket?.data));
      // console.log("response", response.data.data);
      // console.log(response.data.username)
      // console.log("responpetugas",(petugas))
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getDetailUser();
    // console.log({ paket });
  }, []);
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
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.email?.message}
                  //   {...register("email", { required: "email is required" })}
                  name="username"
                  id="username"
                  value={username}
                  disabled={editMode ? false : true}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <h2>Password</h2>
                <input
                  type="password"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  disabled={editMode ? false : true}
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>Nama Lengkap</h2>
                <input
                  type="text"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  disabled={editMode ? false : true}
                  value={namaLengkap}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>Jenis Kelamin</h2>
                {/* <input
                  type="text"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  id="password"
                  value={jenisKelamin}
                  //   onChange={(e) => setPassword(e.target.value)}
                /> */}
                <select
                  name="jenisKelamin"
                  //   onChange={(e) => setStatus(JSON.parse(e.target.value))}
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  disabled={editMode ? false : true}
                >
                  {jenisKelamin === "L" ? (
                    <>
                      <option value="L">Laki-Laki</option>
                      <option value="P"> Perempuan</option>
                    </>
                  ) : (
                    <>
                      <option value="P">Perempuan</option>
                      <option value="L">Laki-Laki</option>
                    </>
                  )}
                </select>
              </div>
              <div>
                <h2>Tanggal Lahir</h2>
                <input
                  type="text"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  disabled={editMode ? false : true}
                  id="password"
                  value={tanggalLahir}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <h2>No HP</h2>
                <input
                  type="text"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1 ${
                    editMode ? "bg-white" : "bg-gray-200"
                  }`}
                  //   errorMessage={errors?.password?.message}
                  //   {...register("password", { required: "password is required" })}
                  name="password"
                  disabled={editMode ? false : true}
                  id="password"
                  value={noHp}
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="my-4 flex justify-center">
              {editMode ? (
                <>
                  <div className="w-3/4 gap-4 flex justify-center">
                    <button
                      type="button"
                      //   isLoading={isSubmitting}
                      //   shadow="small"
                      //   size="large"
                      //   rounded="rounded"
                      className="mt-3 w-1/4 font-poppins-bold text-[16px] border border-[#e8bd22] bg-white rounded py-2 "
                      onClick={() => setEditMode(false)}
                    >
                      <span className="text-[#e8bd22] font-bold">Batal</span>
                    </button>
                    <button
                      type="button"
                      //   isLoading={isSubmitting}
                      //   shadow="small"
                      //   size="large"
                      //   rounded="rounded"
                      className="mt-3 w-2/4 font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                      onClick={() => setEditMode(true)}
                    >
                      <span className="text-white font-bold">Submit</span>
                    </button>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  //   isLoading={isSubmitting}
                  //   shadow="small"
                  //   size="large"
                  //   rounded="rounded"
                  className="mt-3 w-2/4 font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                  onClick={() => setEditMode(true)}
                >
                  <span className="text-white font-bold">Edit</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
