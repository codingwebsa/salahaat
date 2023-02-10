// next
import { useRouter } from "next/navigation";
// react
import { useRef } from "react";
// icons
import { SearchIcon } from "@/icons";

const SearchComponent = () => {
  const router = useRouter();
  const inpRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    if (!inpRef.current.value) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${inpRef.current.value}`);
    inpRef.current.blur();
  }
  return (
    <>
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative flex mx-4 items-center my-3 max-w-lg lg:mx-auto">
          <input
            type="text"
            className="border border-slate-500 outline-baseGreen hover:border-baseGreen w-full py-3 rounded-full pl-4 pr-14"
            placeholder="Search আল-হেদায়া"
            ref={inpRef}
          />
          <button
            type="submit"
            aria-label="search-button"
            className="absolute right-0 bg-baseGreen p-3 shadow-lg shadow-[#00c9a763] text-light rounded-full cursor-pointer active:scale-[.95]"
            onClick={handleSearch}
          >
            <SearchIcon size={30} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchComponent;
