/* eslint-disable react/prop-types */
const FilterTask = ({
  handleFilterComplete,
  handleFilterUncomplete,
  handleFilterAll,
}) => {
  return (
    <>
      <h1 className="my-5 text-center text-4xl font-bold">TodoList</h1>
      <div className="grid grid-cols-3 gap-12 text-white">
        <button
          className="h-9 rounded-md bg-teal-500 text-lg"
          onClick={() => handleFilterAll()}
        >
          All
        </button>
        <button
          className="h-9 rounded-md bg-teal-500 text-lg"
          onClick={() => handleFilterComplete()}
        >
          Done
        </button>
        <button
          className="h-9 rounded-md bg-teal-500 text-lg"
          onClick={() => handleFilterUncomplete()}
        >
          Todo
        </button>
      </div>
    </>
  );
};

export default FilterTask;
