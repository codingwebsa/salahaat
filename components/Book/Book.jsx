// next
import Image from "next/image";
import Link from "next/link";

// symble
const Symble = () => <span>৳</span>;

const Book = ({ data }) => {
  const { slug, imgurl, name, price, discountprice, authors } = data;
  return (
    <>
      <div>
        <Link href={`/book/${slug}`}>
          {/* image */}
          <Image
            src={imgurl}
            width={256}
            height={81}
            alt={name}
            className="rounded-md mb-2 hover:brightness-90 h-48 object-cover"
          />
          {/* name */}
          <h2 className="font-hindSiliguri text-md font-semibold">{name}</h2>
          {/* author */}
          {authors.data?.[0] && (
            <p className="text-xs text-gray-600">
              {authors.data[0].attributes.name}
            </p>
          )}
          {/* price */}
          <div className="flex gap-2 items-center mt-1">
            {discountprice ? (
              <>
                <span className="text-lg text-baseGreen font-semibold">
                  <Symble /> {discountprice}
                </span>
                <s className="text-sm text-gray-600">
                  <Symble /> {price}
                </s>
              </>
            ) : (
              <span className="text-lg font-semibold text-baseGreen">
                <Symble /> {price}
              </span>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Book;
