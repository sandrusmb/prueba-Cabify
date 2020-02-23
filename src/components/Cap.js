import React from "react";
import cap from "../img/cap.png";

function Cap(props) {
  return (
    <li className="product row">
      <div className="col-product">
        <figure className="product-image">
          <img src={cap} alt="Cap" />
          <div className="product-description">
            <h1>Cap</h1>
            <p className="product-code">Product code X3W2OPY</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count" onClick={props.decrementCap}>
          -
        </button>
        <input
          type="text"
          className="product-quantity"
          value={props.countCap}
        />
        <button className="count" onClick={props.incrementCap}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">10</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">40</span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default Cap;
