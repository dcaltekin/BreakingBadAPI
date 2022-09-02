import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

function Details() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_URL}characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_URL}quotes`)
      .then((res) => res.data)
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      {loading && <Loading />}

      {char && (
        <div className="text-center text-3xl mt-8 mb-20 ">
          <div className="flex justify-center pb-8">
            <img
              className="w-60 h-60 rounded-full"
              src={char.img}
              alt={char.name}
            />
          </div>
          <div className="max-w-lg mx-auto">
            <p className="p-2">
              <span className="text-[#A10035]">Name: </span>
              {char.name}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">Nickname: </span> {char.nickname}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">Occupation: </span>{" "}
              {char.occupation && char.occupation + " "}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">Status: </span> {char.status}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">Portrayed: </span>{" "}
              {char.portrayed}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">Apperance: </span>{" "}
              {char.appearance && char.appearance + " "}
            </p>
            <p className="p-2">
              <span className="text-[#A10035]">-Quotes- </span>
            </p>
          </div>
          <div>
            {(quotes || []).map((p) => (
              <div
                className="m-8 max-w-lg mx-auto container break-words"
                key={p.quote_id}
              >
                {char.name === p.author && p.quote}
              </div>
            ))}
          </div>

          <a
            className="text-3xl inline-block px-12 py-2.5 bg-red-600 text-white leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
            href="/home"
          >
            Back
          </a>
        </div>
      )}
    </div>
  );
}

export default Details;
