import { Route,Routes } from "react-router-dom";
import Certifications from "./Pages/Certifications";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
