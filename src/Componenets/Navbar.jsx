import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-700 text-center flex justify-evenly h-16 ml-8 fluid-container font-serif ">
        <div className="mt-4  ">
          <input
            type="search"
            placeholder="Search For...."
            className="w-80 h-9 border-3 ml-12 rounded-t-md"
          />
          {/* <i class="fa-solid fa-magnifying-glass p-2 border-2"></i> */}
          <button className="border-2 w-10 p-1 bg-gray-600 text-white rounded-t-md">
            <i className="fa-solid fa-magnifying-glass "></i>
          </button>
        </div>

        <div className="flex gap-5 mt-5 text-white ">
          <i class="fa-regular fa-bell text-lg">
            <button className=" text-red-500">
              <sup>2+</sup>
            </button>
          </i>
          <i class="fa-regular fa-envelope text-lg">
            <button className=" text-red-500">
              <sup>2</sup>
            </button>
          </i>
        </div>
        <div className="mt-5 flex gap-3 text-white text-lg ">
          <h3 className="mt-1">Panda McGee</h3>
          <i class="fa-regular fa-user border-2 rounded-3xl mb-2 p-2 "></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
