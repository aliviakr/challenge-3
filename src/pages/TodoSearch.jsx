import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContex";
import CardTask from "../components/CardTask";
import SearchAddTask from "../components/SearchAddTask";
import FilterTask from "../components/FilterTask";
import { useNavigate } from "react-router-dom";

const TodoSearch = () => {
  const router = useNavigate();
  const { datas, setDatas, setInput, setIsEditId } = useContext(TodoContext);

  const [newDatas, setNewDatas] = useState(datas);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const handleFilterComplete = () => {
    const updateDatas = datas.filter((data) => data.complete === true);
    setNewDatas(updateDatas);
  };

  const handleFilterUncomplete = () => {
    const updateDatas = datas.filter((data) => data.complete === false);
    setNewDatas(updateDatas);
  };

  const handleFilterAll = () => {
    setNewDatas(datas);
  };

  const handleSearch = () => {
    const updateDatas = datas.filter((data) =>
      data.task.toLowerCase().includes(search.toLowerCase()),
    );
    setIsSearch(true);
    setNewDatas(updateDatas);
  };

  const handleDeleteTask = (id) => {
    const updateDatas = datas.filter((data) => data.id !== id);
    setDatas(updateDatas);
    setNewDatas(updateDatas);
  };

  const handleUnchecked = (id) => {
    const updateDatas = datas.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          complete: !data.complete,
        };
      }
      return data;
    });
    setDatas(updateDatas);
    setNewDatas(updateDatas);
  };

  const handleDeleteDoneTask = () => {
    const updateDatas = datas.filter((data) => data.complete === false);
    setDatas(updateDatas);
    setNewDatas(updateDatas);
  };

  const handleDeleteAllTask = () => {
    setDatas([]);
    setNewDatas([]);
  };

  const handleEditTask = (id) => {
    const updateDatas = datas.find((data) => data.id === id);
    setInput(updateDatas.task);
    setIsEditId(updateDatas.id);
    router("/add");
  };

  return (
    <div className="container mx-auto my-5">
      <h1 className="mb-5 text-center text-4xl font-bold">Todo Search</h1>
      <SearchAddTask
        handleSearch={handleSearch}
        setSearch={setSearch}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        datas={datas}
        setNewDatas={setNewDatas}
        search={search}
      />

      <FilterTask
        handleFilterComplete={handleFilterComplete}
        handleFilterUncomplete={handleFilterUncomplete}
        handleFilterAll={handleFilterAll}
      />

      <div className="my-5 flex flex-col gap-2">
        {newDatas?.map((data) => (
          <CardTask
            key={data.id}
            data={data}
            handleDeleteTask={handleDeleteTask}
            handleUnchecked={handleUnchecked}
            handleEditTask={handleEditTask}
          />
        ))}
      </div>

      {newDatas.length !== 0 ? (
        <div className="grid grid-cols-2 gap-5">
          <button
            className="rounded-md bg-red-500 p-2 text-white"
            onClick={() => handleDeleteDoneTask()}
          >
            Delete done tasks
          </button>
          <button
            className="rounded-md bg-red-500 p-2 text-white"
            onClick={() => handleDeleteAllTask()}
          >
            Delete all tasks
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <p className="text-2xl font-semibold">There is no task!</p>
        </div>
      )}
    </div>
  );
};

export default TodoSearch;
