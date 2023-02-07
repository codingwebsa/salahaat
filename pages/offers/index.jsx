import { Booksec, Layout } from "@/components";
import { bookData } from "@/data";

const OfferPage = ({ data }) => {
  return (
    <>
      <Layout searchCom>
        <div className="min-h-[50vh]">
          <Booksec data={data} offerChip title="Offers For you!" />
        </div>
      </Layout>
    </>
  );
};

export default OfferPage;

export async function getStaticProps() {
  const modifiedData = bookData.filter(
    (d, _i) => d.attributes.discountprice !== null
  );

  return {
    props: {
      data: modifiedData,
    },
  };
}
