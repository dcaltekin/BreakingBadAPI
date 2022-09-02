import React from "react";

import { useSelector } from "react-redux";

function CharacterList() {
  const data = useSelector((state) => state.characters.items);
  return (
    <div>
      <h1 className="text-4xl text-center text-black mt-4">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center container mx-auto">
        {data.map((character, index) => (
          <div key={index} className="text-center w-full  bg-white  shadow-md">
            <div className="flex justify-center">
              <a href={`/detail/${character.char_id}`}>
                <img
                  className=" p-8 rounded-full w-60 h-60"
                  src={character.img}
                  alt="pro"
                />
              </a>
            </div>

            <div className="pb-5">
              <a href={`/detail/${character.char_id}`}>
                <h5 className="text-base lg:text-xl font-semibold tracking-tight text-gray-900">
                  {character.name}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>

      {console.log(data)}
    </div>
  );
}

export default CharacterList;
