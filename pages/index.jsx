// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
import { getData } from "@/lib";
// next-seo
import { NextSeo } from "next-seo";
// nextjs
import Head from "next/head";

const HomePage = ({ data }) => {
  return (
    <>
      <Head>
        <title>
          Buy Book Online - Best Online Book Shop in Bangladesh | Salahaat.com
        </title>
        <meta
          name="description"
          content="Salahaat.com is the largest online bookstore in Bangladesh. Buy
          Novel, Story, Islamic, Computer Programming, Children, West
          Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards &
          Text books from the biggest selection of Bangla books at lowest
          price. Cash on delivery, Happy return policy & Free shipping
          offer available. Shop Now!"
        />
      </Head>
      <Layout>
        <SearchComponent />
        <CarouselCom />
        <Booksec title="Recent Books" data={data?.slice(0, 6)} />
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
