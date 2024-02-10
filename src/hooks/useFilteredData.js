import { useSearchParams } from "react-router-dom";
import { accessories } from "../data/data-accessories";

export function useFilteredData() {
  const data = accessories;
  const [searchParams] = useSearchParams();

  // FILTER accessories
  const filterValue = searchParams.get("category");
  let filteredProducts;

  if (filterValue === "all") filteredProducts = data;

  if (filterValue === "cases")
    filteredProducts = data.filter((item) => item.category === "cases");

  if (filterValue === "bands")
    filteredProducts = data.filter((item) => item.category === "bands");

  if (filterValue === "chargers")
    filteredProducts = data.filter((item) => item.category === "chargers");

  if (filterValue === "cables")
    filteredProducts = data.filter((item) => item.category === "cables");

  // SORT accessories
  const sortBy = searchParams.get("sortBy") || "id-asc";
  const [field, direction] = sortBy.split("-");

  const sortedProducts = filteredProducts?.sort((a, b) => {
    const modifier = direction === "asc" ? 1 : -1;

    if (field === "id") {
      return (a.id - b.id) * modifier;
    }

    if (field === "price") {
      return Number(a.price - b.price) * modifier;
    }

    if (field === "title") {
      return a.title.localeCompare(b.title) * modifier;
    }
    return 0;
  });

  return { sortedProducts };
}
