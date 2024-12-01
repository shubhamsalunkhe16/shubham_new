import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const codeExample = `import "./App.css";

const App = () => {
  const data = {
    fullName: "Shubham Bhagwan Salunkhe",
    title: "Full Stack Developer",
    experienceYears: 3.25,
    isEngineer: true,
    salary: undefined,
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Git"]
    experience: [
      "Senior Frontend Developer at GoPhygital Private Limited",
      "AI-Based Content Creation Platform for top-tier clients",
      "Developed Music Streaming Platform with Spotify integration"
    ],
  };

  return (
    <div className="App">
      <MyProfile {...data} />
    </div>
  );
};

export default App;`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="rounded-md overflow-x-auto"
    >
      {codeExample}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
