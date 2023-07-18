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
import Ref from "./components/Ref"

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
        <div className="relative z-0 flex px-6 flex-col">
          <Ref />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
