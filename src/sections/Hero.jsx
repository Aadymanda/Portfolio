import { motion } from "framer-motion";
import Typewriter from "../components/ui/Typewriter";
import { colors, comicTitleStyle } from "../utils/theme";

const Hero = () => {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          marginBottom: "20px",
          fontSize: "4.5rem",
          filter: "sepia(100%) saturate(500%) hue-rotate(245deg) brightness(80%)",
        }}
      >
        👾
      </motion.div>

      <div style={{ position: "relative", padding: "10px" }}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            ...comicTitleStyle,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: "1",
            margin: 0,
            position: "relative",
            zIndex: 2,
          }}
        >
          WELCOME TO
          <br />
          MY PORTFOLIO
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          fontSize: "1.4rem",
          color: colors.white,
          marginTop: "30px",
          fontWeight: "700",
          letterSpacing: "1px",
          textTransform: "uppercase",
          textShadow: `0 0 15px ${colors.primary}, 0 0 30px ${colors.primary}`,
        }}
      >
        <span style={{ marginRight: "10px" }}>I AM</span>
        <Typewriter
          words={[
            "AADARSH BABU",
            "A CREATIVE DEVELOPER",
            "A UI ENTHUSIAST",
            "A BACKEND WIZARD",
            "A REACT LOVER",
          ]}
        />
      </motion.div>
    </section>
  );
};

export default Hero;