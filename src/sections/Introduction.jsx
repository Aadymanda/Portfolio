import { motion } from "framer-motion";
import { colors, comicTitleStyle, commonStyles } from "../utils/theme";

// ✅ IMPORT YOUR JFIF IMAGE HERE
import profileImg from "../assets/profile.jfif"; 

const Introduction = () => {
  return (
    <section style={commonStyles.section}>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "space-between",
          flexWrap: "wrap",    
          gap: "4rem" 
        }}
      >
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div style={{ flex: 1, minWidth: "300px" }}>
            <h2 style={{ 
                ...comicTitleStyle, 
                fontSize: "clamp(3rem, 6vw, 5rem)", 
                marginBottom: "1rem",
                lineHeight: "1.1"
            }}>
              I AM AADARSH BABU
            </h2>
            
            <div style={{ ...commonStyles.text }}>
              <p style={{ marginBottom: "1.5rem", fontSize: "1.4rem", fontWeight: "300" }}>
                I'm a passionate developer who bridges the gap between raw code and 
                interactive art.
              </p>
              
              <p style={{ marginBottom: "1.5rem" }}>
                I believe the web shouldn't just be static pages—it should be an <span style={{ color: colors.secondary, fontWeight: "bold" }}>experience</span>.
              </p>

              <p>
                With a background in full-stack engineering and a love for 3D graphics, 
                I specialize in building performant web applications that look as good 
                as they feel. When I'm not coding, you can find me exploring new 
                rendering techniques or optimizing backend APIs.
              </p>
            </div>
        </div>

        {/* RIGHT SIDE: IMAGE CONTAINER */}
        <div style={{ position: "relative", width: "350px", height: "350px" }}>
            
            {/* 1. Background Box (Starts Blue -> Hovers Purple) */}
            <motion.div
                initial={{ x: 20, y: 20 }}
                whileHover={{ x: 30, y: 30, borderColor: colors.primary }} // Hover turns PURPLE
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: `5px solid ${colors.secondary}`, // Initially BLUE
                    borderRadius: "20px",
                    zIndex: 0,
                    opacity: 0.6,
                    transition: "border-color 0.3s ease"
                }}
            />

            {/* 2. Main Image (Starts Purple -> Hovers Blue) */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ 
                    scale: 1.05, 
                    rotate: -2, 
                    borderColor: colors.secondary, // Turns BLUE
                    boxShadow: `0 0 50px ${colors.secondary}` // BLUE Glow
                }}
                transition={{ duration: 0.3 }}
                style={{ 
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                    border: `5px solid ${colors.primary}`, // Initially PURPLE
                    borderRadius: "20px",
                    boxShadow: `0 0 30px ${colors.primary}80`, // Initial PURPLE Glow
                    overflow: "hidden",
                    backgroundColor: "#000"
                }}
            >
                <img 
                    src={profileImg} 
                    alt="Aadarsh Babu" 
                    style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" 
                    }} 
                />
            </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default Introduction;