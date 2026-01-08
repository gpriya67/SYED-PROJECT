import { useEffect, useState } from "react";
import CounterNumber from "../component/CounterNumber";

const Home = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="  md:relative  overflow-hidden w-full bg-black ">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#053f3a] to-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/assets/back.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className=" hidden  relative z-10   md:max-w-[1300px] mx-auto px-10  md:flex  lg:flex-row items-center justify-between gap-14 mt-[5%]">
        <div
          className={`
            max-w-xl text-center lg:text-left
            transition-all duration-700 ease-out
            ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }
          `}
        >
          <img
            src="/assets/hi.svg"
            alt="hi"
            className="mb-4 mx-auto lg:mx-0 w-[200px] "
          />
          <img
            src="/assets/syed-text.svg"
            alt="syed"
            className="mx-auto lg:mx-0  w-[500px]"
          />

          <p className="text-white text-[26px] mt-4 font-medium font-aileron ">
            Creative Director & Brand Maker
          </p>
        </div>

        <div className="relative w-[300px] md:w-[600px] flex-shrink-0">
          <img src="/assets/syed.svg" alt="syed" className="w-full z-20" />
        </div>
      </div>

      <div className="relative z-10  mx-auto pt-40 flex flex-col items-center text-center md:hidden">
        <div
          className={`
      max-w-xl
      flex
      flex-col
      items-center
      transition-all
      duration-700
      ease-out
     
    `}
        >
          <div className="w-[250px] mx-auto">
            <img src="/assets/hi.svg" alt="hi" className="mb-4 w-full" />
          </div>

          <div className="w-[250px] mx-auto">
            <img src="/assets/syed-text.svg" alt="syed" className="w-full" />
          </div>

          <p className="text-white text-[20px] text-nowrap mt-4 font-medium font-aileron ">
            Creative Director & Brand Maker
          </p>
        </div>

        <div className="relative w-[300px] md:w-[600px]  mt-10 flex justify-center">
          <img src="/assets/syed.svg" alt="syed" className=" w-full" />
        </div>
      </div>

      <CounterNumber />
    </section>
  );
};

export default Home;
