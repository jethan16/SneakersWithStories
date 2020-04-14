import React, { useState }  from "react";
import "./Products.css";
import { connect } from "react-redux";
import { addCart } from "../../actions/addAction";

// import any product image here...
// import ProductImg from "../../images/";

// we could import separate product comonents here and use those instead of hard coding...
// we could also use props and a json file to feed in product data...

const Products = (props) => {
  console.log(props);
  
    //this is for a test
    // const [cartNumbers, setCartNumbers] = useState(0)
    // const addToShoppingCart = () => {
    //     console.log("Button Clicked");
    //     setCartNumbers(cartNumbers + 1)
    // }

  return (
    <div className="container">
      <div className="image">
        <div className="shop-img1 img"></div>
        {/* <img src="https://via.placeholder.com/269x336" alt="product" /> */}
        <h3>Black SNKRS Logo Hoodie</h3>
        <h3>$50.00</h3>
        <a onClick={() => props.addCart("Hoodie")} className="addToCart cart1" href="#">
          Add to cart <i id="icon-cart" className="fas fa-shopping-cart"></i>
        </a>
      </div>

      <div className="image">
      <div className="shop-img2 img"></div>
        {/* <img src="https://via.placeholder.com/269x336" alt="product" /> */}
        <h3>Black SNKRS Logo Long-T</h3>
        <h3>$30.00</h3>
        <a onClick={() => props.addCart("LongT")} className="addToCart cart2" href="#">
          Add to cart <i id="icon-cart" className="fas fa-shopping-cart"></i>
        </a>
      </div>

      <div className="image">
      <div className="shop-img3 img"></div>
        {/* <img src="https://via.placeholder.com/269x336" alt="product" /> */}
        <h3>Black SNKRS Logo Short-T</h3>
        <h3>$20.00</h3>
        <a onClick={() => props.addCart("ShortT")} className="addToCart cart3" href="#">
          Add to cart <i id="icon-cart" className="fas fa-shopping-cart"></i>
        </a>
      </div>

      <div className="image">
      <div className="shop-img4 img"></div>
        {/* <img src="https://via.placeholder.com/269x336" alt="product" /> */}
        <h3>Green SNKRS Logo Stickers</h3>
        <h3>$10.00</h3>
        <a onClick={() => props.addCart("Stickers")} className="addToCart cart4" href="#">
          Add to cart <i id="icon-cart" className="fas fa-shopping-cart"></i>
        </a>
      </div>

      {/* this is for the test */}
      {/* <h1>Current numbers in cart: {cartNumbers}</h1> */}
      
    </div>
  );
};

export default connect(null, { addCart })(Products);
