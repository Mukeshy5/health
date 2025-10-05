import React from "react";
import { Link } from "react-router-dom";

const HomePop = () => {
  return (
    <>
      <div className="fixed right-0 w-9 h-8 text-center rounded-l-sm  flex bg-gray-300/55 bottom-30 text-3xl z-1000 text-black-600 font-bold cursor-pointer justify-center items-center  hover:text-green-500 transition">
        <Link to={"/"}>
          <p className=" mb-1 text-2xl"> 🏠︎</p>
        </Link>
      </div>
    </>
  );
};

export default HomePop;
