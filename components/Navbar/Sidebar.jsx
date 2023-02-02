// context
import { useGlobalContext } from "@/context/globalContext";
// icons
import {
  BookOpenIcon,
  CategoryIcon,
  CloseIcon,
  DownIcon,
  FairIcon,
  HomeIcon,
  LoginIcon,
  OfferIcon,
  PenIcon,
  StarIcon,
  TruckIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ isOpen }) => {
  const { setSidebarOpen, user } = useGlobalContext();
  function closeSidebar() {
    setSidebarOpen(false);
  }
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.5)] z-[99] cursor-pointer ${
          !isOpen && "-translate-x-full"
        } transition-transform`}
        onClick={closeSidebar}
      ></div>
      {/* <!-- drawer component --> */}

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-[99] w-[70%] h-screen p-4 overflow-y-auto transition-transform bg-white ${
          !isOpen && "-translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center  "
          onClick={closeSidebar}
        >
          <CloseIcon size={20} />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto h-[90%]">
          <ul className="inline-flex flex-col gap-1 h-full">
            <li onClick={closeSidebar}>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <HomeIcon size={25} className="text-gray-600" />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              >
                <BookOpenIcon size={25} className="text-gray-600" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Book
                </span>
                <DownIcon />
              </button>
              {/* sub-category */}
              <ul className="py-2 space-y-2">
                <li onClick={closeSidebar}>
                  <Link
                    href="/author"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >
                    <PenIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Writters</span>
                  </Link>
                </li>
                <li onClick={closeSidebar}>
                  <Link
                    href="/category"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >
                    <CategoryIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Categories</span>
                  </Link>
                </li>
                <li onClick={closeSidebar}>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >
                    <FairIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Book Fair 2023</span>
                  </Link>
                </li>
                <li onClick={closeSidebar}>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >
                    <StarIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Pre-order</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={closeSidebar}>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <OfferIcon size={25} className="text-gray-600" />
                <span className="ml-3">Offers</span>
              </Link>
            </li>
            <li onClick={closeSidebar}>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <TruckIcon size={25} className="text-gray-600" />
                <span className="ml-3">Track Order</span>
              </Link>
            </li>
            {user ? (
              <li onClick={closeSidebar} className="mt-auto">
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer">
                  <Image
                    src={user?.photoURL}
                    width={28}
                    height={28}
                    className="rounded-full p-1 bg-gray-300"
                    alt="user"
                  />
                  <span className="ml-3 font-semibold">
                    {user?.displayName}
                  </span>
                </div>
              </li>
            ) : (
              <li onClick={closeSidebar} className="mt-auto">
                <Link
                  href="/account"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <LoginIcon size={25} className="text-gray-600" />
                  <span className="ml-3">Signin</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
