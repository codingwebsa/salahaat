// nextjs
import Link from "next/link";
import Head from "next/head";
// component
import { Layout } from "@/components";
// lib
import { categoryData as data } from "@/data";
// icons
import { RightIcon } from "@/icons";

const CategoryPage = () => {
  return (
    <>
      <Head>
        <title>Categories - Salahaat</title>
      </Head>
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
