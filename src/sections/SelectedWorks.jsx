import { motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import { comicTitleStyle, commonStyles } from "../utils/theme";

const projects = [
  {
    title: "Health Care App",
    desc: "Comprehensive health platform to calculate BMI, generate diet plans, and track wellness metrics.",
    tags: ["React", "Node.js", "HealthAPI"],
  },
  {
    title: "Spotify Clone",
    desc: "Fully functional music streaming interface featuring playback controls and dynamic playlists.",
    tags: ["React", "Redux", "Spotify API"],
  },
  {
    title: "Wish-Mail",
    desc: "Automated email system using Python NLP to generate and schedule personalized wishes.",
    tags: ["Python", "NLP", "Flask"],
  },
  {
    title: "Happify",
    desc: "Mental wellbeing platform helping users track moods and build positive daily habits.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Solr E-Commerce",
    desc: "Advanced search engine leveraging Apache Solr and Dense Vector for semantic product matching.",
    tags: ["Apache Solr", "Dense Vector", "Spring Boot"],
  }
];

const SelectedWorks = () => {
  return (
    <section style={{ ...commonStyles.section, minHeight: "auto", paddingBottom: "4rem" }}>
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        style={{ ...comicTitleStyle, fontSize: "3.5rem", marginBottom: "2.5rem" }}
      >
        Selected Works
      </motion.h2>

      <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", 
          
          // ✅ INCREASED GAP: 60px for maximum separation
          gap: "60px", 
          
          width: "100%",
          gridAutoRows: "1fr" 
      }}>
        {projects.map((project, index) => (
          <a 
            key={index}
            href="https://github.com/Aadymanda" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block' }} 
          >
            <ProjectCard
              delay={index * 0.1}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;