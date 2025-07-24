import React from "react";
import { Link } from "react-router-dom";

const  Error = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-[10rem] font-bold bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 text-transparent bg-clip-text animate-pulse">
        404
      </h1>
      <h2 className="text-xl font-semibold mb-2">SORRY! PAGE NOT FOUND</h2>
      <p className="text-center text-gray-300 max-w-xl mb-6">
        Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
      </p>

        <div className="flex gap-4 mt-6 animate-fade-in">
            <Link
                to="/"
                className="bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Return home
            </Link>
            <button
                className="border border-indigo-400 hover:bg-indigo-800 text-white px-6 py-2 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Report problem
            </button>
        </div>

    </div>
  );
}

export default Error
