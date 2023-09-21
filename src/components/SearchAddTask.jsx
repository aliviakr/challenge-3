/* eslint-disable react/prop-types */
import { BsSearch } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

const SearchAddTask = ({
  handleSearch,
  setSearch,
  isSearch,
  setIsSearch,
  datas,
  setNewDatas,
  search,
}) => {
  return (
    <div className="flex flex-col gap-3 border p-5 ">
      <div className="flex w-[600px] items-center justify-start">
        <BsSearch className="h-9 w-9 rounded-l-md bg-teal-500 p-2 text-white" />
        <input
          placeholder="Search Todo"
          className="h-9 w-full rounded-r-md border px-2 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isSearch && (
          <button
            className="ml-2 rounded-md bg-red-500 p-2 text-lg text-white"
            onClick={() => {
              setIsSearch(false);
              setSearch("");
              setNewDatas(datas);
            }}
          >
            <ImCancelCircle className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="flex justify-between text-white">
        <button
          className="h-9 w-[600px] rounded-md bg-teal-500 text-lg"
          onClick={() => handleSearch()}
        >
          Search
        </button>
        <Link to="/add">
          <button className="h-9 rounded-md bg-teal-500 px-10 text-lg">
            Add new Task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchAddTask;
