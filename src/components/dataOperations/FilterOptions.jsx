import React from "react";
import { useSearchParams } from "react-router-dom";

const filterOptions = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Cases", value: "cases" },
  { id: 3, label: "Bands", value: "bands" },
  { id: 4, label: "Chargers", value: "chargers" },
  { id: 5, label: "Cables", value: "cables" },
];
function FilterOptions({ filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(filterField) || filterOptions.at(0);

  function handleSetOptionValue(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <ul className="flex items-center gap-2 ">
      {filterOptions.map(({ id, label, value }) => (
        <li key={id}>
          <button
            onClick={() => handleSetOptionValue(value)}
            className={`border-[2px] py-[2px] px-[4px] text-sm sm:text-base sm:py-1 sm:px-3 rounded-md text-zinc-800  border-zinc-800  hover:bg-zinc-700 hover:text-zinc-200 ${
              currentValue === value ? "active" : ""
            }`}
            disabled={currentValue === value}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterOptions;
