// nextjs
import Link from "next/link";
// component
import { Layout } from "@/components";
// lib
import { getCategories } from "@/lib";
import { RightIcon } from "@/icons";
import { NextSeo } from "next-seo";

const CategoryPage = ({ data }) => {
  return (
    <>
      <NextSeo title="Categories - Salahaat" />
      <Layout searchCom={true}>
        <div>
          <div className="flex flex-col py-6 px-2 min-h-[50vh]">
            {data?.map((categoryData, _i) => {
              const { name, slug } = categoryData.attributes;
              return (
                <>
                  <div
                    key={_i}
                    className="flex gap-2 items-center text-xl py-2 pl-2"
                  >
                    <RightIcon className="text-baseGreen" />
                    <Link href={`/category/${slug}`}>
                      <p className="underline decoration-wavy">{name}</p>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CategoryPage;

export async function getStaticProps() {
  const data = await getCategories();

  return {
    props: {
      data,
    },
  };
}
