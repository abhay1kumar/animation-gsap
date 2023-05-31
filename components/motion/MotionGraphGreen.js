import React, { useEffect, useRef } from "react";
import { gsap, Power1 } from "gsap";
const MorphingSVG = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const paths = svgElement.querySelectorAll("path");

    gsap.set(paths, { opacity: 0 }); // Hide all paths initially

    const timeline = gsap.timeline({ delay: 1 }); // Delay between each animation

    paths.forEach((path, index) => {
      const strokeColor = getRandomColor(); // Generate a random stroke color

      const previousPath = index > 0 ? paths[index - 1] : null;

      timeline.to(path, {
        duration: 1,
        opacity: index === paths.length ? 0 : 1,
        morphSVG: index === 0 ? "#path1" : `#path${index + 1}`,
        stroke: strokeColor, // Set the stroke color
        ease: Power1.easeInOut,
        onComplete: () => {
          if (previousPath) {
            gsap.set(previousPath, { opacity: 0 });
          }
        },
      });
    });
  }, []);

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ position: "relative", width: "200px", height: "200px" }}>
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path id="path1" d="M10 10 L90 90" fill="none" stroke="black" />
        <path id="path2" d="M90 10 L10 90" fill="none" stroke="black" />
        <circle id="path6" cx="50" cy="50" r="40" fill="none" stroke="black" />
        <path id="path3" d="M50 10 L10 90" fill="none" stroke="black" />
        <path id="path4" d="M10 10 L50 90" fill="none" stroke="black" />
        <path id="path5" d="M90 10 L90 90" fill="none" stroke="black" />
  
      </svg>
    </div>
  );
};

export default MorphingSVG;
