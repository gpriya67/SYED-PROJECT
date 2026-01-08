import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ScrollPercentage from "./ScrollPercentage";

const Header = () => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Skills", path: "skills" },
    { id: 4, name: "Testimonials", path: "testimonials" },
    { id: 5, name: "Portfolio", path: "project" },
    { id: 6, name: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setScrolled(y > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4  md:px-20   ">
        <div
          className={`absolute md:top-[-20px] left-0 w-full pointer-events-none
    transition-all duration-500 ease-out
    ${
      scrolled
        ? "h-40 bg-gradient-to-b from-black/80 via-black/50 to-transparent"
        : "h-0"
    }
  `}
        />

        <div
          className="
          relative flex justify-center items-center w-full  md:max-w-[1300px]  
          text-white
          md:px-10 md:py-4  px-6 py-3 rounded-full
          backdrop-blur-none  border-2 border-white
            bg-gradient-to-r from-white/20 to-transparent  shadow-[inset_0_0_30px_rgba(20,20,20,0.20)]  shadow-white
        "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent " />

          <div className="relative w-5 h-5 md:w-10 md:h-10 mr-auto z-10">
            <img
              src="/assets/logo.svg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <ul className="relative hidden md:flex items-center gap-8 text-white text-[18px] z-10">
            {navItem.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  smooth
                  spy
                  offset={-90}
                  duration={500}
                  onSetActive={() => setActive(item.id)}
                  className={`cursor-pointer px-4 py-2 rounded-full font-normal font-aileron transition-all duration-300 text-2xl ${
                    active === item.id
                      ? "bg-white/20 border border-white/40 font-normal font-aileron text-white shadow-[inset_0_0_30px_rgba(255,255,255,0.25)]  shadow-white"
                      : "text-white/70 hover:text-white hover:bg-white/10 font-normal font-aileron"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="relative md:hidden text-white text-2xl z-10"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div
            className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[92%] max-w-md
          backdrop-blur-2xl bg-white/10 border border-white/20 font-normal font-aileron
          rounded-2xl py-6 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center text-white text-[20px] cursor-pointer font-normal font-aileron">
              {navItem.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    smooth
                    offset={-90}
                    duration={500}
                    onClick={() => {
                      setActive(item.id);
                      setOpen(false);
                    }}
                    className={`block  rounded-xl transition-all duration-300  font-normal font-aileron${
                      active === item.id
                        ? "bg-white/20 border border-white/30"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="fixed bottom-6 left-0 w-full z-40 px-4 md:px-20">
          <div className="flex justify-between items-center mx-auto">
            <ScrollPercentage />

            <a
              href="https://wa.me/918608836033"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[54px] h-[54px]">
                <img
                  src="/assets/whatapp.svg"
                  alt="WhatsApp"
                  className=" w-full h-auto cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
