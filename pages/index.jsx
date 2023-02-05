// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
// data
import { bookData as data } from "@/data";
// nextjs
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Buy Book Online - Best Online Book Shop in Bangladesh |
          Salahaat.vercel.app
        </title>
        <meta
          name="description"
          content="Salahaat.vercel.app is the largest online bookstore in Bangladesh. Buy
          Novel, Story, Islamic, Computer Programming, Children, West
          Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards &
          Text books from the biggest selection of Bangla books at lowest
          price. Cash on delivery, Happy return policy & Free shipping
          offer available. Shop Now!"
        />
        <meta property="og:image" content="/og-logo.jpg" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="1050" />
        <meta
          property="og:title"
          content="Buy Book Online - Best Online Book Shop in Bangladesh | Salahaat.vercel.app"
        />
        <meta
          property="og:description"
          content="Salahaat.vercel.app is the largest online bookstore in Bangladesh. Buy Novel, Story, Islamic, Computer Programming, Children, West Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards &amp; Text books from the biggest selection of Bangla books at lowest price. Cash on delivery, Happy return policy &amp; Free shipping offer available. Shop Now!"
        />
        <link rel="canonical" href="https://salahaat.vercel.app/" />
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
