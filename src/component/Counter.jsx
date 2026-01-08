import { useEffect, useRef, useState } from "react";

const Counter = ({ end, duration = 2000, leadingZero = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 30);
          const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(interval);
            }
            setCount(Math.floor(start));
          }, 30);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  const displayNumber = leadingZero && count < 10 ? `0${count}` : count;

  return <span ref={ref}>{displayNumber}</span>;
};

export default Counter;
