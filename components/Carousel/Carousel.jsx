// nextjs
import Image from "next/image";
// package
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// assets
import { Banner1, Banner2, Banner3, Banner4 } from "@/assets";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselCom = () => {
  return (
    <>
      <div className="my-4">
        <Carousel
          responsive={responsive}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay
          swipeable
          infinite
          draggable
          arrows={false}
          autoPlaySpeed={5000}
        >
          <div className="mx-1 rounded-md overflow-hidden cursor-grab active:cursor-grabbing">
            <Image
              alt="banner1"
              src={Banner1}
              width={439}
              height={220}
              quality={50}
              property={true}
            />
          </div>
          <div className="mx-1 rounded-md overflow-hidden cursor-grab active:cursor-grabbing">
            <Image
              alt="banner2"
              src={Banner2}
              width={439}
              height={220}
              quality={50}
              property={true}
            />
          </div>
          <div className="mx-1 rounded-md overflow-hidden cursor-grab active:cursor-grabbing">
            <Image
              alt="banner3"
              src={Banner3}
              width={439}
              height={220}
              quality={50}
              property={true}
            />
          </div>
          <div className="mx-1 rounded-md overflow-hidden cursor-grab active:cursor-grabbing">
            <Image
              alt="banner4"
              src={Banner4}
              width={439}
              height={220}
              quality={50}
              property={true}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselCom;
