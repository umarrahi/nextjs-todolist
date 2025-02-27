"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask)
  }

  let renderTask = <h2>Task is not available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="w-5/12 m-auto mb-2">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">{t.title}</h2>
            <p>{t.desc}</p>
            <button onClick={()=>{
              deleteHandler(i)
            }} 
            className="bg-red-400 py-2 px-4 rounded text-red-50 font-semibold">
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div>
        <h1 className="p-5 bg-slate-600 text-slate-50 text-3xl font-bold text-center">
          To-Do List
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex justify-center gap-5 py-10"
        >
          <input
            type="text"
            name=""
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter title"
            className="border-slate-400 border-2 rounded-lg py-2 px-3"
          />
          <input
            type="text"
            name=""
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Enter description"
            className="border-slate-400 border-2 rounded-lg py-2 px-3"
          />
          <button className="bg-slate-700 text-slate-50 py-2 px-4 font-semibold rounded-lg">
            Add task
          </button>
        </form>

        <div className="bg-slate-300 p-5 text-center">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
