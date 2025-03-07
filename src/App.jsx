import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Mainpro from "./components/Mainpro"
import Skills from "./components/Skills";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About />
      <Skills/>
      <Mainpro />
      <Portfolio/>
      {/* <Experience/> */}
      <Contact/>
      <Toaster />
      <Footer/>
    </>
  )
}