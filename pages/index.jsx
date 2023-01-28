// nextjs
import Head from "next/head";
// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
import { getData } from "@/lib";

const HomePage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Salahaat</title>
      </Head>
      <Layout>
        <SearchComponent />
        <CarouselCom />
        <Booksec title="Recent" data={data.slice(0, 6)} />
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
