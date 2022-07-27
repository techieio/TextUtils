import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

export default function App() {
  const [mode, SetMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      SetMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      SetMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm
        heading="TextUtils - Edit your text"
        mode={mode}
        toggleMode={toggleMode}
        title="Your Text Summary"
      />
    </>
  );
}
