import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

function Details() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div className="text-center text-3xl mt-8">
          <h2>
            <img
              className="w-11/12 md:w-72 lg:w-72 max-h-60 mt-8 mx-2 block mx-auto mb-8"
              src={char.img}
              alt={char.name}
            />
          </h2>
          <h2>Name: {char.name}</h2>
          <h2>Nickname: {char.nickname}</h2>
          <h2>Occupation: {char.occupation && char.occupation + " "}</h2>
          <h2>Status: {char.status}</h2>
          <h2>Portrayed: {char.portrayed}</h2>
          <h2>Appearance: {char.appearance && char.appearance + " "}</h2>
          {/* <a
            className="text-3xl inline-block px-12 py-2.5 bg-red-600 text-white leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            href="/home"
          >
            Back
          </a> */}
        </div>
      )}
    </div>
  );
}

export default Details;
