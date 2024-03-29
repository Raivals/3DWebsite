// show projects
import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"

import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          sclae: 1,
          speed: 450,
        }}
        className="bg-purple-100 p-5 rounded-2xl sm:w-[360px] w-full h-[460px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>
        {/* name & description */}
        <div className="mt-5">
          <h3 className="text-black font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-black text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mon travail</p>
        <h2 className={styles.sectionHeadText}>Projets.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
        >
          Les réalisations ci-dessous reflètent la diversité des projets sur
          lesquels j’ai participé. Toutes les méthodes et compétences que j’ai
          mises en oeuvre dans ces projets sont détaillées, et quand cela est
          possible, un lien vers le service fini vous permet de l’explorer plus
          en détails. Les enjeux des projets tout comme les technologies et
          méthodes employées varient, pour plus d’informations sur les choix
          faits, contactez-moi !
        </motion.p>
      </div>

      <div className="flex flex-wrap mt-20 align-center gap-9">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
