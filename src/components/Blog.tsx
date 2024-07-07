import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="container mx-auto mb-14">
      <h2 className="mt-12 mb-8 text-4xl tracking-tight font-extrabold text-center text-[#1D4645] ">
        Check Latest Articles
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
