import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";

function SearchField() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = useState("");

  function handleSearch() {
    searchParams.set("query", searchField);
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <label className="relative block">
        {/* <span>&times;</span> */}
        <input
          className=" w-[180px] sm:w-full bg-gray-200 rounded-md py-1 pl-3 pr-10 focus:outline-zinc-300 "
          placeholder="Search"
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />

        <span
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer hover:scale-105"
        >
          <BiSearch color="#a2a2a2" size="20px" />
        </span>
      </label>
    </form>
  );
}

export default SearchField;
