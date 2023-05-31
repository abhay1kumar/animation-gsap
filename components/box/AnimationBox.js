const BoxAnimation = ({ children, className, anim }) => {
  console.log("children", children)
  console.log("className", className)
  console.log("anim", anim)
    return (
      <div className={"box " + className} data-animate={anim}>
        {children}
      </div>
    );
  };
  
  export default BoxAnimation;