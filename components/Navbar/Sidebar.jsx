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
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.5)] z-[99] cursor-pointer ${
          !isOpen && "-translate-x-full"
        } transition-transform`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      {/* <!-- drawer component --> */}

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-[99] w-[70%] h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 ${
          !isOpen && "-translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon size={20} />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HomeIcon size={25} className="text-gray-600" />
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <BookOpenIcon size={25} className="text-gray-600" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Book
                </span>
                <DownIcon />
              </button>
              {/* sub-category */}
              <ul className="py-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <PenIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Writters</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <CategoryIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Categories</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FairIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Book Fair 2023</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <StarIcon size={20} className="text-gray-600" />
                    <span className="ml-3">Pre-order</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <OfferIcon size={25} className="text-gray-600" />
                <span className="ml-3">Offers</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <TruckIcon size={25} className="text-gray-600" />
                <span className="ml-3">Track Order</span>
              </Link>
            </li>
            {user ? (
              <li>
                <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Image
                    src={user?.photoURL}
                    width={25}
                    height={25}
                    className="rounded-full"
                    alt="user"
                  />
                  <span className="ml-3">{user?.displayName}</span>
                </div>
              </li>
            ) : (
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
