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
    <ul className="flex items-center gap-2 mb-3 md:mb-4 sm:mb-0">
      {filterOptions.map(({ id, label, value }) => (
        <li key={id}>
          <button
            onClick={() => handleSetOptionValue(value)}
            className={`border-[1px]  text-sm  py-1 px-2 lg:px-4 lg:py-2 xl:text-[1rem] rounded-md text-zinc-700  border-zinc-300  hover:bg-zinc-500 hover:text-zinc-200 transition ease-in delay-75 ${
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
