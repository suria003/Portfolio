import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedCursor from "./Components/AnimatedCursor.js";
import Loading from "./Components/Load/Loading.jsx";

import Index from "./Components/Index.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import Project from "./Components/Pages/Project.jsx";
import About from "./Components/Pages/About.jsx";

import Nav from "./Components/Nav.jsx";

export default function App() {
  const ProtectionComponent = React.lazy(() => import('./Components/Toggle/Protection.jsx'));

  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="0, 0 ,0"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes >
    <Suspense fallback={<div className='h-auto w-auto bg-transparent'><Loading /></div>}>
      <ProtectionComponent />
    </Suspense>
      </BrowserRouter >
    </React.Fragment >
  );
}