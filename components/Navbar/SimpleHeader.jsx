// icons
import { CartIcon, BackIcon } from "@/icons";
// nextjs
import Link from "next/link";

const SimpleHeader = () => {
  return (
    <>
      <div className="sticky top-0 z-[99] shadow-sm">
        <div className="bg-white px-6 py-4 flex justify-between">
          <Link href="/">
            <BackIcon size={30} />
          </Link>
          <Link href="/cart">
            <CartIcon size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SimpleHeader;
