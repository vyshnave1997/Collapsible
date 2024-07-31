// src/App.js
import React from "react";
import Collapsible from "./Collapsible";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Collapsible Demo</h1>
      <Collapsible title="Panel 1">
        <p>This is the content for panel 1.</p>
      </Collapsible>
      <Collapsible title="Panel 2">
        <p>This is the content for panel 2.</p>
      </Collapsible>
      <Collapsible title="Panel 3">
        <p>This is the content for panel 3.</p>
      </Collapsible>
    </div>
  );
};

export default App;
