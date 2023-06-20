import { styles } from "../styles"

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#4C3BB2]" />
          <div className="w-1 sm:h-80 h40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Bonjour, moi c'est Léa
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            UX et UI Designer, <br className="hidden sm:block" />
            je conçois l’expérience utilisateur d’interfaces web.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
