import Link from "next/link";

const PopularSearches = ({ type = "inline", title = false }) => {
  const arr = [
    "আরিফ আজাদ",
    "আতীক উল্লাহ",
    "নবি জীবনের গল্প",
    "প্যারাডক্সিক্যাল সাজিদ",
    "প্যারাডক্সিক্যাল সাজিদ 2",
    "মুমিনের বিনোদন",
    "জীবনের সোনালি পাঠ",
    "গল্পগুলো হৃদয়ছোঁয়া",
    "গল্পগুলো হৃদয়ছোয়া ২",
    "আমি যদি পাখি হতাম",
    "শেষ বিকেলের রোদ্দুর",
  ];
  return (
    <>
      <div className="mb-4 mx-4">
        {title && <p className="text-sm ml-1 mb-2">Popular Searches</p>}
        <div
          className={`flex gap-2 overflow-x-auto ${
            type == "inline" ? "" : "flex-wrap justify-evenly"
          }`}
        >
          {arr.map((searchTag, _i) => (
            <Link
              href={`/search?q=${searchTag}`}
              className="py-2 px-3 bg-gray-200 rounded-full border border-slate-400 min-w-max text-xs"
              key={_i}
            >
              <span>{searchTag}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularSearches;
