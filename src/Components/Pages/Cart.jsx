import { useOutletContext } from "react-router-dom";
import Title from "../Title";

export default function CartPage() {
  const [cartItems, setCartItems] = useOutletContext();

  const estimatedTotal = cartItems
    .map((item) => item.qty * item.price)
    .reduce((partialSum, a) => partialSum + a, 0)
    .toFixed(2);

  function handleUpdateQty(id, qty) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const newCartItems = [...cartItems];
    newCartItems[itemIndex].qty = +qty;
    setCartItems(newCartItems);
  }

  function deleteCartItem(id) {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
  }

  return (
    <div>
      <Title>Cart</Title>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item">
              <td className="cart-item-details">
                <div className="item-image-container">
                  <img src={item.image} alt=""></img>
                </div>
                <div className="item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </td>
              <td>
                <div className="quantity-td">
                  <input
                    className="quantity-input"
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) => handleUpdateQty(item.id, e.target.value)}
                  />
                  <button
                    className="icon-button red"
                    onClick={() => deleteCartItem(item.id)}
                  >
                  </button>
                </div>
              </td>
              <td className="align-right">
                ${(item.qty * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="horizontal-divider"></div>
      <div className="cart-footer">
        <p>Estimated total: <b>${estimatedTotal}</b></p>
        <p className="p-small">Tax/additional surcharges excluded, check out button does nothing</p>
        <button className="primary-button">Check out</button>
      </div>
    </div>
  );
}