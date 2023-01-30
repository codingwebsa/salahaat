// component
import { Footer, Header, Navbar, Sidebar, SimpleHeader } from ".";
// context
import { useGlobalContext } from "@/context/globalContext";
const Layout = ({
  navbar = true,
  simpleHeader = false,
  footer = true,
  children,
}) => {
  const { sidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="pb-8">
        <Header />
        <Sidebar isOpen={sidebarOpen} />
        {simpleHeader && <SimpleHeader />}
        <div>{children}</div>
        {navbar && <Navbar />}
        {footer && <Footer />}
      </div>
    </>
  );
};

export default Layout;
