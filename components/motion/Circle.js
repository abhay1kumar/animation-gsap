import React, { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

const MorphingCircle = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const circles = svgElement.querySelectorAll('circle');

    gsap.set(circles, { opacity: 0 }); // Hide all circles initially

    const timeline = gsap.timeline({ delay: 1 }); // Delay between each animation

    circles.forEach((circle, index) => {
      const strokeColor = getRandomColor(); // Generate a random stroke color

      const previousCircle = index > 0 ? circles[index - 1] : null;

      timeline.to(circle, {
        duration: 1,
        opacity: index === circles.length  ? 0 : 1,
        cx: circle.getAttribute('cx'),
        cy: circle.getAttribute('cy'),
        r: circle.getAttribute('r'),
        stroke: strokeColor, // Set the stroke color
        fill:strokeColor,
        ease: Power1.easeInOut,
        onComplete: () => {
          if (previousCircle) {
            gsap.set(previousCircle, { opacity: 0 });
          }
        },
      });
    });
  }, []);

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="black" />
      </svg>
    </div>
  );
};

export default MorphingCircle;
