// next
import { useRouter } from "next/router";
import Head from "next/head";
// components
import { Booksec, Layout, SearchComponent } from "@/components";
// fuse.js
import Fuse from "fuse.js";
// @lib
import { getData } from "@/lib";
import { useEffect, useState } from "react";

const Search = ({ BookData }) => {
  const [modifiedData, setmodifiedData] = useState([]);
  //   console.log(BookData);
  const router = useRouter();
  const query = router.query.q;

  const fuse = new Fuse(BookData, {
    keys: [
      "attributes.name",
      "attributes.authors.data.attributes.name",
      "attributes.tags",
    ],
    includeScore: true,
  });

  useEffect(() => {
    let tempModifiedData = [];
    const fuseData = fuse.search(query || "");
    fuseData.forEach((data, _i) =>
      tempModifiedData.push(BookData[data.refIndex])
    );
    setmodifiedData(tempModifiedData);
  }, [query]);

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
