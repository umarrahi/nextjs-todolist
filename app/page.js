import React from "react";

const page = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white bg-black p-4">
          To do list
        </h1>
        <form className="m-10 flex items-center justify-center gap-5">
          <input type="text" className="text-gray-600 border border-gray-800 text-2xl px-4 py-2" />
          <button className="bg-gray-700 text-white font-semibold text-2xl py-2 px-6">Add task</button>
        </form>
      </div>
    </>
  );
};

export default page;
