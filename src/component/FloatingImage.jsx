const FloatingImage = () => {
  return (
    <div className="relative w-full z-20 pointer-events-none">
      <img
        src="/assets/Rectangle (1).svg"
        alt="flow"
        className="
          absolute
          left-6 sm:left-16 md:left-28 lg:left-36
          -top-[100px] sm:-top-[300px] md:-top-[360px] lg:-top-[400px]
          w-[100px] sm:w-[200px] md:w-[240px] lg:w-[280px]
          opacity-90
        "
      />
    </div>
  );
};

export default FloatingImage;
