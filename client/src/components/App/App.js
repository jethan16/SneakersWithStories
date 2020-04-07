import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Wrapper from "../Wrapper";
import Navbar from "../navbar";
import Home from "../../pages/Home";
import Stories from "../../pages/Stories";
import Shop from "../../pages/Shop";
import Vision from "../../pages/Vision";
import Team from "../../pages/Team";

import snkrsBanner from "../../images/logos/SwS_Logo_Full.png";

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

  return (
    <Router>
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
      <Wrapper className={popState === false || barState === false ? 'bg-show' : 'bg-dim'}>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/vision" component={Vision} />
        <Route exact path="/team" component={Team} />
      </Wrapper>
    </Router>
  );
}

export default App;

// ======================JEFF===============================================

// import React, {  } from 'react';
// import { Switch, Route } from 'react-router-dom';

// import API from '../../lib/API';
// import TokenStore from '../../lib/TokenStore';
// import AuthContext from '../../contexts/AuthContext';
// import Navigation from '../../components/Navigation/Navigation';
// import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
// import Home from '../../pages/Home/Home';
// import Login from '../../pages/Login/Login';
// import Register from '../../pages/Register/Register';
// import Secret from '../../pages/Secret/Secret';
// import NotFound from '../../pages/NotFound/NotFound';

// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleLogin = (user, authToken) => {
//       TokenStore.setToken(authToken);
//       this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
//     };

//     this.handleLogout = () => {
//       TokenStore.clearToken();
//       this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
//     }

//     this.state = {
//       auth: {
//         user: undefined,
//         authToken: TokenStore.getToken(),
//         onLogin: this.handleLogin,
//         onLogout: this.handleLogout
//       }
//     }
//   }

//   componentDidMount() {
//     const { authToken } = this.state.auth;
//     if (!authToken) return;

//     API.Users.getMe(authToken)
//       .then(response => response.data)
//       .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <AuthContext.Provider value={this.state.auth}>
//         <div className='App'>
//           <Navigation />
//           <div className='container'>
//             <Switch>
//               <Route exact path='/' component={Home} />
//               <Route path='/login' component={Login} />
//               <Route path='/register' component={Register} />
//               <PrivateRoute path='/secret' component={Secret} />
//               <Route component={NotFound} />
//             </Switch>
//           </div>
//         </div>
//       </AuthContext.Provider>
//     );
//   }
// }

// export default App;


