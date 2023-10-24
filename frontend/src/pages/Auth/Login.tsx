export default function Login() {
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
              // onChange={(e) => setUsername(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
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
                // onClick={() => login()}
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
