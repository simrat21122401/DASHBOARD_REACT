import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-800 fixed h-full font-serif">
      <div>
        <h1 className="text-2x text-white font-bold m-5">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="m-6 text-white">
        <li className="m-4">
          <i className="fa-solid fa-table-cells mr-3"></i>
          <a href="/">Dashboard</a>
        </li>
        <hr />
        <li className="m-4">
          <i className="fa-solid fa-users mr-3"></i>
          <a href="/">Users</a>
        </li>
        <hr />
        <li className="m-4">
          <i className="fa-brands fa-bitbucket  mr-3"></i>
          <a href="/">Products</a>
        </li>
        <hr />
        <li className="m-4">
          <i className="fa-solid fa-list mr-3 "></i>
          <a href="/">Categories</a>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Sidebar;
