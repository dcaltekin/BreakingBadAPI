import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosCharacters } from "../redux/charactersSlice";

function LoadMore() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);
  return (
    <div>
      <button
        onClick={() => dispatch(axiosCharacters(page))}
        className="text-3xl inline-block px-12 py-2.5 bg-red-600 text-white leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Load More -{page}-
      </button>
    </div>
  );
}

export default LoadMore;
