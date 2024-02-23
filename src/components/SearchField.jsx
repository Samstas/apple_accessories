import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useSearchParams, useNavigate } from 'react-router-dom'

function SearchField() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchField, setSearchField] = useState('')
  const navigate = useNavigate()

  function handleSearch() {
    searchParams.set('query', searchField)
    setSearchParams(searchParams, { replace: true })
    navigate(`/accessories?query=${searchField}`)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSearch()
      }}
    >
      <label className="relative block">
        <span
          onClick={handleSearch}
          className="absolute left-2 top-[6px] cursor-pointer text-zinc-600"
        >
          <BiSearch className="text-[1.3rem] text-zinc-400" />
        </span>
        <input
          className=" w-[180px] rounded-md bg-zinc-200 py-1 pl-8 pr-8 placeholder-zinc-400 focus:outline-zinc-600 sm:w-full "
          placeholder="Search"
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        {searchField ? (
          <span
            onClick={() => setSearchField('')}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-zinc-700  transition ease-in hover:text-red-600"
          >
            &times;
          </span>
        ) : null}
      </label>
    </form>
  )
}

export default SearchField
