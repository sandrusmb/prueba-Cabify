import React from "react";
import mug from "../img/mug.png";

function Mug(props) {
  return (
    <li className="product row">
      <div className="col-product">
        <figure className="product-image">
          <img src={mug} alt="Mug" />
          <div className="product-description">
            <h1>Mug</h1>
            <p className="product-code">Product code X2G2OPZ</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count" onClick={props.decrementMug}>
          -
        </button>
        <input
          type="text"
          className="product-quantity"
          value={props.countMug}
        />
        <button className="count" onClick={props.incrementMug}>
          +
        </button>
      </div>
      <div className="col-price">
        <span className="product-price">{props.priceMug}</span>
        <span className="product-currency currency">€</span>
      </div>
      <div className="col-total">
        <span className="product-price">{props.countMug * props.priceMug}</span>
        <span className="product-currency currency">€</span>
      </div>
    </li>
  );
}

export default Mug;
