// next
import { useGlobalContext } from "@/context/globalContext";
import Image from "next/image";
import Link from "next/link";

// symble
const Symble = () => <span>৳</span>;

const Book = ({ data, offerChip }) => {
  const { calcDiscount } = useGlobalContext();
  const { slug, imgurl, name, price, discountprice, authors } = data;
  return (
    <>
      <div className="relative">
        {offerChip && (
          <span className="absolute text-sm font-bold bg-yellow-300 -translate-x-3 -translate-y-3 w-10 h-10 rounded-full flex justify-center items-center flex-col z-10">
            <p>-{calcDiscount(discountprice, price)}%</p>
          </span>
        )}
        <Link href={`/book/${slug}`}>
          {/* image */}
          <Image
            src={imgurl}
            width={480}
            height={300}
            alt={name}
            className="rounded-md mb-2 hover:brightness-90 h-60 object-cover"
          />
          {/* name */}
          <h2 className="font-hindSiliguri text-md font-semibold line-clamp-2">
            {name}
          </h2>
          {/* author */}
          {authors.data?.[0] && (
            <p className="text-xs text-gray-600 line-clamp-1">
              {authors.data[0].attributes.name}
            </p>
          )}
          {/* price */}
          <div className="flex gap-2 items-center mt-1">
            {discountprice ? (
              <>
                <span className="text-lg text-emerald-600 font-semibold">
                  <Symble /> {discountprice}
                </span>
                <s className="text-sm text-gray-600">
                  <Symble /> {price}
                </s>
              </>
            ) : (
              <span className="text-lg font-semibold text-emerald-600">
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
