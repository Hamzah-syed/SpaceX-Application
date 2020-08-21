import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./components/home";
//layout
import Header from "./components/layout/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
