"use client"; // This is a client component 👈🏽
import "./page.module.css";
import Box from "../../components/box/Box";
import AnimatedSVG from "../../components/hand/AnimatedSVG";
import MotionGraph from "../../components/motion/MotionGraph";
import MotionGraphGreen from "../../components/motion/MotionGraphGreen";
import MorphingCircle from "../../components/motion/Circle";

const Home = () => {

  return (
    <>
    <h1>Animation Work</h1>
        {/* <Box /> */}
        {/* <AnimatedSVG/> */}
        {/* <MotionGraphGreen/> */}
        <MorphingCircle/>
    </>
  );
};

export default Home;
