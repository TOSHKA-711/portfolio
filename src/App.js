import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./component/navs/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
