// icons
import { CartIcon } from "@/icons";
// nextjs
import Link from "next/link";
// context
import { useGlobalContext } from "@/context/globalContext";

const FloatingCart = () => {
  const { total } = useGlobalContext();
  return (
    <>
      <div className="inline-block fixed bottom-[15vh] right-4 bg-purple-800 p-4 rounded-full shadow-lg z-[99] animate-bounce cursor-pointer">
        <Link href="/cart" className="flex flex-col items-center">
          <span>
            <CartIcon size={27} className="text-white" />
          </span>
          <p className="text-xs text-white font-semibold">৳ {total}</p>
        </Link>
      </div>
    </>
  );
};

export default FloatingCart;
