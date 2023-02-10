// components
import { Booksec, Layout } from "@/components";
// data
import { bookData } from "@/data";

const BookPage = () => {
  return (
    <>
      <Layout searchCom>
        <div>
          <Booksec data={bookData.slice(0, 100)} />
        </div>
      </Layout>
    </>
  );
};

export default BookPage;
