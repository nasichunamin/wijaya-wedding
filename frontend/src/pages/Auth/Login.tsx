import { useState } from "react";
import toast from "react-hot-toast";
import { LoginRequest } from "../../types";
import { authService, storageService } from "../../services";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    console.log({ username });
    console.log({ password });

    if (username === "") {
      toast.error("Masukkan Username dulu");
    } else if (password === "") {
      toast.error("Masukkan Password dulu");
    } else {
      // setIsLoadingScreen(true);

      const request: LoginRequest = {
        username: username,
        password: password,
      };
      authService
        .login(request)
        .then((resp) => {
          console.log("resp", resp);
          const response = resp.data;
          storageService.setToken(resp.data.data.token);
          // dispatch(setUser(resp.data));
          if (response) {
            // var tes: any = setTimeout(
            //   function () {
            //     <Loading size={60} />;
            //   }.bind(Loading),
            //   2000
            // );
            // if (tes) {
            if (response.data.role === "customer") {
              // navigation("/admin");
              // setIsLoadingScreen(false);
              document.location.href = "/";
            } else {
              // const close = setIsLoadingScreen(false);
              // if (() => close) {
              toast.error("Data tidak ditemukan");
              document.location.href = `/login`;

              // toast.
              // }
            }
            // }
          }
        })
        .catch((error) => {
          // let erorLogin =
          if (error) {
            // setIsLoadingScreen(false);
            // const close = setIsLoadingScreen(false);
            // if (() => close) {
            document.location.href = `/login`;

            toast.error(error.response.data);
            // toast.
            // }
            // location.href = "/";
          }
        });
    }
  };

  return (
    <div className="flex flex-row justify-center h-screen w-screen">
      <div className="flex flex-col  md:px-[114px]">
        <div className="flex flex-row mt-24 mb-[42px]">
          <div className="flex flex-col justify-center ml-[8px]">
            <div className="text-black text-[24px] font-poppins-bold">
              Wijaya Wedding
            </div>
          </div>
        </div>

        <div className="flex flex-col font-poppins-bold text-[40px] text-black">
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
            <div className="my-4 w-full">
              <div>
                <span>Tidak Punya Akun ? </span>
                <a href="/register" className="text-[#e8bd22] font-bold">
                  Silahkan Daftar
                </a>
              </div>
              <button
                type="button"
                //   isLoading={isSubmitting}
                //   shadow="small"
                //   size="large"
                //   rounded="rounded"
                className="mt-3 w-full font-poppins-bold text-[16px] bg-[#e8bd22] rounded py-2"
                onClick={() => login()}
              >
                <span className="text-white font-bold">Masuk</span>
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
