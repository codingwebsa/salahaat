import { Booksec, Layout } from "@/components";
import { getData } from "@/lib";

const OfferPage = ({ data }) => {
  return (
    <>
      <Layout>
        <div className="min-h-[50vh]">
          <Booksec data={data} title="Offers" />
        </div>
      </Layout>
    </>
  );
};

export default OfferPage;

export async function getStaticProps() {
  const data = await getData();
  const modifiedData = data.filter(
    (d, _i) => d.attributes.discountprice !== null
  );

  return {
    props: {
      data: modifiedData,
    },
  };
}
