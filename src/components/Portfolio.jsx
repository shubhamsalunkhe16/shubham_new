import React from "react";
import Header from "./Header";
import ProfessionalSummary from "./ProfessionalSummary";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Education from "./Education";
import Projects from "./Projects";
import CodeSnippet from "./CodeSnippet";
import Navbar from "./Navbar";

function Portfolio() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        <Header />
        {/* <ProfessionalSummary />
        <Experience />
        <Skills />
        <Achievements />
        <Education /> */}
        <Projects />
      </div>
    </div>
  );
}

export default Portfolio;
