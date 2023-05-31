const { useLayoutEffect, useRef } = React;
import React from 'react'
import BoxAnimation from './AnimationBox';
import { gsap } from 'gsap';
const Box = () => {
    const app = useRef();
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        // Target the two specific elements we have asigned the animate class
        gsap.to("[data-animate='rotate']", {
          rotation: 360,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          duration: 3,
        });
  
        gsap.to("[data-animate='move']", {
          x: 100,
          repeat: -1,
          repeatDelay: 1,
          duration: 3,
          yoyo: true,
        });
  
        gsap.set(".dont-animate", {
          backgroundColor: "red",
        });

        gsap.set(".animate", {
          backgroundColor: "green",
          x:200
        });
      }, app); // <- Scope!
  
      return () => ctx.revert();
    }, []);
  
    return (
      <div className="app" ref={app}>
        <div></div>
        <BoxAnimation className="animate" anim="move">

        Left Div
        </BoxAnimation>
        <BoxAnimation className="dont-animate" anim="rotate">Don&rsquo;t Animate Me</BoxAnimation>
        <BoxAnimation className="animate" anim="move">

Right Div
          
        </BoxAnimation>
      </div>
    );
}

export default Box