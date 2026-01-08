import { useEffect, useState } from "react";

const ScrollPercentage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = Math.round((scrollTop / docHeight) * 100);
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <div className="w-[54px] h-[54px] relative flex items-center justify-center  hover:scale-110 cursor-pointer">
      <div
        className="
      absolute inset-0
      rounded-xl
      border
      bg-white/30
      backdrop-blur-md
      border-white
      shadow-[inset_0_0_10px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.25)]
    "
      />

      <svg
        className="w-[40px] h-[40px] -rotate-90 relative z-10"
        viewBox="0 0 80 80"
      >
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#d1d5db"
          strokeWidth="6"
          fill="none"
        />

        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#ffffff"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      <span
        className="
      absolute
      text-white
      text-[10px]
      font-aileron
      font-normal
      z-20
    "
      >
        {scrollPercent}%
      </span>
    </div>
  );
};

export default ScrollPercentage;
