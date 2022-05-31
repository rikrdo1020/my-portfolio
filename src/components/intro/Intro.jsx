import "./intro.scss"
import { useEffect, useRef } from "react";
import Typed from 'typed.js';

export default function Intro() {

  const textRef = useRef();
  const domRef = useRef();
  
  useEffect(()=>{
    const options = {
      strings: ['Wordpress', 'React Js', 'PHP' ]  ,
      typeSpeed: 70,
      backSpeed: 70,
      loop:true,
    };
    domRef.current = new Typed(textRef.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      domRef.current.destroy();
    }
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/ricardo-barria.png" alt="Ricardo Barria" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I'm</h2>
          <h1>Ricardo Barria</h1>
          <h3><span ref={textRef}></span> Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
