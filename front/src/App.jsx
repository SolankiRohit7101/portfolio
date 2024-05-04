import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./components/Home.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const Project = lazy(() => import("./components/Project.jsx"));

function App() {
  return (
    <Suspense fallback={"Loading "}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
