import React, { useEffect, useRef, useState } from "react";

const CursorPointer = ({ speed = 0.08 }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  const [, forceRender] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * speed;
      trail.current.y += (mouse.current.y - trail.current.y) * speed;

      forceRender((v) => v + 1);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <>
      <div
        className="fixed bg-primary h-2 w-2 rounded-full pointer-events-none z-[9999]"
        style={{
          top: mouse.current.y,
          left: mouse.current.x,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="fixed border-2 border-primary h-10 w-10 rounded-full pointer-events-none z-[9998]"
        style={{
          top: trail.current.y,
          left: trail.current.x,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CursorPointer;
