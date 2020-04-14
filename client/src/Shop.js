import React from "react";
import "./Shop.css";
import ShopHome from "./components/ShopHome/ShopHome";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Shop() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/shop" component={ShopHome} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default Shop;

// How It Flows!!!!!!! Important!!!!!!!
// In Products.js, when ever I clicked any of the buttons on any "product", I am calling the "addCart" action (in addAction.js).
// In this file, we have a function that thst returns "dispatch", this dispatches an action to the reducers.
// In that "addAction" file, we are dispatching a type of add product to cart (type: ADD_PRODUCT_CART).
// (take a look at "types.js", we made it equal to the string so we dont have to use a string here, for no errors and best practice).
// Remember, this is dispatched to our reducers! this is in "cartReducers.js". in here we have a switch to see what kind of action we are reciving.
// WE want that action to be a case of ADD_PRODUCT_CART, this will return or cartNumbers and add + 1 to the initialState(was 0). This returns a new state called cartNumbers (0 + 1).
// Where is theis going to from our cartReducers? This is going into our "index.js" of our reducers file.
// We are going to combine there reducers. we are giong to create this state called cartState and the value is whatever comes from out cartReducers. so (0 + 1) = 1!
//This is how we are updating our state! we will bring this state to our nav bar to update the cart items number.
