import React, {useState, useEffect} from 'react'
import "./Cart.css"
import NavBar from './Navbar'


function Cart({cart, setCart, handleChange}) {

const [price, setPrice] = useState(0);


const handleRemove = (id) => {
    const arr = cart.filter((sneaker) => sneaker.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((sneaker) => (ans += sneaker.amount * sneaker.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });



  return (
    <div>
      <NavBar/>
      <article>
      {cart.map((sneaker) => (
        <div className="cart_box" key={sneaker.id}>
          <div className="cart_img">
            <img src={sneaker.image} alt={sneaker.name} style={{width: "175px", height: "200px", border: "6px inset #ff6550"}}/>
            <p style={{fontWeight: "bold", fontSize: "2rem"}}>{sneaker.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(sneaker, 1)}>+</button>
            <button>{sneaker.amount}</button>
            <button onClick={() => handleChange(sneaker, -1)}>-</button>
          </div>
          <div>
            <span>${sneaker.price}</span>
            <button onClick={() => handleRemove(sneaker.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price</span>
        <span>${price}</span>
      </div>
    </article>
      {/* <header>
      <Link to="/sneakers"><li>Home</li></Link>
      <Link to="/favorites"><li>Favorites</li></Link>
      </header> */}
      {/* <>
      <div className="order-area">
        <div className="order-total">Your Order</div>
      </div>
      <div className="order-card">
        <div className="order-item">Jordans</div>
        <div className="order-qty">
          Qty<button className="qty-btn">-</button>
          <input type="text" className="qty-input"/>
          <button className="qty-btn">+</button>
        </div>
        <div className="order-price">$100.00</div>
        <button className="delete-btn">Remove</button>
      </div>
      <div className="order-total">
        <div className="total">Total</div>
        <div className="total-price">$200.00</div>
        <div className="place-order-btn">Place Order</div>
      </div>
      </> */}
      {/* <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
      </div>
      {cartItems.map((item) =(
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => onAdd(item)}>
              +
            </button>
            <button onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default Cart