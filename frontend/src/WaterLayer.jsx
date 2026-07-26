import { useEffect } from "react";

export default function WaterLayer() {
  useEffect(() => {
    const canvas = document.getElementById("waterLayer");
    const ctx = canvas.getContext("2d");
    const navbarHeight = document.getElementById("navbar")?.offsetHeight || 60;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const ovals = [];

    function createOval(position) {
      const width = canvas.width;
      const height = canvas.height;
      const ovalHeight = 50; // same for top & bottom

      ovals.push({
        x: width / 2,
        y:
          position === "top"
            ? navbarHeight + ovalHeight / 2
            : height - ovalHeight / 2,
        width: width / 2, // full width
        height: ovalHeight / 2,
        alpha: 0, // start invisible
        fadeIn: true, // fade-in first
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ovals.forEach((oval, index) => {
        // Fade in/out logic
        if (oval.fadeIn) {
          oval.alpha += 0.05; // fade in speed
          if (oval.alpha >= 0.5) oval.fadeIn = false; // switch to fade-out
        } else {
          oval.alpha -= 0.02; // fade out speed
          if (oval.alpha <= 0) {
            ovals.splice(index, 1); // remove when fully faded
            return;
          }
        }

        // Draw oval with gradient
        const gradient = ctx.createLinearGradient(
          0,
          oval.y - oval.height,
          0,
          oval.y + oval.height
        );
        gradient.addColorStop(0, `rgba(150,150,150,${oval.alpha / 2})`);
        gradient.addColorStop(0.5, `rgba(150,150,150,${oval.alpha})`);
        gradient.addColorStop(1, `rgba(150,150,150,${oval.alpha / 2})`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(oval.x, oval.y, oval.width, oval.height, 0, 0, 2 * Math.PI);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    let scrollTimeout;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight;
        const clientHeight = window.innerHeight;

        // Trigger oval at top
        if (scrollTop <= navbarHeight) createOval("top");

        // Trigger oval at bottom
        if (scrollTop + clientHeight >= scrollHeight - 1) createOval("bottom");
      }, 150); // trigger on scroll end
    });
  }, []);

  return (
    <canvas
      id="waterLayer"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5, // below content
      }}
    />
  );
}
