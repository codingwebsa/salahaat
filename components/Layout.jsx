// component
import {
  FloatingCart,
  Footer,
  Header,
  Navbar,
  SearchComponent,
  Sidebar,
  SimpleHeader,
} from ".";
// context
import { useGlobalContext } from "@/context/globalContext";
const Layout = ({
  header = true,
  navbar = true,
  simpleHeader = false,
  footer = true,
  searchCom = false,
  floating = true,
  children,
}) => {
  const { sidebarOpen, cartItems } = useGlobalContext();
  return (
    <>
      <div className="pb-8">
        {/* header */}
        {header && <Header />}
        {/* sidebar */}
        <Sidebar isOpen={sidebarOpen} />
        {/* simple header */}
        {simpleHeader && <SimpleHeader />}
        {/* searchcom */}
        {searchCom && <SearchComponent />}
        <div>{children}</div>
        {/* bottoNavbar */}
        {navbar && <Navbar />}
        {/* footer */}
        {footer && <Footer />}
        {/* floating components */}
        {cartItems.length > 0 && floating && <FloatingCart />}
      </div>
    </>
  );
};

export default Layout;
