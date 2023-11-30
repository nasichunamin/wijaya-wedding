import { useState } from "react";
import toast from "react-hot-toast";
import { RegisterOrEditRequest } from "../../types";
import { authService } from "../../services";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [namaLengkap, setNamaLengkap] = useState<string>("");
  const [jenisKelamin, setJenisKelamin] = useState<string>("");
  const [tanggalLahir, setTanggalLahir] = useState<string>("");
  const [noTelepon, setNoTelepon] = useState<string>("");

  const register = async () => {
    const data = {
      username,
      password,
      namaLengkap,
      jenisKelamin,
      tanggalLahir,
      noTelepon,
    };

    if (username === "") {
      toast.error("Username tidak boleh kosong");
    } else if (password === "") {
      toast.error("Password tidak boleh kosong");
    } else if (namaLengkap === "") {
      toast.error("Nama Lengkap tidak boleh kosong");
    } else if (jenisKelamin === "") {
      toast.error("Jenis Kelamin tidak boleh kosong");
    } else if (tanggalLahir === "") {
      toast.error("Tanggal Lahir tidak boleh kosong");
    } else if (noTelepon === "") {
      toast.error("No. Telepon tidak boleh kosong");
    } else {
      // console.log({ data });
      const request: RegisterOrEditRequest = {
        username: username,
        password: password,
        nama_lengkap: namaLengkap,
        jenis_kelamin: jenisKelamin,
        tgl_lahir: tanggalLahir,
        no_telepon: noTelepon,
        role: "customer",
      };

      const response = await authService.register(request);
      if (response) {
        toast.success(
          "Selamat Akun anda berhasil dibuat, silahkan login setelah ini"
        );
        setTimeout(function () {
          document.location.href = "/Login";
        }, 2000);
      }
    }
  };
  return (
    <div className="flex flex-row justify-center h-screen w-screen">
      <div className="flex flex-col  md:px-[114px]  overflow-y-auto h-screen py-16">
        <div className="flex flex-col font-poppins-bold text-[40px] text-black  ">
          <span>Selamat Datang!</span>
          <span>Customer Wijaya Wedding</span>
          <div className="mt-3 text-lg font-poppins-medium text-gray-500 w-[381px]">
            <span>
              Silahkan masuk menggunakan username dan password yang valid
            </span>
          </div>
        </div>
        <div className=" mt-[46px] w-full">
          <form
            className="grid col-span-2 text-base w-full  font-poppins-medium"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <span>Username</span>
            <input
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.email?.message}
              //   {...register("email", { required: "email is required" })}
              name="username"
              id="username"
              // value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Password</span>
            <input
              type="password"
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.password?.message}
              //   {...register("password", { required: "password is required" })}
              name="password"
              id="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Nama Lengkap</span>
            <input
              type="text"
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.password?.message}
              //   {...register("password", { required: "password is required" })}
              name="namaLengkap"
              id="namaLengkap"
              // value={password}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
            <span>Jenis Kelamin</span>
            <select
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              name="jenisKelamin"
              id="jenisKelamin"
              onChange={(e) => setJenisKelamin(e.target.value)}
            >
              <option value="" disabled>
                Pilih Jenis Kelamin
              </option>
              <option value="L">Laki - Laki</option>
              <option value="P">Perempuan</option>
            </select>
            {/* <input
              type="password"
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.password?.message}
              //   {...register("password", { required: "password is required" })}
              name="jenisKelamin"
              id="jenisKelamin"
              // value={password}
              onChange={(e) => setJenisKelamin(e.target.value)}
            /> */}
            <span>Tanggal Lahir</span>
            <input
              type="date"
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.password?.message}
              //   {...register("password", { required: "password is required" })}
              name="tanggalLahir"
              id="tanggalLahir"
              // value={password}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
            <span>No. Telepon</span>
            <input
              type="text"
              className="my-2 bg-white text-black font-poppins-regular border  border-[#e8bd22] rounded px-2 py-1"
              //   errorMessage={errors?.password?.message}
              //   {...register("password", { required: "password is required" })}
              name="noTelepon"
              id="noTelepon"
              // value={password}
              onChange={(e) => setNoTelepon(e.target.value)}
            />
            <div className="my-4 w-full">
              <button
                type="button"
                //   isLoading={isSubmitting}
                //   shadow="small"
                //   size="large"
                //   rounded="rounded"
                className="mt-3 w-full font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                onClick={() => register()}
              >
                <span className="text-white font-bold">Daftar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block  flex-1 h-screen bg-red-100">
        <div className="relative flex flex-1 h-screen">
          <img
            src="/assets/img/bg-login.png"
            alt="about"
            className=" w-full object-cover"
          />
          {/* <img
                src={imgDummy}
                //   width={00}
                alt="Picture of the author"
                objectFit="cover"
                layout={"fill"}
              /> */}
        </div>
      </div>
    </div>
  );
}
