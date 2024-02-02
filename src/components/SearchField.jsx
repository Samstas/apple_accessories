import { BiSearch } from "react-icons/bi";

function SearchField() {
  return (
    <form>
      <label className="relative block">
        <input
          className="w-full bg-gray-200 rounded-md py-1 pl-3 pr-10 focus:outline-none"
          placeholder="Search"
          type="text"
        />

        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <BiSearch color="#a2a2a2" size="20px" />
        </span>
      </label>
    </form>
  );
}

export default SearchField;
