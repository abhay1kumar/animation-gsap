import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import Shape1 from "../../public/Assets/motoin/box1.svg";
import Shape2 from "../../public/Assets/motoin/box2.svg";
import Shape3 from "../../public/Assets/motoin/box3.svg";
import Shape4 from "../../public/Assets/motoin/box4.svg";
import Shape5 from "../../public/Assets/motoin/box5.svg";

const MotionGraph = () => {
    const myShape = useRef();
//   useEffect(() => {
//     gsap.to(Shape1.current, { morphSVG: Shape2.current, duration: 2 });
//   });

  useEffect(() => {
    gsap.to(myShape.current, { morphSVG: Shape1, duration: 2 });
  }, []);
  return (
    <div>
      <svg>
        <path ref={myShape} d="..." />
      </svg>
    </div>
  );
};

export default MotionGraph;
