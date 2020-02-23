import React from "react";

function Sumary(props) {
  const totalItemsPrice =
    props.countShirt * props.priceShirt +
    props.countMug * props.priceMug +
    props.countCap * props.priceCap;

  return (
    <ul className="summary-items wrapper border">
      <li>
        <span className="summary-items-number">
          {props.countShirt + props.countMug + props.countCap} Items
        </span>
        <span className="summary-items-price">
          {totalItemsPrice}
          <span className="currency">€</span>
        </span>
      </li>
    </ul>
  );
}

export default Sumary;
