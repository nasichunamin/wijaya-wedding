import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D9D9D9] mt-20">
      <div className="container mx-auto py-6 lg:pt-16 lg:pb-8 text-black ">
        <div className="mt-6 grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-3 w-full  px-6 md:px-10">
          <div className="lg:col-start-1 lg:col-span-2 w-3/4">
            <div className="flex flex-col gap-2">
              <img src="/assets/img/wijaya-wedding.png" width={150} height={100} alt="" />
              <h2 className="font-poppins-regular text-sm md:text-base mt-1">
                Did you come here for something in particular or just general Riker
              </h2>
            </div>
          </div>

          <div className="lg:col-end-4">
            <h2 className="font-poppins-bold text-base uppercase ">Get In Touch</h2>
            <a href="mailto:admin@wijayawedding.com" className="text-black" target="__blank">
              <div className="mt-2 flex font-poppins-medium text-base  ">
                <div className="text-xl pr-2 pt-1">
                  <FaLocationDot />
                </div>
                <div>
                  <p>Jl Alamat</p>
                </div>
              </div>
            </a>
            <a href="mailto:admin@wijayawedding.com" className="text-black" target="__blank">
              <div className="mt-2 flex font-poppins-medium text-base items-center ">
                <div className="text-xl pr-2">
                  <FiMail />
                </div>
                <div>
                  <p>admin@wijayawedding.com</p>
                </div>
              </div>
            </a>
            <a href="https://wa.me/628xxxx" className="text-black" target="__blank">
              <div className="mt-2 flex font-poppins-medium text-base ">
                <div className="text-xl pr-2">
                  <FaWhatsapp />
                </div>
                <div>+621222222 </div>
              </div>
            </a>
          </div>
        </div>
        <hr className="mt-20 mb-8 border-[#E0E0E0] " />
        <span className="block text-center font-poppins-medium text-sm px-6">
          Copyright © 2023 - Wijaya Wedding
        </span>
      </div>
    </footer>
  );
};
export default Footer;
