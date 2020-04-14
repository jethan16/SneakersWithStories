import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import { addCart } from "../../actions/addAction";



// import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Cart({ cartProps }) {
  console.log(cartProps);

  let productsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {
    console.log(item);
    console.log(cartProps.products[item].inCart);
    if (cartProps.products[item].inCart) {
      productsInCart.push(cartProps.products[item]);
    }
    console.log(productsInCart);
  });

  async function handleToken(token, addresses) {
    // console.log({ token, addresses });
    const responce = await axios.post(
      "https://ih9mt.sse.codesandbox.io/checkout",
      {
        token,
        cartProps,
      }
    );
    const { status } = responce.data;
    if (status === "success") {
      toast("Success! Check email for details!", {
        type: "success",
      });
    } else {
      toast("Something went wrong!", { type: "error" });
    }
  }

  // use for imported images
  //   const productImages = [productname, productname2]
  //   {productImages[index]}

  productsInCart = productsInCart.map((product, index) => {
    console.log("My Product Is:");
    console.log(product);

    return (
      <Fragment>
        <div className="product">
          <i
            onClick={() => cartProps.addCart({ product })}
            className="x far fa-times-circle"
          ></i>
          <img src={product.image} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          {/* <i
            onClick={() => cartProps.addCart()}
            className="decrease fas fa-chevron-down"
          ></i> */}
          <span>Qty: {product.numbers}</span>
          {/* <i
            onClick={() => cartProps.addCart()}
            className="increase fas fa-chevron-up"
          ></i> */}
        </div>
        <div className="total">${product.numbers * product.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="cartTotalContainer">
        <h4 className="cartTotalTitle">Cart Total</h4>
        <h4 className="cartTotal">${cartProps.cartCost}.00</h4>
        <StripeCheckout
          stripeKey="pk_test_1o43eHoWGpRl3SwERMULLCbn00ZJDAwYlP"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={cartProps.cartCost * 100}
        >
          <a id="btn-checkout" className="button is-info">
            checkout
          </a>
        </StripeCheckout>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps)(Cart);
