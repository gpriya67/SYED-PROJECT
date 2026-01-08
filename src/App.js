import "./App.css";
import Header from "./component/Header";
import { Element } from "react-scroll";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Footer from "./pages/Footer";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import Testimonials from "./pages/Testimonials.jsx";
import FloatingImage from "./component/FloatingImage.jsx";
import BackgroundImage from "./component/BackgroundImage.jsx";
import CursorPointer from "./component/CursorPointer.jsx";

function App() {
  return (
    <div className="relative">
      <CursorPointer trailDelay={0.08} />
      <Header />
      <Element name="/">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element>
        <FloatingImage />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element>
        <BackgroundImage />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Element name="project">
        <Project />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>

      <Toaster position="top-right" />
    </div>
  );
}

export default App;
