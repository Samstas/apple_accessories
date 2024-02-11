import { useSearchParams } from "react-router-dom";
import { accessories } from "../data/data-accessories";

export function useFilteredData() {
  const data = accessories;
  const [searchParams] = useSearchParams();

  // FILTER accessories
  const searchQuery = searchParams.get("query");
  const filterValue = searchParams.get("category");

  let filteredProducts;

  // ALL
  if (filterValue === "all") {
    filteredProducts = !searchQuery
      ? data
      : data.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }

  // CASES
  if (filterValue === "cases") {
    filteredProducts = !searchQuery
      ? data.filter((item) => item.category === "cases")
      : data
          .filter((item) => item.category === "cases")
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
  }

  // BANDS
  if (filterValue === "bands") {
    filteredProducts = !searchQuery
      ? data.filter((item) => item.category === "bands")
      : data
          .filter((item) => item.category === "bands")
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
  }

  // CHARGERS
  if (filterValue === "chargers") {
    filteredProducts = !searchQuery
      ? data.filter((item) => item.category === "chargers")
      : data
          .filter((item) => item.category === "chargers")
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
  }

  // CABLES
  if (filterValue === "cables") {
    filteredProducts = !searchQuery
      ? data.filter((item) => item.category === "cables")
      : data
          .filter((item) => item.category === "cables")
          .filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
  }

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
