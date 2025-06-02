import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Signup from "./components/signup/Signup";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/signup/SignIn";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={ <Todo /> } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>

      {/* <Home /> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
};

export default App;
