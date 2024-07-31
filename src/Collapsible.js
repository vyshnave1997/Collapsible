// src/components/Collapsible.js
import React, { useState } from "react";
import "./Collapsible.css";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={toggleCollapsible}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
};

export default Collapsible;
