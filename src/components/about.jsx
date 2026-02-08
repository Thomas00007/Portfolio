import imgAbout from '../assets/images/about.png'
import DropdownDownload from './dropdown-download.jsx'
import { getString, getArray } from '../language/settings';
import { motion } from "framer-motion";

function About() {
    const VIEWPORT_LATE = { once: true, margin: "0px 0px -320px 0px" };

    const container = {
        hidden: {},
        show: {
        transition: { staggerChildren: 0.12 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const paragraph = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about">
            <div className="about-container">

                <motion.div className="image" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT_LATE} transition={{ duration: 0.7 }}>
                <img src={imgAbout} alt="About" />
                </motion.div>

                <motion.div className="about-content" variants={container} initial="hidden" whileInView="show" viewport={VIEWPORT_LATE}>
                <motion.h2 variants={fadeUp}><span>{getString("about.sectionTitle")}</span></motion.h2>

                {getArray("about.paragraphs").map((text, index) => (
                    <motion.p key={index} variants={paragraph}>{text}</motion.p>
                ))}

                <motion.div variants={fadeUp}><DropdownDownload /></motion.div>
                </motion.div>

            </div>
        </section>
    )
}
export default About