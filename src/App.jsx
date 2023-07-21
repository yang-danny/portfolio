import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "@syneto/compass-react/lib/styles.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {
 return (
     <div >
        <BrowserRouter>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/edu" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>  
          </BrowserRouter>
     </div>
  )
}

export default App
