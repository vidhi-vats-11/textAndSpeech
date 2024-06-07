import React from "react";
// import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact'
import PagenotFound from './pages/PagenotFound'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/*" element={<PagenotFound/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
