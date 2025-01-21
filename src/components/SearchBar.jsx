import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { searchQuery, setSearchQuery, showSearchField, setShowSearchField } =
    useContext(ShopContext);

  // Show the searchField only in the collections page
  const location = useLocation();

  if (location.pathname !== "/collections") {
    return null;
  }

  return showSearchField === true ? (
    <section className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type='text'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder='Type your search query here'
          className='flex-1 outline-none bg-inherit text-sm'
        />
        <CiSearch />
      </div>
      <RxCross2
        onClick={() => setShowSearchField(false)}
        className='cursor-pointer inline-block'
      />
    </section>
  ) : null;
};

export default SearchBar;
