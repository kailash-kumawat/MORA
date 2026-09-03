import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
