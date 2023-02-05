// nextjs
import Head from "next/head";
// components
import { Booksec, Layout } from "@/components";
import { categoryData } from "@/data";

const CategorySingle = ({ name, data }) => {
  return (
    <>
      <Head>
        <title>{`বিষয়: ${name}`}</title>
      </Head>
      <Layout searchCom={true}>
        <Booksec title={`বিষয়: ${name}`} data={data} />
      </Layout>
    </>
  );
};

export default CategorySingle;

export const getStaticPaths = async () => {
  let paths = categoryData.map((d) => ({
    params: { slug: d.attributes.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const _categoryData = categoryData.find((x, _i) => x.attributes.slug == slug);

  return {
    props: {
      data: _categoryData.attributes.books.data,
      name: _categoryData.attributes.name,
    },
  };
}
