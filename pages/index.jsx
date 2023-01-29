// nextjs
import Head from "next/head";
// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
import { getData } from "@/lib";
import Navbar from "@/components/Navbar/Navbar";

const HomePage = ({ data }) => {
  return (
    <>
      <Head>
        <title>Salahaat</title>
      </Head>
      <Layout header={false}>
        <SearchComponent />
        <CarouselCom />
        <Booksec title="Recent" data={data?.slice(0, 6)} />
        <Navbar />
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
