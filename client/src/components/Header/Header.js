import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../../actions/getAction";
import { Link } from "react-router-dom";
// import "./Header.css"

function Header(props) {

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>Shop</h2>
        <ul>
          <li><Link to="/shop">shop</Link></li>
          <li className="cart"><Link to="/cart"><i className="fas fa-shopping-cart"></i>Cart <span>{ props.cartProps.cartNumbers }</span></Link></li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { getNumbers })(Header);
