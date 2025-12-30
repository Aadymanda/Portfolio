import { motion } from "framer-motion";
import { colors, comicTitleStyle, commonStyles } from "../utils/theme";

const skills = [
  { icon: "⚛️", name: "React & React Native" },
  { icon: "🔄", name: "Redux Saga" },
  { icon: "☕", name: "Java" },
  { icon: "🍃", name: "Spring Boot" },
  { icon: "🌐", name: "HTML & CSS" },
  { icon: "⚡", name: "JavaScript" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "🧊", name: "Three.js & WebGL" },
  { icon: "🚀", name: "Node.js & Express" },
  { icon: "🐍", name: "Python & Django" },
];

const TechStack = () => {
  return (
    <section style={commonStyles.section}>
      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        style={{ ...comicTitleStyle, fontSize: "4rem", marginBottom: "3rem", textAlign: "right" }}
      >
        My Arsenal
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: colors.glassBg,
              border: `1px solid ${colors.glassBorder}`,
              padding: "1.5rem",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{skill.icon}</span>
            <span style={{ color: colors.white, fontSize: "1.2rem", fontWeight: "bold" }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;