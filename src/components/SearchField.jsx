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
        <span
          onClick={handleSearch}
          className="absolute top-[6px] left-2 cursor-pointer text-zinc-600"
        >
          <BiSearch color="#a7a1aa" size="20px" />
        </span>
        <input
          className=" w-[180px] sm:w-full placeholder-zinc-400 bg-zinc-200 rounded-md py-1 pl-8 pr-10 focus:outline-zinc-600 "
          placeholder="Search"
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        {searchField ? (
          <span
            onClick={() => setSearchField("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-zinc-700  hover:text-red-600"
          >
            &times;
          </span>
        ) : null}
      </label>
    </form>
  );
}

export default SearchField;
