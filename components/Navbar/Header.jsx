// nextjs
import Image from "next/image";
import localFont from "@next/font/local";
// assets
import Logo from "@/assets/logo-transparent.png";
// icons
import { MenuIcon, UserIcon } from "@/icons";
// context
import { useGlobalContext } from "@/context/globalContext";
import Link from "next/link";

// initialize font (Branch)
const BranchFont = localFont({ src: "../../fonts/Branch.otf" });

const Header = () => {
  const { user, sidebarOpen, setSidebarOpen } = useGlobalContext();
  return (
    <>
      <header>
        <section
          id="header"
          className="flex justify-between items-center py-4 px-6"
        >
          {/* left */}
          <div className="flex gap-4 items-center">
            <span>
              <MenuIcon
                size={30}
                className="text-slate-800 cursor-pointer"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              />
            </span>
            <div className="flex items-center gap-2">
              <Image src={Logo} width={33} height={33} alt="salahaat logo" />
              <Link
                href="/"
                className={`${BranchFont.className} text-3xl font-bold text-emerald-600`}
              >
                Salahaat
              </Link>
            </div>
          </div>
          {/* rifht */}
          {user ? (
            <Link href="/account" className="p-1 bg-gray-200 rounded-full">
              <Image
                src={user?.photoURL}
                width={32}
                height={32}
                className="rounded-full"
                alt="User"
              />
            </Link>
          ) : (
            <Link href="/account">
              <button className="flex gap-2 items-center py-2.5 px-4 bg-emerald-600 rounded-md text-white">
                <span>
                  <UserIcon size={20} />
                </span>
                <p className="text-sm">Login</p>
              </button>
            </Link>
          )}
        </section>
      </header>
    </>
  );
};

export default Header;
