import SpotlightCard from "./reactbits/SpotlightCard";
import { getString, getArray } from "../language/settings";
import { motion } from "framer-motion";

function Skills() {
  const VIEWPORT_LATE = { once: true, margin: "0px 0px -320px 0px" };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
    })
  };


    const skills = getArray("skills.list", []);

  return (
    <section id="skills">
      <div className="skills-container">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_LATE} transition={{ duration: 0.6 }}>
          {getString("skills.sectionTitle")}
        </motion.h2>

        <motion.div className="skills-grid" initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
          {skills.map((itemSkill, index) => (
            <motion.div key={itemSkill.name} variants={item} custom={index}>
              <SpotlightCard className="custom-spotlight-card skill-item cursor-hoverable" spotlightColor="rgba(255, 102, 0, 0.2)">
                <img src={`assets/images/skills/${itemSkill.imgSrc}`} loading="lazy" alt={itemSkill.name} />
                <h3>{itemSkill.name}</h3>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
