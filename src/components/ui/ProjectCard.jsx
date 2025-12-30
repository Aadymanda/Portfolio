import { motion } from "framer-motion";
import { colors, comicTitleStyle } from "../../utils/theme";

const ProjectCard = ({ title, desc, tags, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
    whileHover={{
      scale: 1.02,
      translateY: -5,
      borderColor: colors.secondary,
      boxShadow: `0 10px 30px -10px ${colors.secondary}`,
    }}
    style={{
      background: colors.glassBg,
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: `1px solid ${colors.glassBorder}`,
      
      // --- COMPACT SIZING FIXES ---
      padding: "1rem",           // Reduced padding (Less indentation)
      borderRadius: "12px",      
      width: "100%",             
      height: "100%",            // Forces it to fill the grid cell
      display: "flex",         
      flexDirection: "column",
      justifyContent: "space-between", // Pushes tags to bottom, title to top
      // -----------------------------

      color: colors.textBody,
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
    }}
  >
    {/* Top Section: Title & Description */}
    <div>
      <h3
        style={{
          ...comicTitleStyle,
          fontSize: "1.2rem",    // Smaller Title
          marginBottom: "0.5rem",
          letterSpacing: "1px",
          textShadow: `1px 1px 0 ${colors.black}, 2px 2px 0 ${colors.primary}`,
        }}
      >
        {title}
      </h3>
      
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.85rem",   // Smaller Text
          lineHeight: "1.4",     // Tighter lines
          opacity: 0.9,
          marginBottom: "1rem",  // Less space below text
        }}
      >
        {desc}
      </p>
    </div>

    {/* Bottom Section: Tags */}
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.65rem", // Tiny Tag Text
            fontWeight: "bold",
            padding: "2px 8px",  // Smaller Tag Padding
            background: `linear-gradient(135deg, ${colors.primary}80, ${colors.secondary}60)`,
            border: `1px solid ${colors.secondary}40`,
            borderRadius: "10px",
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