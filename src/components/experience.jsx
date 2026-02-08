import { MdOutlineWorkOutline } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { getString, getArray } from "../language/settings";
import { motion } from "framer-motion";

const VIEWPORT_LATE = { once: true, margin: "0px 0px -320px 0px" };

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const listContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const listItem = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.18 }
  })
};
function Experience() {
  return (
    <section id="experience">
      <div className="experience-container">

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
          {getArray("experience.sectionTitle").map((line, index) => (
            <span key={index}>{line}{index === 0 ? <br /> : null}</span>
          ))}
        </motion.h2>

        <div className="experience-content">

          <motion.div className="timeline" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
            <h4><span className="icon"><IoSchoolOutline /></span>{getString("experience.education")}</h4>
            <motion.ul variants={listContainer} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
              {getArray("experience.educationList").map((school, index) => (
                <motion.li key={index} variants={listItem} custom={index}>
                  <p>{school.duration}</p>
                  <h3>{school.degree}</h3>
                  <p className="text">{school.institution}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div className="timeline" variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
            <h4><span className="icon"><MdOutlineWorkOutline /></span>{getString("experience.experience")}</h4>
            <motion.ul variants={listContainer} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
              {getArray("experience.jobs").map((job, index) => (
                <motion.li key={index} variants={listItem} custom={index}>
                  <p>{job.duration}</p>
                  <h3>{job.position}</h3>
                  <p className="text">{job.company}</p>
                  <p className="text">{job.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Experience;