import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Wrapper from "../Wrapper";
import Navbar from "../navbar";
import Home from "../../pages/Home";
import Stories from "../../pages/Stories";
import Shop from "../../pages/Shop";
import Vision from "../../pages/Vision";
import Team from "../../pages/Team";
<<<<<<< HEAD
=======
import Form from "../../components/storiesForm";
import Contact from "../../components/contactForm";

>>>>>>> 7440d99d1d08632f13f3dbd2bde24d2097d79962
import snkrsBanner from "../../images/logos/SwS_Logo_Full.png";
import "./App.css";
function App() {
  let [barState, setBarState] = useState(false);
  let [popState, setPopState] = useState(false);
  const changePopState = () => {
    setPopState(!popState);
  };
  function menuOpen() {
    setBarState(!barState);
    // const root = document.getElementById('root')
    const barOne = document.getElementById("1");
    const barTwo = document.getElementById("2");
    const barThree = document.getElementById("3");
    if (barState === false) {
      barOne.classList.add("bar-one");
      barTwo.classList.add("bar-two");
      barThree.classList.add("bar-three");
      // root.style.overflow = 'hidden';
    } else {
      barOne.classList.remove("bar-one");
      barTwo.classList.remove("bar-two");
      barThree.classList.remove("bar-three");
    }
  }
  function status() {
    if (popState === false || barState === false) {
      return "bg-show";
    } else if (popState === true || barState === true) {
      return "bg-dim";
    }
  }
  let [authState, setAuthState] = useState({
    user: undefined,
    authToken: TokenStore.getToken(),
    onLogin: (user, authToken) => {
      TokenStore.setToken(authToken);
      setAuthState(prevAuthState => ({ ...prevAuthState, user, authToken }));
    },
    onLogout: () => {
      TokenStore.clearToken();
      setAuthState(prevAuthState => ({ ...prevAuthState, user: undefined, authToken: undefined }));
    }
  });
  useEffect(() => {
    const { authToken } = authState;
    if (!authToken) return;
    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => setAuthState(prevAuthState => ({ ...prevAuthState, user })))
      .catch(err => console.log(err));
  }, []);
  return (
    <Router>
      <AuthContext.Provider value={authState}>
        <div className="App">
          <div className="banner">
            <img src={snkrsBanner} />
            <div className="burger" onClick={menuOpen}>
              <div className="burger-bar" id="1"></div>
              <div className="burger-bar" id="2"></div>
              <div className="burger-bar" id="3"></div>
            </div>
          </div>
          <Navbar
            currentBarState={barState}
            currentPopState={popState}
            changePopState={changePopState}
          />
          <Wrapper className={popState === true || barState === true ? 'bg-dim' : 'bg-show'}>
            <Route exact path="/" component={Home} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/team" component={Team} />
          </Wrapper>
        </div>
<<<<<<< HEAD
      </AuthContext.Provider>
=======
      </div>
      <Navbar
        currentBarState={barState}
        currentPopState={popState}
        changePopState={changePopState}
      />
      <Wrapper className={popState === true || barState === true ? 'bg-dim' : 'bg-show'}>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/userstory" component={Contact} />
        <Route exact path="/contact" component={Form} />
      </Wrapper>
>>>>>>> 7440d99d1d08632f13f3dbd2bde24d2097d79962
    </Router>
  );
}
export default App;
