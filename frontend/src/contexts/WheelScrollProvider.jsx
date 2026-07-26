import { useEffect } from "react";

export default function WheelScrollProvider({ children, multiplier = 5 }) {
  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default browser scroll
      e.preventDefault();

      // Scroll manually with multiplier
      window.scrollBy({
        top: e.deltaY * multiplier, // increase multiplier for faster scroll
        left: 5,
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [multiplier]);

  return <>{children}</>;
}
