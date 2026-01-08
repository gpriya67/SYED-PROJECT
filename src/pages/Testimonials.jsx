import { useState } from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      title: "Asvini Devi",
      work: "Dental Doctor",
      content:
        "Absolutely professional work. He patiently understood every requirement I had and delivered exactly what I envisioned with great ease. Highly reliable and a pleasure to work with him.",
    },
    {
      id: 2,
      title: "Rahul Sharma",
      work: "Business Owner",
      content:
        "Exceptional experience from start to finish. Communication was smooth and the final output exceeded my expectations.",
    },
    {
      id: 3,
      title: "Priya Mehta",
      work: "Startup Founder",
      content:
        "Very professional and creative. Delivered on time with excellent quality. Highly recommended.",
    },
    {
      id: 4,
      title: "Bushra S",
      work: "Startup Founder",
      content:
        "Hired them for website developing, created an accurate and efficient website matching to my imagination. Very professional, quick and creative with their work. Highly recommend them very happy with their work💯",
    },
    {
      id: 5,
      title: "Syed Jameel Ahamed S.M",
      work: "Startup Founder",
      content:
        "Keen attention to Detail - Patience in dealing with clients - Understanding Customers view point and explaining various options available andvthe resultant outcomes - Irfan did a top class Job..",
    },
    {
      id: 6,
      title: "TARAQ MOHAMED",
      work: "Startup Founder",
      content:
        "A beautiful designer with simple and great creative ideas in marketing to make satisfy his clients.. I'm so happy to travel with him also for my future business..",
    },
    {
      id: 7,
      title: "kumanan T",
      work: "Startup Founder",
      content:
        "Syed made a creative Logo for my cafe. It’s very unique. Also I have given a menu design it’s very professional so I can suggest him to all who need to make a branding & design!",
    },
    {
      id: 8,
      title: "ADVOCATE THUFAIL UR RAHMAN H",
      content:
        "A  customer satisfactory designer. Very much well satisfied with the designer's work !. Premium work done by him ! Awesome desinger !",
    },

    {
      id: 9,
      title: "abduj azeez",
      work: "Startup Founder",
      content:
        "I get suprised for your creative mind in designing Syed Irfan I don't know how many designers designing logos, and pictures work in Vellore but definitely your the one of the best designer in Vellore... And such a kind person worthy for leaving comment for you irfan👍,",
    },
    {
      id: 10,
      title: "pradeep vimal palani velu",
      content:
        "Excellent design...on time delivery ... Catching our thoughts and making it extraordinary... Congrats for ur upcoming projects 👏",
    },

    {
      id: 11,
      title: "Syed Hafiza",

      content:
        "I'm very much impressed by his creativity to create my logo.. just I said him description of my business & in his first try itself I liked the logo so much.. very talented guy.. highly recommend if anyone wants to create logo... Amazing job.. 👏",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonialData.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === testimonialData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <>
      <div className=" hidden md:flex justify-center items-center flex-col">
        <div className="relative text-lg text-white flex flex-col items-center w-full max-w-[1300px]">
          <div className="mt-[10%] flex justify-center items-center">
            <button className="animated-border font-aileron font-normal text-[26px] px-10 py-3 rounded-full text-white mb-10">
              Testimonials
            </button>
          </div>

          <div className="">
            <button
              onClick={handlePrev}
              className="absolute left-20 top-1/2 -translate-y-1/2 w-12 h-12 
    flex items-center justify-center  z-10"
            >
              <img src="/assets/arrow.svg" alt="arrow" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-20 top-1/2 -translate-y-1/2 w-12 h-12 
    flex items-center justify-center  z-10"
            >
              <img src="/assets/left-arrow.svg" alt="arrow" />
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              src="/assets/heart-red.svg"
              alt="heart"
              className="absolute w-[200px] h-[200px] -right-20 -top-3 heart-beat"
            />

            <div className="relative z-10 w-[900px] h-[380px] px-8 py-6 bg-gradient-to-r from-white/20 backdrop-blur-none to-transparent border border-white rounded-3xl shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white mt-[10%]">
              <div className="flex justify-center items-center text-center">
                <div className="flex gap-2 justify-center items-center mb-6 w-[25px] h-[25px] z-10">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/assets/sta.svg"
                      alt="star"
                      className="w-full h-auto"
                    />
                  ))}
                </div>
              </div>

              <div className="absolute w-[725px] h-[450px] flex flex-col items-center  text-center p-3 left-1/2 -translate-x-1/2">
                <p className="text-[20px] leading-9 font-aileron font-normal">
                  {currentTestimonial.content}
                </p>
                <div className=" fixed top-36">
                  <div className=" leading-none mt-10">
                    <p className="font-bold font-aileron text-[20px] uppercase">
                      {currentTestimonial.title}
                    </p>
                    <span className="text-[15px] font-normal font-aileron">
                      {currentTestimonial.work}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="/assets/star-blur.svg"
              className="absolute -left-40 -top-40 w-[200px] "
              alt="start"
            />
          </div>
          <div
            className="
    absolute
    w-[90%] h-full
    top-[300px] left-1/2
    -translate-x-1/2
    pointer-events-none
    z-0
  "
          >
            <img
              src="/assets/skills-rantangale.svg"
              alt="gradient glow"
              className="w-full opacity-90 blur-2xl"
            />
          </div>

          <div className=" mb-10 mt-10 w-[200px] h-[90px] flex flex-col items-center text-white z-10">
            <img
              src="/assets/google.svg"
              alt="google"
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile Responsive */}

      <div className=" block md:hidden  justify-center items-center flex-col px-4">
        <div className="relative text-white flex flex-col items-center w-full max-w-[1300px]">
          <div className="mt-20 flex justify-center items-center">
            <button className="animated-border font-aileron text-[18px] sm:text-[22px] md:text-[26px] px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white mb-12">
              Testimonials
            </button>
          </div>

          <div className="relative flex justify-center items-center w-full mt-10">
            <button
              onClick={handlePrev}
              className="absolute left-0 z-20 w-3 h-3 flex justify-center items-center"
            >
              <img src="/assets/arrow.svg" alt="prev" />
            </button>

            <div className="relative flex justify-center items-center">
              <img
                src="/assets/heart-red.svg"
                alt="heart"
                className="absolute w-[70px] -right-5 -top-5 heart-beat"
              />

              <div className="relative z-10 w-[300px] h-[200px] bg-gradient-to-r from-white/20 backdrop-blur-none to-transparent border border-white rounded-3xl p-6 flex flex-col justify-between shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white">
                <div className="flex justify-center items-center ">
                  <div className="flex gap-1  justify-center items-center">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src="/assets/sta.svg"
                        alt="star"
                        className="w-5 h-auto"
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute w-[300px] h-[200px] flex flex-col items-center  text-center p-3 left-1/2 -translate-x-1/2">
                  <p className="text-[10px]  font-aileron font-normal leading-4 mt-5">
                    {currentTestimonial.content}
                  </p>
                  <div className=" fixed top-36">
                    <div className=" leading-none ">
                      <p className="font-bold font-aileron leading-none text-[8px] uppercase">
                        {currentTestimonial.title}
                      </p>
                      <span className="text-[8px] font-normal leading-none font-aileron">
                        {currentTestimonial.work}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src="/assets/star-blur.svg"
                alt="star"
                className="  absolute -top-40  -left-8 w-[100px]"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 z-20 w-3 h-3 flex justify-center items-center"
            >
              <img src="/assets/left-arrow.svg" alt="next" />
            </button>
          </div>

          <div className="mb-10 mt-5 w-[100px] sm:w-[180px] md:w-[200px]">
            <img
              src="/assets/google.svg"
              alt="google"
              className="w-full h-auto"
            />
          </div>
          <div
            className="
    absolute
    w-[90%] h-full
    top-[300px] left-1/2
    -translate-x-1/2
    pointer-events-none
    z-0
  "
          >
            <img
              src="/assets/skills-rantangale.svg"
              alt="gradient glow"
              className="w-full opacity-90 blur-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
