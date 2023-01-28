// next
import Link from "next/link";
import Image from "next/image";
// icons
import { HomeIcon, CartIcon, SearchIcon } from "@/icons";

const BottomNavbar = () => {
  let user;
  return (
    <>
      <header className="fixed bottom-0 w-full z-[999] rounded-t-2xl">
        <div className="max-w-xl mx-auto">
          <nav className="grid grid-cols-4 h-[9vh] place-items-center text-dark bg-white border-t-2 border-baseGreen rounded-t-2xl">
            <span>
              <Link
                href="/"
                className="active:scale-[.9] text-dark fill-dark h-full w-full flex justify-center items-center"
              >
                <HomeIcon size={28} />
              </Link>
            </span>
            <span>
              <Link
                href="/search"
                className="active:scale-[.9] text-dark fill-dark h-full w-full flex justify-center items-center"
              >
                <SearchIcon size={28} />
              </Link>
            </span>
            <span>
              <Link
                href="/cart"
                className="active:scale-[.9] text-dark fill-dark h-full w-full flex justify-center items-center"
              >
                <CartIcon size={28} />
              </Link>
            </span>
            <span>
              <Link
                href="/account"
                className="active:scale-[.9] text-dark fill-dark h-full w-full flex justify-center items-center"
              >
                <Image
                  src={user?.photoURL || `/user.svg`}
                  width={32}
                  height={32}
                  alt="user"
                  className="rounded-full"
                />
              </Link>
            </span>
          </nav>
        </div>
      </header>
    </>
  );
};

export default BottomNavbar;
