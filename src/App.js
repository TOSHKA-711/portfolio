import "./App.css";
import Navigation from "./component/navs/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
// import Footer from "./component/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
