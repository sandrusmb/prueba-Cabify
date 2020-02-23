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
      />
      {/* camiseta */}
      {/* taza */}
      <Mug
        countMug={props.countMug}
        incrementMug={props.incrementMug}
        decrementMug={props.decrementMug}
      />
      {/* taza */}
      {/* gorra */}
      <Cap
        countCap={props.countCap}
        incrementCap={props.incrementCap}
        decrementCap={props.decrementCap}
      />
      {/* gorra */}
    </ul>
  );
}
export default List;
