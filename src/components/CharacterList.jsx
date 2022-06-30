import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CharacterList() {
  const data = useSelector((state) => state.characters.items);
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
    </div>
  );
}

export default CharacterList;
