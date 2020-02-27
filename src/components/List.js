import React from "react";
import Shirt from "./Shirt";
import Mug from "./Mug";
import Cap from "./Cap";

function List(props) {
  return (
    <ul className="products-list">
      {/* camiseta */}
      <Shirt
        countShirt={props.countShirt}
        incrementShirt={props.incrementShirt}
        decrementShirt={props.decrementShirt}
        priceShirt={props.priceShirt}
        detailShirt={props.detailShirt}
      />
      {/* camiseta */}
      {/* taza */}
      <Mug
        countMug={props.countMug}
        incrementMug={props.incrementMug}
        decrementMug={props.decrementMug}
        priceMug={props.priceMug}
      />
      {/* taza */}
      {/* gorra */}
      <Cap
        countCap={props.countCap}
        incrementCap={props.incrementCap}
        decrementCap={props.decrementCap}
        priceCap={props.priceCap}
      />
      {/* gorra */}
    </ul>
  );
}
export default List;
