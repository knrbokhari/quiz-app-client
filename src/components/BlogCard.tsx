import Image from "next/image";
import React from "react";
import image from "../../public/image/Pasted image.png";

const BlogCard = () => {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5">
        <div className="p-5">
          <Image
            src={image}
            layout="responsive"
            alt="block-image"
            height={400}
            width={200}
            className="mb-3 cursor-pointer"
          />
          <h5 className="text-gray-800 font-bold text-xl mb-2 cursor-pointer">
            Even the all-powerful Pointing has no control about
          </h5>
          <p className="font-normal text-gray-700">07 July 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
