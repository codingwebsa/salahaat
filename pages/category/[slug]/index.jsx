// nextjs
import Head from "next/head";
// components
import { SearchComponent, BottomNavbar, Booksec } from "@/components";
import { getCategories } from "@/lib";

const CategorySingle = ({ name, data }) => {
  return (
    <>
      <Head>
        <title>{`বিষয়: ${name}`}</title>
      </Head>
      <SearchComponent />
      <BottomNavbar />
      <Booksec title={`বিষয়: ${name}`} data={data} />
    </>
  );
};

export default CategorySingle;

export const getStaticPaths = async () => {
  const data = await getCategories();

  let paths = data.map((d) => ({ params: { slug: d.attributes.slug } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;

  const data = await getCategories();

  const categoryData = data.find((x, _i) => x.attributes.slug == slug);

  return {
    props: {
      data: categoryData.attributes.books.data,
      name: categoryData.attributes.name,
    },
  };
}
