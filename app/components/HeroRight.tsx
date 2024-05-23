import Editor, { useMonaco } from "@monaco-editor/react";
import React, { useState, useEffect } from "react";

const HeroRight = () => {
  const [code, setCode] = useState(`import React from 'react';

const SkillPage = () => {
  return (
    <div>
      <header>
        <h1>Welcome!</h1>
      </header>
      
      <h1>Software Engineer</h1>
      <ul>
        <li>FrontEnd</li>
        <li>BackEnd</li>
        <li>Database</li>
        <li>UI/UX</li>
        <li>Graphic Design</li>
      </ul>
      
      <footer>
        <p>&copy; 2024 Zuhayer 🌊. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SkillPage;
`);

  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("tokyo-night", {
        base: "vs-dark",
        inherit: true,
        rules: [],
        colors: {
          "editor.foreground": "#C0CAF5",
          "editor.background": "#0E172C",
          "editor.selectionBackground": "#33467C",
          "editor.lineHighlightBackground": "#292E42",
          "editorCursor.foreground": "#C0CAF5",
          "editorWhitespace.foreground": "#3B4261",
        },
      });
      monaco.editor.setTheme("tokyo-night");
    }
  }, [monaco]);

  return (
    <div
      className="h-screen md:h-3/4 w-full"
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        border: "0.1px solid rgba(245, 245, 245, 0.24)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "5px",
          background: "#020C1F",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#EF596F",
            marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#6BDDF8",
            marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#F2D31B",
          }}
        ></div>
      </div>
      <Editor
        defaultLanguage="javascript"
        defaultValue={code}
        theme="tokyo-night"
        onChange={(value, event) => {
          setCode(value!);
        }}
        options={{
          scrollBeyondLastLine: false,
          padding: { top: 10 }, // Add margin to the top of the first line
          fontSize: 16,
        }}
      />
    </div>
  );
};

export default HeroRight;
