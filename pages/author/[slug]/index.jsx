// nextjs
import Head from "next/head";
// components
import { Booksec, Layout, SearchComponent } from "@/components";
import { authorData } from "@/data";

const AuthorSingle = ({ data, name }) => {
  return (
    <>
      <Head>
        <title>লেখক: {name} - salahaat</title>
      </Head>
      <Layout>
        <SearchComponent />
        <Booksec data={data} title={`লেখক: ${name}`} />
      </Layout>
    </>
  );
};

export default AuthorSingle;

export const getStaticPaths = async () => {
  let paths = authorData.map((d) => ({ params: { slug: d.attributes.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;


  const data = authorData.find((x, _i) => x.attributes.slug == slug);

  return {
    props: {
      data: data.attributes.books.data,
      name: data.attributes.name,
    },
  };
}
