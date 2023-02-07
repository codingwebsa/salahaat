// nextjs
import Link from "next/link";
// icons
import { MessengerIcon } from "@/icons";

function Messenger() {
  return (
    <>
      <div className="inline-block fixed bottom-[12vh] right-4 bg-sky-600 p-4 rounded-full shadow-lg z-[99] animate-bounce cursor-pointer">
        <Link
          href="https://m.me/sa.salahaat"
          target="_blank"
          className="relative flex flex-col items-center"
        >
          <span>
            <MessengerIcon size={25} className="text-white" />
          </span>
        </Link>
      </div>
    </>
  );
}

export default Messenger;
