import React, { useEffect, useState } from "react";
import { RegisterOrEditRequest, User } from "../../types";
import { authService } from "../../services";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

// enum JenisKelaminEnum {
//     "L"
// }
const Profile: React.FC = () => {
  const [user, setUser] = useState<User>();
  const profilUser = useSelector((state: any) => state.user);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [namaLengkap, setNamaLengkap] = useState<string>("");
  const [jenisKelamin, setJenisKelamin] = useState<string>("");
  const [tanggalLahir, setTanggalLahir] = useState<string>("");
  const [noHp, setNoHp] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editPasswordMode, setEditPasswordMode] = useState<boolean>(false);

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

  const edit = async (id: any) => {
    try {
      const request: RegisterOrEditRequest = {
        username: username,
        // password: password,
        nama_lengkap: namaLengkap,
        jenis_kelamin: jenisKelamin,
        tgl_lahir: tanggalLahir,
        no_telepon: noHp,
      };

      console.log("request", request);
      const response = await authService.update(request, id);

      if (response) {
        setEditMode(false);
        toast.success("Selamat, Anda berhasil update profil");
        console.log("responseny", response);
      }
    } catch (error: any) {
      // toast.error(error);
      console.log("errorx", error);
    }
  };

  const editPassword = async (id: any) => {
    try {
      const request: RegisterOrEditRequest = {
        password: password,
      };

      console.log("request", request);
      const response = await authService.update(request, id);

      if (response) {
        setEditPasswordMode(false);
        setPassword("");
        toast.success("Selamat, Anda berhasil mengubah password");
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  useEffect(() => {
    getDetailUser();
    // console.log({ paket });
  }, []);
  return (
    <>
      <div className="bg-[#F7F3EF] text-[#9D6A42]">
        <div className="container mx-auto py-32 px-6 md:px-0">
          <h1 className="text-center text-4xl">Profile</h1>
          <div className="mt-6 w-full justify-center flex ">
            <form
              className="border p-6  w-3/4 bg-white"
              // onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-4 text-base font-poppins-medium ">
                <div className="w-full ">
                  <h2>Username</h2>
                  <input
                    className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
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
                  <div className="flex items-center gap-2">
                    <input
                      type="password"
                      className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
                        editPasswordMode ? "bg-white" : "bg-gray-200"
                      }`}
                      //   errorMessage={errors?.password?.message}
                      //   {...register("password", { required: "password is required" })}
                      name="password"
                      id="password"
                      disabled={editPasswordMode ? false : true}
                      //   value={password}
                      //   onChange={(e) => setPassword(e.target.value)}
                    />
                    {editPasswordMode ? (
                      <button
                        type="button"
                        //   isLoading={isSubmitting}
                        //   shadow="small"
                        //   size="large"
                        //   rounded="rounded"
                        className="w-2/4 font-poppins-bold text-[16px] bg-[#9D6A42] rounded py-1"
                        onClick={() => editPassword(user?.id)}
                      >
                        <span className="text-white font-bold">Submit</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-2/4 font-poppins-bold text-[16px] bg-[#9D6A42] rounded py-1"
                        onClick={() => setEditPasswordMode(true)}
                      >
                        <span className="text-white font-bold">
                          Ubah Password
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <h2>Nama Lengkap</h2>
                  <input
                    type="text"
                    className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
                      editMode ? "bg-white" : "bg-gray-200"
                    }`}
                    //   errorMessage={errors?.password?.message}
                    //   {...register("password", { required: "password is required" })}
                    name="password"
                    id="password"
                    disabled={editMode ? false : true}
                    value={namaLengkap}
                    onChange={(e) => setNamaLengkap(e.target.value)}
                  />
                </div>
                <div>
                  <h2>Jenis Kelamin</h2>
                  {/* <input
                  type="text"
                  className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
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
                    onChange={(e) => setJenisKelamin(e.target.value)}
                    value={jenisKelamin}
                    className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
                      editMode ? "bg-white" : "bg-gray-200"
                    }`}
                    disabled={editMode ? false : true}
                  >
                    <option value="L">Laki-Laki</option>
                    <option value="P"> Perempuan</option>

                    {/* {jenisKelamin === "L" ? (
                    <>
                      <option value="L">Laki-Laki</option>
                      <option value="P"> Perempuan</option>
                    </>
                  ) : (
                    <>
                      <option value="P">Perempuan</option>
                      <option value="L">Laki-Laki</option>
                    </>
                  )} */}
                  </select>
                </div>
                <div>
                  <h2>Tanggal Lahir</h2>
                  <input
                    type="date"
                    className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
                      editMode ? "bg-white" : "bg-gray-200"
                    }`}
                    //   errorMessage={errors?.password?.message}
                    //   {...register("password", { required: "password is required" })}
                    name="password"
                    disabled={editMode ? false : true}
                    id="password"
                    value={tanggalLahir}
                    onChange={(e) => setTanggalLahir(e.target.value)}
                  />
                </div>
                <div>
                  <h2>No HP</h2>
                  <input
                    type="text"
                    className={`my-2  w-full text-black font-poppins-regular border  border-[#9D6A42] rounded px-2 py-1 ${
                      editMode ? "bg-white" : "bg-gray-200"
                    }`}
                    //   errorMessage={errors?.password?.message}
                    //   {...register("password", { required: "password is required" })}
                    name="password"
                    disabled={editMode ? false : true}
                    id="password"
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
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
                        className="mt-3 w-1/4 font-poppins-bold text-[16px] border border-[#9D6A42] bg-white rounded py-2 "
                        onClick={() => setEditMode(false)}
                      >
                        <span className="text-[#9D6A42] font-bold">Batal</span>
                      </button>
                      <button
                        type="button"
                        //   isLoading={isSubmitting}
                        //   shadow="small"
                        //   size="large"
                        //   rounded="rounded"
                        className="mt-3 w-2/4 font-poppins-bold text-[16px] bg-[#9D6A42] rounded py-2"
                        onClick={() => edit(user?.id)}
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
                    className="mt-3 w-2/4 font-poppins-bold text-[16px] bg-[#9D6A42] rounded py-2"
                    onClick={() => setEditMode(true)}
                  >
                    <span className="text-white font-bold">Edit</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
