const BackGroundImage = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <img
        src="/assets/back-ground.svg"
        alt="global-bg"
        className="
          absolute
          bottom-[-200px]
          left-1/2
          -translate-x-1/2
          w-[1200px]
          opacity-40
        "
      />
    </div>
  );
};

export default BackGroundImage;
