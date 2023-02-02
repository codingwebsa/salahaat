// nextjs
import Link from "next/link";
import Image from "next/image";
// component
import { Layout, SearchComponent } from "@/components";
// lib
import { getAutors } from "@/lib";

const AuthorPage = ({ data }) => {
  return (
    <>
      <Layout searchCom={true}>
        <div>
          <div className="flex flex-col py-6 px-2 min-h-[50vh]">
            {data?.map((authordata, _i) => {
              const { name, slug, imgurl } = authordata.attributes;
              return (
                <>
                  <div
                    key={_i}
                    className="flex gap-2 items-center text-xl py-2 pl-2"
                  >
                    <Image
                      src={imgurl}
                      className="rounded-full"
                      alt={name}
                      width={35}
                      height={35}
                    />
                    <Link href={`/author/${slug}`}>
                      <p className="underline">{name}</p>
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

export default AuthorPage;

export async function getStaticProps() {
  const data = await getAutors();

  return {
    props: {
      data,
    },
  };
}
