import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./components/home";
import Page404 from "./components/404.tsx";
import Launches from "./components/launches";
//layout
import Header from "./components/layout/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
