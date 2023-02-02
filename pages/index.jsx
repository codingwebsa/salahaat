// components
import { Booksec, CarouselCom, Layout, SearchComponent } from "@/components";
import { getData } from "@/lib";
// next-seo
import { NextSeo } from "next-seo";

const HomePage = ({ data }) => {
  return (
    <>
      <NextSeo
        title="Salahaat"
        openGraph={{
          type: "website",
          url: `https://www.salahaat.vercel.app/`,
          title: "Salahaat",
          description: `Salahaat.com is the largest online bookstore in Bangladesh. Buy
          Novel, Story, Islamic, Computer Programming, Children, West
          Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards &
          Text books from the biggest selection of Bangla books at lowest
          price. Cash on delivery, Happy return policy & Free shipping
          offer available. Shop Now!`,
          images: [
            {
              url: "/logo.png",
              width: 960,
              height: 480,
              alt: "salahaat",
            },
          ],
        }}
      />
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
