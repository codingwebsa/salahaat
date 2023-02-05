import Link from "next/link";

const PopularSearches = ({ type = "inline", title = false }) => {
  const arr = [
    "আরিফ আজাদ",
    "আতীক উল্লাহ",
    "নবি জীবনের গল্প",
    "প্যারাডক্সিক্যাল সাজিদ",
    "প্যারাডক্সিক্যাল সাজিদ 2",
  ];
  return (
    <>
      <div className="my-5 mx-4">
        {title && <p>Popular Searches</p>}
        <div
          className={`flex gap-2 overflow-x-auto ${
            type == "inline" ? "" : "flex-wrap justify-evenly"
          }`}
        >
          {arr.map((searchTag, _i) => (
            <Link
              href={`/search?q=${searchTag}`}
              className="py-2 px-3 bg-gray-200 rounded-full border border-slate-400 min-w-max text-sm"
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
