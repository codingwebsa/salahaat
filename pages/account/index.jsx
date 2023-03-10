// next
import Head from "next/head";
// components
import { Layout, SigninPageComponent, SignoutComponent } from "@/components";
// context
import { useGlobalContext } from "@/context/globalContext";

const Account = () => {
  const { user } = useGlobalContext();
  return (
    <>
      <Head>
        <title>{`Account ${user ? `- ${user.displayName}` : ""}`}</title>
      </Head>
      <Layout floatingCart={false}>
        <div className="h-[90vh] flex items-center justify-center">
          {user ? <SignoutComponent user={user} /> : <SigninPageComponent />}
        </div>
      </Layout>
    </>
  );
};

export default Account;
