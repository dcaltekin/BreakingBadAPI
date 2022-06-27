import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosCharacters } from "../redux/charactersSlice";
import Loading from "./Loading";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const page = useSelector((state) => state.characters.page);
  const lastPage = useSelector((state) => state.characters.lastPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-7xl text-center text-white mt-4">Characters</h1>
      {data.map((character, index) => (
        <div
          className="sm:block md:inline-block  lg:inline-block ml-2 overflow-hidden hover:scale-110  hover:ease-in hover:duration-300	"
          key={index}
        >
          <img
            className="w-11/12 md:w-72 lg:w-72 max-h-60 mt-8 mx-2"
            src={character.img}
            alt={character.birtday}
          />
          <div className="text-center text-white w-11/12 md:w-72 lg:w-72 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 p-4">
            {character.name}
          </div>
        </div>
      ))}
      {console.log(data)}
      <div className="p-12 text-center">
        {isLoading && <Loading />}
        {lastPage && !isLoading && (
          <button
            onClick={() => dispatch(axiosCharacters(page))}
            className="text-3xl inline-block px-12 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Daha Fazla -{page}-
          </button>
        )}
        {!lastPage && (
          <div className="text-center text-5xl">
            Gösterilecek başka karakter kalmamıştır!
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
