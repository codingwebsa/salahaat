// nextjs
import Link from "next/link";
import Image from "next/image";
// component
import { Layout } from "@/components";
// lib
import { getAutors } from "@/lib";
// assets
import ImgPlaceholder from "@/assets/img-placeholder.png";

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
                    className="flex gap-3 items-center text-xl py-2 pl-2"
                  >
                    <Image
                      src={imgurl || ImgPlaceholder}
                      className="rounded-full shadow-md"
                      alt={name}
                      width={40}
                      height={40}
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
