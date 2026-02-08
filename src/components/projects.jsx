import { GrFormNextLink } from "react-icons/gr";
import { getArray, getString } from "../language/settings";
import { motion } from "framer-motion";

function Projects() {

  const VIEWPORT_CARD = { once: true, margin: "0px 0px -140px 0px" };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: i * 0.24, ease: "easeOut" }
    })
  };


  const projects = getArray("projects.projectsList", []);

  return (
    <section id="projects">
      <div className="projects-container">

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEWPORT_CARD} transition={{ duration: 0.6 }}>
          {getString("projects.sectionTitle")}
        </motion.h2>

        <motion.div className="projects-list" initial="hidden" whileInView="show" viewport={VIEWPORT_CARD}>
          {projects.map((project, index) => (
            <motion.div key={index} className="project" variants={card} initial="hidden" whileInView="show" viewport={VIEWPORT_CARD} custom={index}>
              <div className="bg">
                <div className="image">
                  <img src={`assets/images/projects/${project.image}`} alt={project.title} loading="lazy" />
                </div>

                <div className="content">
                  <h3>{project.title}</h3>

                  <ul>
                    {project.tags.map((tag, i) => (<li key={i}>{tag}</li>))}
                  </ul>

                  <p>{project.description}</p>

                  <div className="links">
                    {(project.githubUrl === "#" || project.githubUrl === "") ? null : <a href={project.githubUrl} target="_blank" rel="noreferrer">{getString("projects.btnGithub")}</a>}
                    {(project.liveUrl === "#" || project.liveUrl === "") ? null :<a className="open" href={project.liveUrl} target="_blank" rel="noreferrer">{getString("projects.btnLive")} <GrFormNextLink /></a>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
