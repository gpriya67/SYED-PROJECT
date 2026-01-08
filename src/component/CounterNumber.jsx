import Counter from "../component/Counter";

const CounterNumber = () => {
  const data = [
    { label: "Successful Projects", value: 500 },
    { label: "Happy Clients", value: 100 },
    { label: "Years of Experience", value: "05" },
  ];

  return (
    <>
      <section className="hidden md:block relative bg-black ">
        <div className="flex justify-center items-center">
          <div className="w-[1079px] h-[379px] ">
            <img
              src="/assets/circle-ven.svg"
              alt="Circle Background"
              className=" object-contain opacity-90 w-full"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="flex flex-wrap justify-center gap-24 w-full max-w-6xl">
            <div
              className="relative w-[276px] h-[223px] rounded-3xl overflow-hidden borde border-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white border-2   bg-gradient-to-r
          from-white/20
          to-white/10"
            >
              <div className="absolute inset-0 backdrop-blur-none " />
              <div className="absolute -top-10 -left-10 w-[140%] h-[140%]  rotate-[-15deg]  pointer-events-none" />
              <div className="absolute top-5 left-5 w-[242px] h-[170px] rounded-3xl overflow-hidden flex items-center justify-center text-center p-3">
                <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">
                  <p className="text-white text-[30px] leading-none font-aileron ">
                    Successful <br /> Projects
                  </p>

                  <p className="text-[#13b593]  text-8xl text-center flex justify-center items-center font-bold font-aileron ">
                    <Counter end={500} duration={2000} />+
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative w-[276px] h-[223px] rounded-3xl overflow-hidden borde border-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white border-2   bg-gradient-to-r
          from-white/20
          to-white/10"
            >
              <div className="absolute inset-0 backdrop-blur-none " />
              <div className="absolute -top-10 -left-10 w-[140%] h-[140%]  rotate-[-15deg]  pointer-events-none" />
              <div className="absolute top-5 left-5 w-[242px] h-[170px] rounded-3xl overflow-hidden flex items-center justify-center text-center p-3">
                <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">
                  <p className="text-white text-[30px] leading-none font-aileron ">
                    Happy <br />
                    Clients
                  </p>

                  <p className="text-[#13b593]  text-8xl text-center flex justify-center items-center font-bold font-aileron ">
                    <Counter end={100} duration={2000} />+
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative w-[276px] h-[223px] rounded-3xl overflow-hidden borde border-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white border-2   bg-gradient-to-r
          from-white/20
          to-white/10"
            >
              <div className="absolute inset-0 backdrop-blur-none " />
              <div className="absolute -top-10 -left-10 w-[140%] h-[140%]  rotate-[-15deg]  pointer-events-none" />
              <div className="absolute top-5 left-5 w-[242px] h-[170px] rounded-3xl overflow-hidden flex items-center justify-center text-center p-3">
                <div className="relative z-10 flex justify-center items-center h-full flex-col text-center">
                  <p className="text-white text-[30px] leading-none font-aileron ">
                    Years of <br />
                    Experience
                  </p>

                  <p className="text-[#13b593]  text-8xl text-center flex justify-center items-center font-bold font-aileron ">
                    <Counter end={"05"} duration={2000} />+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block md:hidden bg-black  overflow-hidden">
        <div className="relative flex justify-center">
          <img
            src="/assets/circle-ven.svg"
            alt="Circle Background"
            className="w-[100%]  opacity-90"
          />
        </div>

        <div
          className="
          absolute inset-0 flex justify-center items-center px-4 gap-10
   
  "
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="
        relative rounded-3xl overflow-hidden
        w-[90px] h-[90px]
      
        borde 
          borde border-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white border-2   bg-gradient-to-r
          from-white/20
          to-white/10
      "
            >
              <div className="absolute inset-0 backdrop-blur-none" />

              <div
                className="absolute -top-6 -left-6 w-[140%] h-[140%]
        rotate-[-15deg] borde border-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white border-2   bg-gradient-to-r
          from-white/20
          to-white/10"
              />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2">
                <p className="text-white text-[10px] leading-tight font-aileron">
                  {item.label.split(" ").map((word, i) => (
                    <span key={i}>
                      {word}
                      <br />
                    </span>
                  ))}
                </p>

                <p className="text-[#13b593] text-2xl sm:text-4xl font-bold font-aileron mt-1">
                  <Counter end={item.value} duration={2000} />+
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CounterNumber;
