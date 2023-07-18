import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import linkedin from "../../src/assets/linkedin.png"

const Contact = () => {
  return (
    <div className="flex flex-col-reverse  overflow-hidden xl:mt-12 xl:flex-row h-[70%]">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-purple-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-col gap-8 mt-5">
          <div className="w-[400px] flex gap-12 ">
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="w-[60px] h-[60px]"
            />
            <a
              href="https://www.linkedin.com/in/l%C3%A9a-vernay-6067601bb/"
              target="_blank"
              alt="linkedin link"
              className="py-3 text-2xl text-black hover:text-blue-100"
            >
              Léa Vernay
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
