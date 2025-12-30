import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Sparkles, Float, Environment } from "@react-three/drei";

// --- Imports ---
import { colors } from "./utils/theme";
import ParticleBurst from "./components/3d/ParticleBurst"; 

// Page Sections
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import TechStack from "./sections/TechStack";
import SelectedWorks from "./sections/SelectedWorks";
import Contact from "./sections/Contact";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Bangers&family=Inter:wght@300;400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

export default function App() {
  // 1. State to manage the number of pages
  const [pages, setPages] = useState(6); // Default

  // 2. Responsive Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      // LOGIC: Mobile needs MORE pages because text wraps vertically
      if (width < 600) {
        setPages(8); // Mobile (Tallest)
      } else if (width < 1024) {
        setPages(7.5);   // Tablet
      } else {
        setPages(6);   // Desktop (Shortest)
      }
    };

    // Run on mount
    handleResize();

    // Run on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: colors.bg }}>
      <FontLoader />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <color attach="background" args={[colors.bg]} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} color={colors.primary} />
        <pointLight position={[10, 10, 10]} intensity={2} color={colors.secondary} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={colors.primary} />

        {/* 3. Pass the dynamic 'pages' state here */}
        <ScrollControls pages={pages} damping={0.25}>
          
          <Scroll html style={{ width: "100%" }}>
            <style>{`
              ::-webkit-scrollbar { display: none; }
              body { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <div style={{ width: "100%", color: colors.textBody, fontFamily: "'Inter', sans-serif" }}>
              <Hero />
              <Introduction />
              <TechStack />
              <SelectedWorks />
              <Contact />
              {/* Extra buffer at the bottom just in case */}
              <div style={{ height: "15vh" }}></div>
            </div>
          </Scroll>

          <Sparkles count={600} scale={[15, 15, 15]} size={3} speed={0.3} opacity={0.5} noise={0.1} color={colors.secondary} />
          <Sparkles count={300} scale={[10, 10, 10]} size={4} speed={0.5} opacity={0.4} color={colors.white} />

          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.1}>
            <ParticleBurst />
          </Float>

        </ScrollControls>
      </Canvas>
    </div>
  );
}