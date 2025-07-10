import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './PreLoader.css';
import { Canvas } from "@react-three/fiber";
import Model from "./Model/Model";
import { OrbitControls } from "@react-three/drei";

const PreLoader = () => {
  const preLoaderRef = useRef();

  useEffect(() => {
   
    gsap.to(preLoaderRef.current, {
      duration: 0.8,       
      y: "-100%",          
      ease: "power4.in",   
      delay: 4,            
      onComplete: () => {
        preLoaderRef.current.style.display = "none"; 
      }
    });
  }, []);

  return (
    <div ref={preLoaderRef} className="preLoader">
      <div className="text1">
      <div className="texts-container">
        <span className="span1">Code</span>
        <span className="span1">Is</span>
        <span className="span1">Poetry</span>
      </div>
      </div>
      <div className="modeldiv">
          <Canvas>
            <Model/>
          <OrbitControls autoRotate enableZoom={false}/>
          </Canvas>
        </div>
    </div>
  );
};

export default PreLoader;
