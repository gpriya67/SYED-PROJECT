import { Link } from "react-scroll";

const Footer = () => {
  const footerIcon = [
    {
      id: 1,
      icon: (
        <a
          href="https://www.instagram.com/imsyedjiofficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/instagram.svg" alt="Instagram" />
        </a>
      ),
    },
    {
      id: 2,
      icon: (
        <a
          href="https://www.facebook.com/syedirfan0412"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/face.svg" alt="Facebook" />
        </a>
      ),
    },
    {
      id: 3,
      icon: (
        <a
          href="https://wa.me/918608836033"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/wat.svg" alt="WhatsApp" />
        </a>
      ),
    },
    {
      id: 4,
      icon: (
        <a
          href="https://www.linkedin.com/in/designersyedirfan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/link.svg" alt="LinkedIn" />
        </a>
      ),
    },
    {
      id: 5,
      icon: (
        <a
          href="https://in.pinterest.com/designer_syedirfan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/pint.svg" alt="Pinterest" />
        </a>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col mt-[3%]">
      <footer className="relative w-full bg-[#05050F] overflow-hidden ">
        <div className="absolute w-full top-0 left-0 overflow-hidden">
          <img
            src="/assets/foter.svg"
            alt="curve"
            className="w-full py-4 rounded-full "
          />
        </div>

        <div className="relative max-w-7xl mx-auto rounded-3xl py-5 ">
          <h1
            className="absolute inset-0 flex justify-center items-center 
            text-[70px] sm:text-[100px] md:text-[160px] 
            font-extrabold text-primary select-none pointer-events-none"
          >
            <img
              src="/assets/footer.svg"
              alt="footer"
              className=" opacity-70"
            />
          </h1>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 text-white mt-24 px-4 md:px-5">
            <div className="relative flex flex-col items-center md:items-start">
              <div className="w-[77px] h-[77px] flex items-center justify-center md:absolute md:left-0">
                <img src="/assets/d-icon.svg" alt="icon" />
              </div>

              <p
                className="mt-6 md:absolute md:-left-20 md:top-20 
                text-center md:text-left text-[20px] font-hagrid"
              >
                Let’s make the <span className="text-primary">Impact!</span>
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <ul className=" text-center md:text-left leading-none">
                <li className="cursor-pointer font-aileron font-normal text-[20px] md:text-[20px] hover:text-primary  leading-7">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer font-aileron  font-normal text-[20px] md:text-[20px] hover:text-primary leading-7">
                  <Link to="about">About</Link>
                </li>
                <li className="cursor-pointer font-aileron font-normal text-[20px] md:text-[20px] hover:text-primary leading-7">
                  <Link to="testimonals">Testimonials</Link>
                </li>
                <li className="cursor-pointer font-aileron font-normal text-[20px] md:text-[20px] hover:text-primary leading-7">
                  <Link to="contact">Contact Us</Link>
                </li>
                <li className="cursor-pointer font-aileron font-normal text-[20px] md:text-[20px] hover:text-primary leading-7">
                  Vellore, Tamil nadu
                </li>
              </ul>

              <div className="mt-6 text-center md:text-left">
                <h3 className="text-[20px] md:text-[20px] hover:text-primary   font-aileron leading-7">
                  For Enquiry
                </h3>
                <p>
                  <a
                    href="tel:+918608836033"
                    className="text-white font-aileron font-normal  text-[18px] md:text-[22px] hover:text-primary transition leading-7"
                  >
                    +91 <span className="">86088 36033</span>
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:imsyedirfan00@gmail.com"
                    className="text-white text-[18px] md:text-[22px] hover:text-primary font-aileron  transition leading-7"
                  >
                    imsyedirfan00@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-[20px] md:text-[22px] font-hagrid text-left ">
                Follow me on
              </h3>
              <div className="flex gap-1">
                {footerIcon.map((itm, i) => (
                  <div
                    key={i}
                    className=" w-[35px] h-[35px] hover:scale-110 transition mt-2"
                  >
                    {itm.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" border-t border-primary   mt-10">
          <div
            className="max-w-7xl mx-auto px-4 md:px-10 py-6 
            flex flex-col md:flex-row gap-4 md:gap-0 
            justify-between text-[14px] md:text-[16px] text-white"
          >
            <span className="text-center md:text-left font-aileron font-normal text-[15px]">
              <span className="text-primary font-aileron font-normal text-[15px]">
                Copyright ©{" "}
              </span>
              designer syed Irfan. All rights reserved.
            </span>

            <div className="relative z-[999] flex justify-center md:justify-end items-center gap-1 text-[15px] font-aileron">
              <span>Designed with</span>

              <span className="w-3 h-3 inline-flex">
                <img
                  src="/assets/BRAND SPARK HEARD (1).svg"
                  alt="brand"
                  className="w-full h-auto"
                />
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://brandspark.in/", "_blank");
                }}
                className="text-primary hover:underline cursor-pointer bg-transparent border-none p-0 font-aileron"
              >
                Brand Spark
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
