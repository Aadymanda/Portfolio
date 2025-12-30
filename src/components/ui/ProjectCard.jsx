import { motion } from "framer-motion";
import { colors, comicTitleStyle } from "../../utils/theme";

const ProjectCard = ({ title, desc, tags, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    whileHover={{
      scale: 1.03,
      translateY: -5,
      borderColor: colors.secondary,
      boxShadow: `0 10px 30px -10px ${colors.secondary}`,
    }}
    style={{
      background: colors.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${colors.glassBorder}`,
      padding: "2rem",
      borderRadius: "20px",
      width: "300px",
      margin: "1rem",
      color: colors.textBody,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    }}
  >
    <h3
      style={{
        ...comicTitleStyle,
        fontSize: "1.8rem",
        marginBottom: "0.8rem",
        textShadow: `2px 2px 0 ${colors.black}, 4px 4px 0 ${colors.primary}`,
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.95rem",
        lineHeight: "1.6",
        opacity: 0.9,
        marginBottom: "1.2rem",
      }}
    >
      {desc}
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            fontWeight: "bold",
            padding: "4px 12px",
            background: `linear-gradient(135deg, ${colors.primary}80, ${colors.secondary}60)`,
            border: `1px solid ${colors.secondary}40`,
            borderRadius: "20px",
            color: colors.white,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;