// component
import { BottomNavbar, SearchComponent } from ".";

const Layout = ({ children }) => {
  return (
    <>
      <div className="pb-8">
        <div>{children}</div>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Layout;
