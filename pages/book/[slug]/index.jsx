// next
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// react
import { useState } from "react";
// react-hot-toast
import { toast } from "react-hot-toast";
// context
import { useGlobalContext } from "@/context/globalContext";
// components
import { Booksec, Layout, QuickCart, SearchComponent } from "@/components";
// lib
import { bookData as impBookData } from "@/data";

// symble
const Symble = () => <span>৳</span>;
// page component
const BookPage = ({ data, recentBooks }) => {
  const [readMore, setReadMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   initializing data
  const { name, imgurl, publication, description, price, discountprice, slug } =
    data;
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
        <title>
          {name} : {authors[0].attributes.name} | Salahaat.vercel.app
        </title>
        <meta
          name="description"
          content={`${authors[0].attributes.name} এর ${name} অরিজিনাল বইটি সংগ্রহ করুন রকমারি ডট কম থেকে। বই হাতে পেয়ে মূল্য পরিশোধের সুবিধাসহ অফারভেদে উপভোগ করুন ফ্রি শিপিং এবং সর্বোচ্চ ছাড়!`}
        />
        <meta property="og:image" content={imgurl} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="286" />
        <meta
          property="og:title"
          content={`${name} - ${authors[0].attributes.name}`}
        />
        <meta
          property="og:description"
          content={`লেখকঃ ${authors[0].attributes.name}, ক্যাটাগরিঃ ${categories[0].attributes.name}, মূল্যঃ ${price}, লিংকঃ www.salahaat.vercel.app/book/${slug} `}
        />
        <meta
          property="og:url"
          content={`https://salahaat.vercel.app/book/${slug}`}
        />
        <meta property="product:brand" content={publication} />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
        <meta property="product:price:amount" content={price} />
        <meta property="product:price:currency" content="BDT" />
        <meta property="product:retailer_item_id" content={slug} />
        <link
          rel="canonical"
          href={`https://salahaat.vercel.app/book/${slug}`}
        />
      </Head>
      <Layout header={false} simpleHeader={true} navbar={false}>
        <SearchComponent />
        <div className="mt-8 pb-3 px-4 md:flex md:gap-4 md:pl-32">
          {/* ------image */}
          <div className="flex justify-center">
            <Image
              src={imgurl}
              width={500}
              height={300}
              className="rounded-lg shadow-md w-[100%] h-96  object-cover"
              alt={name}
              priority="true"
            />
          </div>
          {/* ------details */}
          <div className="pt-8 flex flex-col gap-2 md:max-w-2xl">
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
                  href={`/category/${categories[0].attributes.slug}`}
                  className="text-yellow-700"
                >
                  {categories[0].attributes.name}
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
        </div>
        {/* add to cart button */}
        <div className="fixed bottom-0 left-0 w-full flex z-[99]">
          <button className="text-md flex-1 inline-flex justify-center bg-white text-green-700 px-5 py-4">
            <div className="flex gap-2 items-center">
              {discountprice ? (
                <>
                  <span className="text-xl text-baseGreen font-semibold">
                    <Symble /> {discountprice}
                  </span>
                  <s className="text-md text-gray-600">
                    <Symble /> {price}
                  </s>
                </>
              ) : (
                <span className="text-xl font-semibold text-baseGreen">
                  <Symble /> {price}
                </span>
              )}
            </div>
          </button>
          <button
            className="text-md flex-1 bg-emerald-700 text-white px-5 py-4"
            onClick={() => handleOrder(data)}
          >
            অর্ডার করুন
          </button>
        </div>
        {/* recents books */}
        <Booksec data={recentBooks} title="আরো দেখুন…" />
      </Layout>
      {/* quick cart */}
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
  let paths = impBookData.map((d) => ({ params: { slug: d.attributes.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const bookData = impBookData.find((sing, _i) => sing.attributes.slug == slug);

  return {
    props: {
      data: bookData.attributes,
      recentBooks: impBookData.slice(0, 12),
    },
  };
};
