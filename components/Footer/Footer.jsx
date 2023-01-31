// nextjs
import Image from "next/image";
import localFont from "@next/font/local";
// assets
import Logo from "@/assets/logo-transparent.png";
import { GmailIcon, LocationIcon, PhoneIcon } from "@/icons";

// initialize font (Branch)
const BranchFont = localFont({ src: "../../fonts/Branch.otf" });
const Footer = () => {
  return (
    <>
      <section className="py-10 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <span className="w-auto h-9 flex items-center gap-3">
                <Image src={Logo} alt="logo" width={40} height={40} />
                <p
                  className={`text-3xl font-extrabold text-emerald-600 ${BranchFont.className}`}
                >
                  Salahaat
                </p>
              </span>
              {/* description */}
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Salahaat.com is the largest online bookstore in Bangladesh. Buy
                Novel, Story, Islamic, Computer Programming, Children, West
                Bengal, Fiction, Non fiction, Medical, Engineering, Gift cards &
                Text books from the biggest selection of Bangla books at lowest
                price. Cash on delivery, Happy return policy & Free shipping
                offer available. Shop Now!
              </p>
              {/* contact */}
              <div className="my-5">
                <div className="flex items-center gap-4 mt-4">
                  <span>
                    <LocationIcon size={50} className="text-baseGreen" />
                  </span>
                  <span className="h-10 rounded-full w-1 opacity-40 bg-baseGreen"></span>
                  <span>
                    <p>Ever Shine Center</p>
                    <p>Talaimari, Rajshahi</p>
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span>
                    <PhoneIcon size={50} className="text-baseGreen" />
                  </span>
                  <span className="h-10 rounded-full w-1 opacity-40 bg-baseGreen"></span>
                  <span className="flex flex-col">
                    <a
                      href="tel:+8801779482251"
                      className=" underline decoration-dotted underline-offset-4"
                    >
                      +8801779482251
                    </a>
                    <a
                      href="tel:+8801792430530"
                      className="text-gray-500 underline decoration-dotted underline-offset-4"
                    >
                      +8801792430530
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2021, All Rights Reserved by{" "}
            <span className="text-baseGreen font-bold underline decoration-wavy">
              Codingsa
            </span>
          </p>
        </div>
      </section>
    </>
  );
};
export default Footer;
