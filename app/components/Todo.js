import React from 'react'

const Todo = () => {
    return (
        <>
            <div>
                <h1 className="p-5 bg-slate-600 text-slate-50 text-3xl font-bold text-center">
                    To-Do List
                </h1>
                <form
                    className="flex justify-center gap-5 py-10"
                >
                    <input
                        type="text"
                        name=""
                        placeholder="Enter title"
                        className="border-slate-400 border-2 rounded-lg py-2 px-3"
                    />
                    <input
                        type="text"
                        name=""
                        placeholder="Enter description"
                        className="border-slate-400 border-2 rounded-lg py-2 px-3"
                    />
                    <button className="bg-slate-700 text-slate-50 py-2 px-4 font-semibold rounded-lg">
                        Add task
                    </button>
                </form>

                <div className="bg-slate-300 p-5 text-center">
                    <ul></ul>
                </div>
            </div>
        </>

    )
}

export default Todo