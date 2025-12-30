import { motion } from "framer-motion";
import { colors, comicTitleStyle, commonStyles } from "../utils/theme";

const Contact = () => {
  return (
    <section style={{ ...commonStyles.section, textAlign: "center", minHeight: "80vh" }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ ...comicTitleStyle, fontSize: "5rem", marginBottom: "1rem" }}>Let's Talk</h2>
        
        <p style={{ ...commonStyles.text, fontSize: "1.5rem", marginBottom: "3rem" }}>
          Have an idea? Let's make something awesome together.
        </p>

        <motion.a
          href="mailto:aadarshbabu275@example.com"
          whileHover={{
            scale: 1.1,
            rotate: -2,
            boxShadow: `5px 5px 0 ${colors.secondary}`,
            background: colors.white,
            color: colors.black,
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            textDecoration: "none",
            display: "inline-block",
            padding: "20px 50px",
            background: colors.primary,
            color: colors.white,
            fontSize: "1.8rem",
            fontFamily: "'Bangers', cursive",
            letterSpacing: "2px",
            border: `3px solid ${colors.black}`,
            borderRadius: "15px",
            boxShadow: `5px 5px 0 ${colors.black}`,
            transition: "all 0.3s ease",
          }}
        >
          Contact Me!
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;