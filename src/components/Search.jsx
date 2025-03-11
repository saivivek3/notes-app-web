import React from "react";
import SearchIcon from "../assets/Search.svg";

function Search() {
  return (
    <div className="relative px-2 py-4 rounded-lg bg-transparent border border-neutral-600 flex items-center  min-w-[300px]">
      <img src={SearchIcon} alt="search-icon" className="h-6 w-6 absolute " />
      <input
        type="text"
        placeholder="Search by title,content,or tags..."
        className="w-full outline-none focus:outline-none px-8 text-sm text-neutral-400 bg-transparent placeholder:text-neutral-400"
      />
    </div>
  );
}

export default Search;
