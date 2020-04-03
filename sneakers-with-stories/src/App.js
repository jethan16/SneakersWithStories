import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Shop from "./pages/Shop";
import Vision from "./pages/Vision";
import Shoes from "./pages/Shoes";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/shoes" component={Shoes} />
        <Route exact path="/team" component={Team} />
      </Wrapper>
    </Router>
  );
}

export default App;
