import SchoolSVG from "@/assets/school.svg";
import CollegeSVG from "@/assets/college.svg";
import UnivercitySVG from "@/assets/univercity.svg";
import MedicalSVG from "@/assets/medical.svg";
import Image from "next/image";

const _arr = [
  { src: SchoolSVG, title: "School" },
  { src: CollegeSVG, title: "College" },
  { src: UnivercitySVG, title: "Univercity" },
  { src: MedicalSVG, title: "Medical" },
];

const CategoryView = () => {
  return (
    <>
      <section className="mx-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:mx-28 gap-2">
          {_arr.map((x, _i) => (
            <span
              key={_i}
              className="relative flex flex-col justify-center items-center pt-3 pb-8 bg-slate-200 rounded-lg"
            >
              <Image src={x.src} alt="" width={100} height={100} />
              <span className="absolute bottom-0 py-2 rounded-b-lg bg-slate-700 font-bold shadow-md w-full text-white text-center text-sm">
                {x.title}
              </span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoryView;
