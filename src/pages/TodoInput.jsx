/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContex";
import { BiBookBookmark } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const TodoInput = () => {
  const router = useNavigate();

  const { datas, setDatas, input, setInput, isEditId, setIsEditId } =
    useContext(TodoContext);
  const [_, setNewDatas] = useState(datas);

  const handleAddTask = () => {
    const newTask = {
      id: new Date().getTime().toString(),
      task: input,
      complete: false,
    };
    const updateDatas = [...datas, newTask];
    setDatas(updateDatas);
    setNewDatas(updateDatas);
    setInput("");
    router("/");
  };

  return (
    <div className="container relative mx-auto my-5">
      <h1 className="mb-5 text-center text-4xl font-bold">Todo Input</h1>
      <div className="flex flex-col gap-3 border p-5 ">
        <div className="flex w-full items-center justify-start">
          <BiBookBookmark className="h-9 w-9 rounded-l-md bg-teal-500 p-2 text-white" />
          <input
            placeholder="Input/Edit Todo"
            className="h-9 w-full rounded-r-md border px-2 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="h-9 rounded-md bg-teal-500 px-10 text-lg text-white"
          onClick={() => {
            if (isEditId) {
              const updateDatas = datas.map((data) => {
                if (data.id === isEditId) {
                  return {
                    ...data,
                    task: input,
                  };
                }
                return data;
              });
              setDatas(updateDatas);
              setNewDatas(updateDatas);
              setInput("");
              setIsEditId(null);
              router("/");
            } else {
              handleAddTask();
            }
          }}
        >
          Submit {isEditId ? "Edit" : "Task"}
        </button>
      </div>

      <Link to="/" className="absolute left-0 top-2">
        <IoMdArrowRoundBack className="h-9 w-9 rounded-md bg-teal-500 p-2 text-white" />
      </Link>
    </div>
  );
};

export default TodoInput;
