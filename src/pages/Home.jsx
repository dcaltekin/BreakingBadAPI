import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosCharacters } from "../redux/charactersSlice";
import Loading from "./Loading";
import { Link } from "react-router-dom";
function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.status);
  const page = useSelector((state) => state.characters.page);
  const lastPage = useSelector((state) => state.characters.lastPage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading === "idle") {
      dispatch(axiosCharacters());
    }
  }, [dispatch, isLoading]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1 className="text-7xl text-center text-white mt-4">Characters</h1>
      {data.map((character, index) => (
        <Link key={index} to={`/detail/${character.char_id}`}>
          <div className="sm:block md:inline-block  lg:inline-block ml-2 overflow-hidden hover:scale-110  hover:ease-in hover:duration-300	">
            <img
              className="w-11/12 md:w-72 lg:w-72 max-h-60 mt-8 mx-2"
              src={character.img}
              alt={character.name}
            />
            <div className="text-center text-white w-11/12 md:w-72 lg:w-72 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 p-4">
              {character.name}
            </div>
          </div>
        </Link>
      ))}
      {console.log(data)}
      <div className="p-12 text-center">
        {isLoading === "loading" && <Loading />}
        {lastPage && isLoading !== "loading" && (
          <button
            onClick={() => dispatch(axiosCharacters(page))}
            className="text-3xl inline-block px-12 py-2.5 bg-red-600 text-white leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Load More -{page}-
          </button>
        )}
        {!lastPage && (
          <div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="text-center text-2xl mb-2 w-full inline-block px-12 py-8 bg-blue-600 text-white leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              End of the characters! Scroll to top!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
