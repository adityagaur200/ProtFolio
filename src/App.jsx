import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import DShape from "./Components/3DShape";
import Page2 from "./Components/Page2";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import PreLoader from "./Components/PreLoader";
import { Box, OrbitControls, SpotLight } from '@react-three/drei';
import './App.css';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {showPreloader && 
     
      <PreLoader />
      }

      
      <div className={`main-content ${showPreloader ? "hidden" : ""}`}>
        <div className="shapediv">
          <Canvas>
            <DShape />
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
        <Page2 />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
