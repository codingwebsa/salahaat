// next
import Image from "next/image";
import Link from "next/link";
// react
import { useState } from "react";
// react-hot-toast
import { toast } from "react-hot-toast";
// context
import { useGlobalContext } from "@/context/globalContext";
// components
import { Layout, QuickCart, SearchComponent } from "@/components";
import { getData } from "@/lib";
import Head from "next/head";

// symble
const Symble = () => <span>৳</span>;
const BookPage = ({ data }) => {
  const [readMore, setReadMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   initializing data
  const { name, imgurl, publication, description, price, discountprice } = data;
  const authors = data.authors.data;
  const categories = data.categories.data;
  const { cartItems, setCartItems } = useGlobalContext();
  // console.log(data);
  function handleOrder(data) {
    setCartItems([...cartItems, data]);

    toast("Added to cart", {
      icon: "📚",
      style: {
        borderRadius: "200px",
        padding: "12px 20px",
        background: "#252c33",
        color: "#fff",
      },
    });

    setIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Layout header={false} simpleHeader={true}>
        <SearchComponent />
        <div className="mt-8 pb-8 px-4">
          {/* ------image */}
          <div className="flex justify-center">
            <Image
              src={imgurl}
              width={500}
              height={300}
              className="rounded-lg shadow-md w-[95%] h-80  object-cover"
              alt={name}
            />
          </div>
          {/* ------details */}
          <div className="py-8 flex flex-col gap-2">
            <h1 className="text-lg font-bold">{name}</h1>
            {/* close details */}
            <div>
              <span className="flex gap-2">
                <p>লেখক :</p>
                <Link
                  href={`/author/${authors[0].attributes.slug}`}
                  className="text-yellow-700"
                >
                  {authors[0].attributes.name}
                </Link>
              </span>
              <span className="flex gap-2">
                <p>প্রকাশনী :</p>
                <p className="text-yellow-700">{publication}</p>
              </span>
              <span className="flex gap-2">
                <p>বিষয় :</p>
                <Link
                  href={`/categories/${categories[0].attributes.slug}`}
                  className="text-yellow-700"
                >
                  {categories[0].attributes.slug}
                </Link>
              </span>
            </div>
            {/* description */}

            <p className="text-slate-700 text-sm text-justify">
              {readMore ? description : description.substring(0, 250)}
              {description.length > 250 && (
                <span
                  className="text-yellow-700 select-none cursor-pointer"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? " ...show less" : " ...read more"}
                </span>
              )}
            </p>
          </div>
          {/* ------order section */}
          <div>
            {/* price */}
            <div className="flex gap-2 items-center mt-1">
              {discountprice ? (
                <>
                  <span className="text-3xl text-baseGreen font-semibold">
                    <Symble /> {discountprice}
                  </span>
                  <s className="text-xl text-gray-600">
                    <Symble /> {price}
                  </s>
                </>
              ) : (
                <span className="text-3xl font-semibold text-baseGreen">
                  <Symble /> {price}
                </span>
              )}
            </div>
            {/* buttons */}
            <div className="my-4 flex gap-4">
              <button
                className="text-lg bg-rose-700 text-white px-5 py-3 rounded-md"
                onClick={() => handleOrder(data)}
              >
                অর্ডার করুন
              </button>
              <button className="text-lg bg-yellow-600 text-white px-5 py-3 rounded-md">
                একটু পড়ে দেখুন
              </button>
            </div>
          </div>
        </div>
        {/* <Booksec data={recentBooksData} title="আরো দেখুন…" /> */}
      </Layout>
      <QuickCart
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default BookPage;

export const getStaticPaths = async () => {
  const data = await getData();
  return {
    paths: data.map((d) => ({
      params: { slug: d.attributes.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const data = await getData();

  const bookData = data.find((sing, _i) => sing.attributes.slug == slug);

  return {
    props: {
      data: bookData.attributes,
    },
  };
};
