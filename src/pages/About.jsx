import { useEffect, useRef } from "react";

const About = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items = entry.target.querySelectorAll(".reveal-text");

          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            items.forEach((el) => el.classList.add("active"));
          } else {
            entry.target.classList.remove("active");
            items.forEach((el) => el.classList.remove("active"));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (desktopRef.current) observer.observe(desktopRef.current);
    if (mobileRef.current) observer.observe(mobileRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={desktopRef}
        id="about"
        className="
          reveal
        relative
        hidden
        md:block
        px-4 sm:px-10 md:px-16 lg:px-20
        bg-black
        overflow-hidden
        py-20
      "
      >
        <img
          src="/assets/heart.svg"
          alt="heart"
          className="
          absolute
          left-6 sm:left-20 md:left-40 lg:left-52
          top-16 sm:top-24 md:top-28 lg:top-32
          w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]
          z-20
          pointer-events-none animate-drift
        "
        />

        <img
          src="/assets/Rectangle.svg"
          alt="blob"
          className="
          absolute
          right-4 sm:right-10 md:right-36
          top-24 sm:top-32 md:top-[100px]
          w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]
          z-10
          pointer-events-none animate-drift
        "
        />

        <div
          className="
    absolute
    w-[75%]
    -top-[400px] -right-[380px]
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
              text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px]
              px-6 sm:px-8 md:px-10
              py-2.5 sm:py-3
              rounded-full
              text-white
              mb-10
            "
            >
              About Me
            </button>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 md:space-y-8">
            <p className="text-white text-[16px] sm:text-[18px] md:text-[27px] font-aileron font-normal max-w-[723px] leading-9 delay-1  reveal-text">
              Graphic Designer & Brand Maker with 5+ years of experience,
              blending creativity and strategy to craft compelling designs that
              align with brand goals and drive meaningful engagement.
            </p>

            <p className="text-white text-[16px] sm:text-[18px] md:text-[27px] reveal-text font-aileron font-normal max-w-[723px] leading-9 delay-2">
              Passionate about visual storytelling, I specialize in branding,
              logo design, illustrations, layouts, UI/UX design, and digital
              campaigns, creating intuitive and visually impactful user
              experiences.
            </p>

            <p className="text-white text-[16px] sm:text-[18px] md:text-[27px] reveal-text font-aileron font-normal max-w-[723px] leading-9 delay-3">
              I also design and develop modern, responsive websites, focusing on
              usability, performance, and conversion-driven design. Having
              worked across diverse industries, I tailor design, UI/UX, and
              marketing solutions to meet unique business needs with precision
              and impact.
            </p>

            <div className="pt-10">
              <hr className="w-40 sm:w-52 md:w-96 border-t-2 border-primary" />
            </div>
          </div>

          <div className=" absolute -right-20 top-[550px]">
            <img src="/assets/smile.svg" alt="smile" />
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={mobileRef}
        className="block md:hidden
    relative bg-black overflow-hidden
    px-4 sm:px-8 md:px-14 lg:px-20
    py-16 sm:py-20 md:py-24
  "
      >
        <img
          src="/assets/heart.svg"
          alt="heart"
          className="
      absolute z-20 pointer-events-none animate-drift
      left-5
      top-20 
      w-[40px] 
    "
        />

        <img
          src="/assets/Rectangle.svg"
          alt="blob"
          className="
      absolute z-10 pointer-events-none
      right-4 sm:right-12 md:right-28 lg:right-36
      top-16 sm:top-28 md:top-24
      w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] animate-drift
    "
        />

        <div
          className="
      absolute pointer-events-none z-10
      w-[80%] 
      -top-10 right-10
    "
        >
          <img
            src="/assets/skills-rantangale.svg"
            alt="gradient"
            className="w-full opacity-90 glow"
          />
        </div>

        <div className="relative z-20 max-w-[900px] mx-auto text-center">
          <div className="flex justify-center">
            <button
              className="
          animated-border text-white font-aileron font-normal
          text-[16px] sm:text-[20px] md:text-[22px] lg:text-[26px]
          px-5 sm:px-7 md:px-9
          py-2 sm:py-2.5
          rounded-full mb-8 sm:mb-10
        "
            >
              About Me
            </button>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-7 md:space-y-8">
            <p
              className="text-white text-[12px] sm:text-[18px] md:text-[27px] font-aileron font-normal  leading-4  delay-1  reveal-text
            max-w-[723px]"
            >
              Graphic Designer & Brand Maker with 5+ years of experience,
              blending creativity and strategy to craft compelling designs that
              align with brand goals and drive meaningful engagement.
            </p>

            <p
              className="text-white text-[12px] sm:text-[18px] md:text-[27px] font-aileron font-normal   leading-4 delay-2  reveal-text
            max-w-[723px]"
            >
              Passionate about visual storytelling, I specialize in branding,
              logo design, illustrations, layouts, UI/UX design, and digital
              campaigns, creating intuitive and visually impactful user
              experiences.
            </p>

            <p
              className="text-white text-[12px] sm:text-[18px] md:text-[27px] font-aileron font-normal  leading-4 delay-3  reveal-text
            max-w-[723px]"
            >
              I also design and develop modern, responsive websites, focusing on
              usability, performance, and conversion-driven design. Having
              worked across diverse industries, I tailor design, UI/UX, and
              marketing solutions to meet unique business needs with precision
              and impact.
            </p>

            <div className="pt-10">
              <hr className="w-40 sm:w-52 md:w-96 border-t-2 border-primary" />
            </div>
          </div>

          <div className="absolute right-[50px] top-[400px] ">
            <img src="/assets/smile.svg" alt="smile" className="w-[40px] " />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
