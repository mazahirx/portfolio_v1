import Header from "./components/Header"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import "./index.css"

export default function App() {
  return (
    <div className="bg-black bg-[url('/bg_2.png')] bg-auto bg-center h-screen  text-white font-pixel flex flex-col items-center">
      <div className="flex flex-col items-center gap-5">
        <Header />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  )
}
