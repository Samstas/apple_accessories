import { useSearchParams } from "react-router-dom";

const sortOptions = [
  //❗value call like in json object - id /and way of sort - asc/desc❗
  { id: 1, value: "id-asc", label: "Default" }, //value id
  { id: 2, value: "price-asc", label: "Price: Low to High" }, // value price
  { id: 2, value: "price-desc", label: "Price: High to Low" }, // value price
  { id: 3, value: "title-asc", label: "Name: (A-Z)" }, //value name
  { id: 3, value: "title-desc", label: "Name: (Z-A)" }, //value name
];

function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "id-asc";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams, { replace: true });
  }

  return (
    <select value={sortBy} onChange={handleChange}>
      {sortOptions.map(({ id, label, value }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default SortOptions;
