import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cart from "../Assets/cart.svg"

export default function Navbar( {cartItemsTotalQty} ) {
    return (
        <div id="navbar">
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="/">
                <div className="store-icon">
                    <img src={cart} alt="" />
                    <span>That One Shop</span>
                </div>
            </Link>
        </li>
          <li>
            <Link to="cart">Cart: {cartItemsTotalQty}</Link>
          </li>
        </ul>
      </div>
    )
}

Navbar.propTypes = {
    cartItemsTotalQty: PropTypes.number
};