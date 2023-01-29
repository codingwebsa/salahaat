// component
import { Footer, Navbar, SimpleHeader } from ".";

const Layout = ({
  header = true,
  simpleHeader = false,
  footer = true,
  children,
}) => {
  return (
    <>
      <div className="pb-8">
        {simpleHeader && <SimpleHeader />}
        <div>{children}</div>
        {header && <Navbar />}
        {footer && <Footer />}
      </div>
    </>
  );
};

export default Layout;
