import { useSearchParams } from 'react-router-dom'

const sortOptions = [
  { id: 1, value: 'id-asc', label: 'Sorted by default' }, //value id
  { id: 2, value: 'price-asc', label: 'Price: Low to High' }, // value price
  { id: 3, value: 'price-desc', label: 'Price: High to Low' }, // value price
  { id: 4, value: 'title-asc', label: 'Name: (A-Z)' }, //value name
  { id: 5, value: 'title-desc', label: 'Name: (Z-A)' }, //value name
]

function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortBy = searchParams.get('sortBy') || 'id-asc'

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <select
      className="rounded-lg border border-gray-300 bg-inherit p-2.5 text-[0.9rem] text-gray-900 transition duration-150  ease-in-out focus:border-zinc-500 focus:ring-zinc-700  lg:px-4 lg:py-2 xl:text-[1rem]"
      value={sortBy}
      onChange={handleChange}
    >
      {sortOptions.map(({ id, label, value }) => (
        <option key={id} value={value} className="bg-[#eee] ">
          {label}
        </option>
      ))}
    </select>
  )
}

export default SortOptions
