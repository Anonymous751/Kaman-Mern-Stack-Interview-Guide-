// FadeScrollWrapper.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * FadeScrollWrapper
 *
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Optional wrapper class
 * @param {number} yDistance - Vertical offset for animation (default: 50)
 */
const FadeScrollWrapper = ({
  children,
  className = "",
  yDistance = 50,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        {
          autoAlpha: 0,
          y: yDistance,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 85%",      // element enters viewport
            toggleActions: "play none none none",
            once: true,            // 🔥 animate only once
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, [yDistance]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default FadeScrollWrapper;
