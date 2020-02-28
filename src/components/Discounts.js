import React from "react";

function Discounts(props) {
  const mugDiscount =
    props.countMug % 2 === 0
      ? (props.countMug / 2) * props.priceMug * -1
      : ((props.countMug - 1) * props.priceMug * -1) / 2;

  const shirtDiscount = props.countShirt >= 3 ? props.countShirt * -1 : 0;

  const totalItemsPrice =
    props.countShirt * props.priceShirt +
    props.countMug * props.priceMug +
    props.countCap * props.priceCap;

  const totalPriceWithDiscounts = totalItemsPrice + mugDiscount + shirtDiscount;

  console.log(mugDiscount, shirtDiscount);
  return (
    <React.Fragment>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          <li>
            <span>2x1 Mug offer</span>
            <span>{mugDiscount}€</span>
          </li>
          <li>
            <span>x3 Shirt offer</span>
            <span>{shirtDiscount}</span>
          </li>
          <li>
            <span>Promo code</span>
            <span>0€</span>
          </li>
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">
              {totalPriceWithDiscounts}€
            </span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </React.Fragment>
  );
}

export default Discounts;
