// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
import { getData } from "@/lib";
// next-seo
import { NextSeo } from "next-seo";

const HomePage = ({ data }) => {
  return (
    <>
      <NextSeo title="Salahaat" />
      <Layout>
        <SearchComponent />
        <CarouselCom />
        <Booksec title="Recent" data={data?.slice(0, 6)} />
      </Layout>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
}
