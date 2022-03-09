import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Error from "./components/Error";
import Product from "./components/Product";


export default function App() {

  return (
    <>
      <Router>     
          <Navbar title="LetsBuy" />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        
      </Router>
    </>
  );
}
