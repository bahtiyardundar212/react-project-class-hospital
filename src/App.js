import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Hastalar from "./pages/hastalar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hastalar" element={<Hastalar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
