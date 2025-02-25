"use client"

import React, { useState } from "react";

const page = () => {

  const [title, setTitle ]=useState("");
  const [desc, setDesc ]=useState("");

  const submitHandler =(e)=>{
     e.preventDefault();
     console.log(title)
     console.log(desc)
     setTitle("")
     setDesc("")
  }

  return (
    <>
      <h1 className="text-3xl font-bold p-5 bg-slate-300 text-slate-800 text-center">
        To-Do List
      </h1>
      <form onSubmit={submitHandler} className="flex gap-5 justify-center py-10">
        <input
          type="text"
          name=""
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          placeholder="Enter title"
          className="border-2 border-slate-400 rounded-lg py-2 px-5"
        />
        <input
          type="text"
          name=""
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value)
          }}
          placeholder="Enter description"
          className="border-2 border-slate-400 rounded-lg py-2 px-5"
        />
        <button className="py-2 px-5 bg-slate-800 text-slate-50 font-semibold rounded-lg">
          Add task
        </button>
      </form>
    </>
  );
};

export default page;
