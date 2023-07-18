import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import linkedin from "../../src/assets/linkedin.png"

const Ref = () => {
  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row h-[70%] ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-purple-100 p-5 rounded-2xl "
      >
        <h3 className={styles.sectionHeadText}>Mes références</h3>

        <div className="flex flex-col gap-8 mt-5">
          <div className="w-[400px] flex gap-12 ">
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="w-[60px] h-[60px]"
            />
            <a
              href="https://www.linkedin.com/in/rachelaltmeyer"
              target="_blank"
              alt="linkedin link"
              className="text-xl text-black hover:text-blue-100"
            >
              Rachel Altmeyer, CEO de Gibraltaz et executive
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Ref, "ref")
