import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosCharacters } from "../redux/charactersSlice";

function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <div className="text-5xl text-center mt-96">YÜKLENİYOR...</div>;
  }

  return (
    <div>
      <h1 className="text-7xl text-center text-white mt-4">Characters</h1>
      {data.map((character) => (
        <div
          className="sm:block md:inline-block  lg:inline-block ml-3 overflow-hidden hover:scale-110  hover:ease-in duration-300	"
          key={character.char_id}
        >
          <img
            className="w-11/12 md:w-72 lg:w-72 max-h-60 mt-8 mx-2"
            src={character.img}
            alt={character.name}
          />
          <div className="text-center w-11/12 md:w-72 lg:w-72 mx-2 bg-gradient-to-r from-purple-500 to-pink-500 p-4">
            {character.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
