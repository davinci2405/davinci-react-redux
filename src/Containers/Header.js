import SearchBar from "../Components/SearchBar"

const Header = () => {
  return (
    <div className="bg-gray-400 max-w-[1440px]">
      <div className="flex items-center space-x-2 py-4 px-12">
        <div className="flex items-center space-x-2">
          <div>Sidenav Menu</div>
          <span className="text-2xl font-bold">Hasaki</span>
        </div>
        <SearchBar />
        <div className="flex items-center space-x-2">
          <div>Cart</div>
          <div>Account</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  )
}

export default Header
