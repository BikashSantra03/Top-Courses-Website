import React from "react";

function Filter(props) {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function handleCategory(category) {
    setCategory(category);
  }

  return (
    <div className="w-11/12 flex flex-wrap space-x-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50  ${
            category === data.title
              ? "border-2 border-white bg-opacity-60"
              : "border-transparent bg-opacity-40"
          }`}
          key={data.id}
          onClick={() => handleCategory(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
