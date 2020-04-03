import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Stories from "./pages/HearStories";
import Shop from "./pages/Shop";
import Shoes from "./pages/SeeShoes"

function App() {
  return (
    <Router>
      <Navbar/>
      <Wrapper>
        <Route exat path='/' component={Home}/>
        <Route exact path='/stories' component={Stories} />
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/shoes' component={Shoes}/>
      </Wrapper>
    </Router>
  );
}

export default App;
