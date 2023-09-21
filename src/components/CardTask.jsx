/* eslint-disable react/prop-types */
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const CardTask = ({
  data,
  handleDeleteTask,
  handleUnchecked,
  handleEditTask,
}) => {
  return (
    <div className="flex items-center justify-between rounded-md border p-4">
      <p
        className={`text-xl font-semibold ${
          data.complete && "text-red-500 line-through"
        }`}
      >
        {data.task}
      </p>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="h-6 w-6"
          checked={data.complete}
          onChange={() => handleUnchecked(data.id)}
        />
        <button
          className={`rounded-md p-2 text-white ${
            data.complete ? "bg-amber-500/50" : "bg-amber-500"
          }`}
          onClick={() => handleEditTask(data.id)}
          disabled={data.complete}
        >
          <FiEdit className="h-5 w-5" />
        </button>
        <button
          className="rounded-md bg-red-500 p-2 text-white"
          onClick={() => handleDeleteTask(data.id)}
        >
          <BsTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default CardTask;
