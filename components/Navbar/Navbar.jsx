import { CartIcon, HomeIcon, SearchIcon, UserIcon } from "@/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div className="flex justify-between py-1 border-t-2 border-baseGreen rounded-t-xl">
          <Link
            href="/"
            className="w-full focus:text-baseGreen hover:text-baseGreen inline-flex flex-col justify-center items-center text-center pt-2 pb-1"
          >
            <HomeIcon size={25} />
            <span className="tab tab-home block text-xs">Home</span>
          </Link>
          <Link
            href="/search"
            className="w-full focus:text-baseGreen hover:text-baseGreen inline-flex flex-col justify-center items-center text-center pt-2 pb-1"
          >
            <SearchIcon size={25} />
            <span className="tab tab-kategori block text-xs">Search</span>
          </Link>
          <Link
            href="/cart"
            className="w-full focus:text-baseGreen hover:text-baseGreen inline-flex flex-col justify-center items-center text-center pt-2 pb-1"
          >
            <CartIcon size={25} />
            <span className="tab tab-whishlist block text-xs">Cart</span>
          </Link>
          <Link
            href="/account"
            className="w-full focus:text-baseGreen hover:text-baseGreen inline-flex flex-col justify-center items-center text-center pt-2 pb-1"
          >
            <UserIcon size={25} />
            <span className="tab tab-account block text-xs">Account</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
