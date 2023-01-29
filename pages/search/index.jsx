// next
import { useRouter } from "next/router";
import Head from "next/head";
// components
import { Booksec, BottomNavbar, Layout, SearchComponent } from "@/components";
// fuse.js
import Fuse from "fuse.js";
// @lib
import { getData } from "@/lib";

const Search = ({ BookData }) => {
  //   console.log(BookData);
  const modifiedData = [];
  const router = useRouter();
  const query = router.query.q;

  const fuse = new Fuse(BookData, {
    keys: [
      "attributes.name",
      "attributes.slug",
      "attributes.authors.data.attributes.name",
      "attributes.authors.data.attributes.slug",
    ],
    includeScore: true,
  });

  const fuseData = fuse.search(query || "");
  fuseData.forEach((data, _i) => modifiedData.push(BookData[_i]));

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <div>
        <Layout footer={false}>
          <SearchComponent />
          <Booksec data={modifiedData} />
          {/* conditions */}
          {!query && (
            <h1 className="text-xl text-center">Please search something!</h1>
          )}
          {query && modifiedData.length == 0 ? (
            <h1 className="text-xl text-center">No Matching Result!</h1>
          ) : null}
        </Layout>
      </div>
    </>
  );
};

export default Search;

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      BookData: data,
    },
  };
}
