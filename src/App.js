import Intro from './components/Introfirst/Intro';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About.js';
import Contact from './components/contact/Contact.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route exact path="/about" element={<About key="about"/>} >
        </Route>
        <Route exact path="/contact" element={<Contact key="contact"/>} >
        </Route>
        <Route exact path="/" element={<Intro key="intro"/>} >
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
