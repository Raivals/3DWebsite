import { BrowserRouter } from "react-router-dom"
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components"

/* Structrure of the app */

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-top bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <div className="relative z-0 flex px-6 ">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
