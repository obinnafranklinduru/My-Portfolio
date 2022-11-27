import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Meta from "../components/Meta";
import Navbar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div>
      <Meta />
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
