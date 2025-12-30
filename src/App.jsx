import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Sparkles, Float, Environment } from "@react-three/drei";

// --- Imports ---
import { colors } from "./utils/theme";
import ParticleBurst from "./components/3d/ParticleBurst"; // Imported Component

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
  return (
    <div style={{ width: "100vw", height: "100vh", background: colors.bg }}>
      <FontLoader />
      
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <color attach="background" args={[colors.bg]} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} color={colors.primary} />
        <pointLight position={[10, 10, 10]} intensity={2} color={colors.secondary} />
        <pointLight position={[-10, -10, -10]} intensity={1} color={colors.primary} />

        {/* pages={6} ensures the Contact section is reachable */}
        <ScrollControls pages={6} damping={0.25}>
          
          {/* HTML Overlay */}
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
              <div style={{ height: "10vh" }}></div>
            </div>
          </Scroll>

          {/* 3D Background Elements */}
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