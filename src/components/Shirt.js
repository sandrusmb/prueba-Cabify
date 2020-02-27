import React from "react";
import shirt from "../img/shirt.png";

function Shirt(props) {
  return (
    <li className="product row">
      <div className="col-product">
        {/* click */}
        <figure
          id="figure"
          className="product-image"
          onClick={props.detailShirt}
        >
          <img src={shirt} alt="Shirt" />
          <div className="product-description">
            <h1>Shirt</h1>
            <p className="product-code">Product code X7R2OPX</p>
          </div>
        </figure>
        {/* click */}
      </div>
      <div className="col-quantity">
        <button className="count" onClick={props.decrementShirt}>
          -
        </button>
        <input
          type="text"
          className="product-quantity"
          value={props.countShirt}
        />
        <button className="count" onClick={props.incrementShirt}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">{props.priceShirt}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">
          {props.countShirt * props.priceShirt}
        </span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default Shirt;
