import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Projects from "./sections/Projects/Projects"
import NavBar from "../../components/NavBar/NavBar"
import { motion } from "framer-motion"
import { Divider } from "@mui/material"
import Tecnologias from "./sections/Skills/Skills"

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home: React.FC = () => {

    return (
      <>
        <NavBar />
        <div id="home">
        <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
                <Hero />
            </motion.div>
          </div>
          
<Divider style={{ margin: '0.001px 0', backgroundColor: '#ccc' }} />

        <div id="about">
        <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
          <About />
          </motion.div>
        </div>
<Divider style={{ margin: '0.001px 0', backgroundColor: '#ccc' }} />

        <div id="projects">
        <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
          <Projects />
          </motion.div>
          
        </div>
        
        <Divider style={{ margin: '0.001px 0', backgroundColor: '#ccc' }} />      

        <div id="tecnologias">
        <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 0.5 }}
            >
          <Tecnologias />
          </motion.div>
          
        </div>


      </>
    )
  }
  
  export default Home
  