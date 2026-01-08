import Counter from "../component/Counter";

const Project = () => {
  return (
    <section className="w-full flex items-center justify-center relative overflow-hidden">
      <div className="relative w-full bg-black overflow-hidden">
        <div className="flex justify-center mt-[8%] sm:mt-[10%]">
          <button className="animated-border px-6 sm:px-10 font-aileron font-normal text-[20px] sm:text-[26px] lg:text-[30px] py-2 sm:py-3 rounded-full text-white mb-10">
            My Portfolio
          </button>
        </div>

        <img
          src="/assets/radial-right.svg"
          alt="radial-right"
          className="absolute left-0 top-0 md:top-1/2 -translate-y-1/2 w-[300px] sm:w-[300px] opacity-70"
        />

        <img
          src="/assets/radient-testimonal.svg"
          alt="gradient"
          className="absolute right-0 top-[90%] md:top-[800px] -translate-y-1/2 w-[500px] sm:w-[800px] opacity-90 pointer-events-none"
        />

        <div className="relative z-10 max-w-5xl  md:max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row gap-10 justify-center   md:mb-24 mt-[5%]">
            {[
              { img: "/assets/border-2.svg", title: "Logos" },
              { img: "/assets/border-3.svg", title: "Packaging design" },
              { img: "/assets/border-3.svg", title: "Posters" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="relative scale-90 sm:scale-100">
                  <img src="/assets/border.svg" alt="border" />
                  <img
                    src={item.img}
                    className="absolute top-5 left-6  md:top-6 md:left-6  
    hover:scale-90
    transition-transform duration-300 ease-out"
                    alt="item"
                  />
                </div>
                <p className="text-white text-[18px] sm:text-[25px] font-bold font-aileron text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
  mb-10 md:mb-0
  flex flex-col lg:flex-row
  items-center
  justify-center lg:justify-between
  gap-10 lg:gap-0
  mt-[10%] md:mt-0
"
          >
            <div className="font-aileron font-bold flex flex-col text-center lg:text-left">
              <h1 className="text-[60px] sm:text-[80px] lg:text-9xl font-bold text-primary">
                <Counter end={500} duration={2000} />
                K+
              </h1>

              <p className="text-white mt-2 flex gap-2 justify-center lg:justify-start font-bold text-base">
                <span className="text-[16px] md:text-[25px] text-white">
                  Monthly project views on
                </span>
                <img src="/assets/pintrest-text.svg" alt="Pinterest" />
              </p>
            </div>

            <div className="relative flex justify-center">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className="w-[260px] sm:w-[100px] h-[60px] rounded-full blur-2xl opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(7,145,123,0.9) 0%, rgba(7,145,123,0.45) 40%, transparent 70%)",
                  }}
                />
              </div>

              <a
                href="https://in.pinterest.com/designer_syedirfan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
          relative z-10
          px-8 sm:px-12
          py-3 sm:py-4
          rounded-full
          bg-white/20
          backdrop-blur-lg
          border-2 border-white
          text-white
          text-[18px] sm:text-[25px]
          transition-all duration-300
          hover:scale-105
          font-bold font-aileron
        "
                >
                  View my Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
