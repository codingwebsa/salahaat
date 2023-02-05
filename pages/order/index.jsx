import { Layout } from "@/components";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    const recentOrderID = localStorage.getItem("recentOrderID");
    if (recentOrderID) router.push("/order/" + recentOrderID);
    return;
  }

  return (
    <>
      <Layout>You currently don&rsquo;t have any recent orders!</Layout>
    </>
  );
};

export default Orders;
