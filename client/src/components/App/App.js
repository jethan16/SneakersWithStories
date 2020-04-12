import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../../lib/API.js";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import Wrapper from "../Wrapper";
import Navbar from "../navbar";
import Home from "../../pages/Home";
import Stories from "../../pages/Stories";
import Shop from "../../pages/Shop";
import Vision from "../../pages/Vision";
import Team from "../../pages/Team";
import snkrsBanner from "../../images/logos/SwS_Logo_Full.png";
import "./App.css";
function App() {
  let [barState, setBarState] = useState(false);
  let [menuBarState, setMenuBarState] = useState(false);
  let [popState, setPopState] = useState(false);

  const changePopState = () => {
    setPopState(!popState);
  };
  const changeBarState = () => {
    setBarState(!barState)
  }
  function menuOpen() {
    setMenuBarState(!menuBarState)
    setBarState(!barState);
    const barOne = document.getElementById("1");
    const barTwo = document.getElementById("2");
    const barThree = document.getElementById("3");
    if (barState === false) {
      barOne.classList.add("bar-one");
      barTwo.classList.add("bar-two");
      barThree.classList.add("bar-three");
    } else {
      barOne.classList.remove("bar-one");
      barTwo.classList.remove("bar-two");
      barThree.classList.remove("bar-three");
    }
  }

  // function menuClose() {
  //   setMenuBarState(!menuBarState)
  // }

  let [authState, setAuthState] = useState({
    user: undefined,
    authToken: TokenStore.getToken(),
    onLogin: (user, authToken) => {
      TokenStore.setToken(authToken);
      setAuthState((prevAuthState) => ({ ...prevAuthState, user, authToken }));
    },
    onLogout: () => {
      TokenStore.clearToken();
      setAuthState((prevAuthState) => ({
        ...prevAuthState,
        user: undefined,
        authToken: undefined,
      }));
    },
  });
  useEffect(() => {
    const { authToken } = authState;
    if (!authToken) return;
    API.Users.getMe(authToken)
      .then((response) => response.data)
      .then((user) =>
        setAuthState((prevAuthState) => ({ ...prevAuthState, user }))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <AuthContext.Provider value={authState}>
        <div className="banner">
          <Link className="banner-link" to="/">
            <img src={snkrsBanner} />
          </Link>
          <div className='burger' onClick={menuOpen}>
            <div className="burger-bar" id="1"></div>
            <div className="burger-bar" id="2"></div>
            <div className="burger-bar" id="3"></div>
          </div>
        </div>
        <Navbar
          currentBarState={barState}
          currentPopState={popState}
          changePopState={changePopState}
          changeBarState={changeBarState}
          menuOpen={menuOpen}
        />
        <Wrapper
          className={
            popState === true || barState === true ? "bg-dim" : "bg-show"
          }
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/vision" component={Vision} />
        </Wrapper>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
