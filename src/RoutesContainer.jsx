import React from "react";
import "./App.css";
import { Home } from "./Pages";
import { Routes, Route } from "react-router-dom";
const RoutesContainer = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RoutesContainer;
