import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const data = [
    "Branding & Logo design",
    "Packaging design",
    "Printing design",
    "Website design",
    "Social Media Marketing",
    "Business Consultation",
  ];

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const intervalRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (desktopRef.current) observer.observe(desktopRef.current);
    if (mobileRef.current) observer.observe(mobileRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) {
      clearInterval(intervalRef.current);
      setVisibleCount(0);
      return;
    }

    let index = 0;
    intervalRef.current = setInterval(() => {
      index++;
      setVisibleCount(index);

      if (index >= data.length) {
        clearInterval(intervalRef.current);
      }
    }, 150);

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    if (data.length > 0) {
      setIsActive(true);
    }
  }, [data.length]);

  return (
    <>
      <section
        ref={desktopRef}
        id="skills"
        className="
        relative
        hidden
        md:block
        px-4 sm:px-10 md:px-16 lg:px-20
   overflow-hidden
       
      py-10
      "
      >
        <div
          className="
          absolute
          top-[-160px]
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[420px]
          bg-[radial-gradient(ellipse_at_top,_rgba(7,145,123,0.55)_0%,_rgba(7,145,123,0.35)_30%,_rgba(7,145,123,0.15)_55%,_transparent_70%)]
          blur-[130px]
          -z-20
          pointer-events-none
        "
        />

        <div
          className="
          absolute
          w-[60%]
          -top-[400px] -right-[150px]
          -translate-x-1/2
          pointer-events-none
          z-10
        "
        >
          <img
            src="/assets/skills-rantangale.svg"
            alt="gradient"
            className="w-full opacity-90 absolute top-0 glow"
          />
        </div>

        <div className="relative max-w-[900px] mx-auto text-center z-20">
          <div className="flex justify-center">
            <button
              className="
              animated-border
              font-aileron font-normal
              text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]
              px-6 sm:px-8 md:px-10
              py-2.5 sm:py-3
              rounded-full
              text-white
              mb-10
            "
            >
              Skills
            </button>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 w-[800px] font-aileron font-bold text-[24px] items-center gap-5 mt-[10%]">
              {data.map((dat, i) => (
                <div
                  key={i}
                  className={`
                     skill-item
                ${i < visibleCount ? "show" : ""}
                    text-white text-center
          px-4 py-3 rounded-full
          backdrop-blur-none
          bg-gradient-to-r
          from-white/20
          to-white/10
          border border-white
          cursor-pointer
           transform transition-transform duration-300 ease-out
          hover:scale-105
          shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white`}
                >
                  {dat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section
        ref={mobileRef}
        id="skills"
        className=" block md:hidden
        relative overflow-hidden
        px-4 sm:px-8 md:px-14 lg:px-20
        py-14 sm:py-18 md:py-24
        bg-black
      "
      >
        <div
          className="
          absolute pointer-events-none z-10
          w-[80%] 
         -top-24
         left-20
        "
        >
          <img
            src="/assets/skills-rantangale.svg"
            alt="gradient"
            className="w-full opacity-90 glow"
          />
        </div>

        <div className="relative z-20  mx-auto text-center ">
          <div className="flex justify-center items-center">
            <button
              className="
              animated-border text-white font-aileron font-normal
              text-[24px] 
              px-5 
              py-2 
              rounded-full 
            "
            >
              Skills
            </button>
          </div>

          <div className="flex justify-center">
            <div
              className="
      grid grid-cols-1 sm:grid-cols-2
      gap-4 sm:gap-5 md:gap-6
      w-full max-w-[400px] md:max-w-[800px] mx-auto
      font-aileron font-bold
      text-[14px] mt-[20%]
      transform transition-transform duration-300 ease-out
    "
            >
              {data.map((skill, i) => (
                <div
                  key={i}
                  className={`skill-item ${i < visibleCount ? "show" : ""} 
          text-white text-center
          px-4 sm:px-6 py-2.5 sm:py-3
          rounded-full
          backdrop-blur-none
          bg-gradient-to-r from-white/20 to-white/10
          border border-white
          transition hover:scale-105 cursor-pointer
          shadow-[inset_0_0_30px_rgba(255,255,255,0.25)] shadow-white
        `}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
