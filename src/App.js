import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <div id="spacingContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </div>
        <footer></footer>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
