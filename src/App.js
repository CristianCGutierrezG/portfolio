import Cursor from "./components/cursor";
import Navbar from "./components/navbar";
import Intro from "./pages/intro";
import About from "./pages/about";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
      <Intro id="intro" />
      <About id="about" />
      <Skills id="skills" />
      <Contact id="contact" />
    </>
  );
}

export default App;
