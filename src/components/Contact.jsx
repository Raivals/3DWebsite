import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-purple-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Des questions ? </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Votre Nom</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Comment vous appelez vous ?"
              className="px-6 py-4 font-medium text-white bg-blue-100 border-none rounded-lg placeholder:text-white outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Votre Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre email ?"
              className="px-6 py-4 font-medium text-white bg-blue-100 border-none rounded-lg placeholder:text-white outlined-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-black">Votre message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Que voulez vous me dire ? "
              className="px-6 py-4 font-medium text-white bg-blue-100 border-none rounded-lg placeholder:text-white outlined-none"
            />
          </label>

          <button
            type="submit"
            className="px-8 py-3 font-bold text-white bg-blue-100 shadow-md outline-none w-fit shadow-primary rounded-xl"
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
