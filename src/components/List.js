import React from "react";
import Shirt from "./Shirt";
import Mug from "./Mug";
import Cap from "./Cap";

function List(props) {
  return (
    <ul className="products-list">
      <Shirt
        countShirt={props.countShirt}
        incrementShirt={props.incrementShirt}
        decrementShirt={props.decrementShirt}
        priceShirt={props.priceShirt}
        detailShirt={props.detailShirt}
      />

      <Mug
        countMug={props.countMug}
        incrementMug={props.incrementMug}
        decrementMug={props.decrementMug}
        priceMug={props.priceMug}
      />

      <Cap
        countCap={props.countCap}
        incrementCap={props.incrementCap}
        decrementCap={props.decrementCap}
        priceCap={props.priceCap}
      />
    </ul>
  );
}
export default List;
