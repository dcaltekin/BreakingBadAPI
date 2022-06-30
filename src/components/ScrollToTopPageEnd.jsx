import React from "react";

function ScrollToTopPageEnd() {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="text-center text-2xl mb-2 w-full inline-block px-12 py-8 bg-blue-600 text-white leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        End of the characters! Scroll to top!
      </button>
    </div>
  );
}

export default ScrollToTopPageEnd;
