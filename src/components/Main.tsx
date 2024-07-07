import React from "react";
import image from "../../public/image/home.png";
import Image from "next/image";

const Main = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="sm:flex justify-between items-center">
        <h1 className="text-center my-10  text-[#1D4645] sm:w-1/2 lg:text-left text-3xl sm:text-3xl lg:text-6xl text-nowrap font-bold">
          Welcome to Our <br /> Online Quiz!
        </h1>
        <div className=" hidden sm:block sm:w-1/2">
          <Image
            src={image}
            layout="responsive"
            alt="block-image"
            height={400}
            width={200}
            className=""
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        {/* <div className="text-xl text-white">
          NUMBER OF ACTIVE USERS RIGHT NOW
        </div>
        <span className="text-2xl font-bold text-white">20,000+</span> */}
      </div>
    </div>
  );
};

export default Main;
