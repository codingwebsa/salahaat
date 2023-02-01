// component
import { Footer, Header, Navbar, Sidebar, SimpleHeader } from ".";
// context
import { useGlobalContext } from "@/context/globalContext";
const Layout = ({
  header = true,
  navbar = true,
  simpleHeader = false,
  footer = true,
  children,
}) => {
  const { sidebarOpen } = useGlobalContext();
  return (
    <>
      <div className="pb-8">
        {header && <Header />}
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
