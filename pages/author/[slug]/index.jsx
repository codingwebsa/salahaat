// nextjs
import Head from "next/head";
// components
import { Booksec, Layout, SearchComponent } from "@/components";
import { getAutors } from "@/lib";

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
  const data = await getAutors();
  let paths = data.map((d) => ({ params: { slug: d.attributes.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await getAutors();

  const authorData = data.find((x, _i) => x.attributes.slug == slug);

  return {
    props: {
      data: authorData.attributes.books.data,
      name: authorData.attributes.name,
    },
  };
}
