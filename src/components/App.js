import React from "react";
import "../stylesheets/App.css";

import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countShirt: 0,
      countMug: 0,
      countCap: 0
    };
  }

  incrementShirt = () => {
    this.setState({
      countShirt: this.state.countShirt + 1
    });
  };

  decrementShirt = () => {
    this.setState({
      countShirt: this.state.countShirt - 1
    });
  };

  incrementMug = () => {
    this.setState({
      countMug: this.state.countMug + 1
    });
  };

  decrementMug = () => {
    this.setState({
      countmug: this.state.countMug - 1
    });
  };

  incrementCap = () => {
    this.setState({
      countCap: this.state.countCap + 1
    });
  };

  decrementCap = () => {
    this.setState({
      countCap: this.state.countCap - 1
    });
  };

  render() {
    return (
      <main className="App">
        <section className="products">
          <h1 className="main">Shopping cart</h1>
          <ul className="products-list tableHead">
            <li className="products-list-title row">
              <div className="col-product">Product details</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-price">Price</div>
              <div className="col-total">Total</div>
            </li>
          </ul>
          {/* list */}
          <List
            countShirt={this.state.countShirt}
            incrementShirt={this.incrementShirt}
            decrementShirt={this.decrementShirt}
            countMug={this.state.countMug}
            incrementMug={this.incrementMug}
            decrementMug={this.decrementMug}
            countCap={this.state.countCap}
            incrementCap={this.incrementCap}
            decrementCap={this.decrementCap}
          />
          {/* list */}
        </section>
        <aside className="summary">
          <h1 className="main">Order Summary</h1>
          <ul className="summary-items wrapper border">
            <li>
              <span className="summary-items-number">11 Items</span>
              <span className="summary-items-price">
                120<span className="currency">€</span>
              </span>
            </li>
          </ul>
          <div className="summary-discounts wrapper-half border">
            <h2>Discounts</h2>
            <ul>
              <li>
                <span>2x1 Mug offer</span>
                <span>-10€</span>
              </li>
              <li>
                <span>x3 Shirt offer</span>
                <span>-3€</span>
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
                <span className="summary-total-price">107€</span>
              </li>
            </ul>
            <button type="submit">Checkout</button>
          </div>
        </aside>
      </main>
    );
  }
}

export default App;
