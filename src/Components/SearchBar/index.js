import { useState } from "react"

const SearchBar = () => {
  const initialValues = { category: 1, q: "" }
  const [searchValue, setSearchValue] = useState(initialValues)

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchValue({ ...searchValue, [name]: value })
  }

  const handleSearch = () => {
    console.log(searchValue)
  }

  return (
    <div className="flex items-center w-[600px] h-[36px]">
      <select
        className="text-center min-w-max h-full px-2 bg-[#f3f3f3] rounded-l-md outline-0"
        onChange={handleChange}
        name="category"
      >
        <option value={1}>Tất cả</option>
        <option value={2}>Sức khỏe - Làm đẹp</option>
      </select>
      <input
        name="q"
        className="h-full w-full p-2 outline-0"
        type="text"
        placeholder="Tìm sản phẩm bạn mong muốn"
        value={searchValue.q}
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
        className="h-full bg-[#ff6600] rounded-r-md p-2"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
