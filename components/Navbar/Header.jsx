// nextjs
import Image from "next/image";
// assets
import Logo from "@/assets/logo.jpg";
// nextjs
import localFont from "@next/font/local";
// icons
import { MenuIcon } from "@/icons";
// context
import { useGlobalContext } from "@/context/globalContext";

// initialize font (Branch)
const BranchFont = localFont({ src: "../../fonts/Branch.otf" });

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalContext();
  return (
    <>
      <header>
        <section
          id="header"
          className="flex justify-between items-center py-4 px-6"
        >
          <div className="flex items-center gap-2">
            <Image src={Logo} width={33} height={33} alt="salahaat logo" />
            <span
              className={`${BranchFont.className} text-3xl font-bold text-logoColor`}
            >
              Salahaat
            </span>
          </div>
          <div>
            <MenuIcon
              size={30}
              className="text-baseGreen cursor-pointer"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
