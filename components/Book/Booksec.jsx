// components
import Book from "./Book";

const Booksec = ({ title, data, offerChip = false }) => {
  return (
    <div className="flex flex-col my-4 bg-white rounded shadow-sm">
      {title ? (
        <h2 className="text-2xl font-bold leading-10 pl-4 py-2">{title}</h2>
      ) : null}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center gap-x-4 gap-y-6 pb-7 px-4">
        {data?.map((book, i) => (
          <Book data={book.attributes} offerChip={offerChip} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Booksec;
