import img from '../assets/images/home.png'
import DropdownDownload from './dropdown-download.jsx'
import Navbar from './navbar.jsx'
import { getString } from '../language/settings';
import { motion } from "framer-motion";

function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };
  return (
    <>
        <section id='home'>
            <Navbar />
            <div className="home-container">
              <div className='home-container-content'>

                <motion.h2 variants={fadeUp} initial="hidden" animate="show" custom={0}>
                  {getString("home.label")}
                </motion.h2>

                <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={0.15}>
                  {getString("home.name")}
                </motion.h1>
                <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.3}>
                {getString("home.description")}
                </motion.p>
                <motion.div className="btns" variants={fadeUp} initial="hidden" animate="show" custom={0.45}>
                  <a className='btn blur' href='#contact'>{getString("home.button.contact")}</a>
                  <DropdownDownload />
                </motion.div>
              </div>
              <img className='img' src={img} />
            </div>
            <div className='frame'></div>
            <div class="home-glow"></div>
        </section>
    </>
  )
}
export default Home