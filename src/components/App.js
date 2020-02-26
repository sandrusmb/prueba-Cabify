import React from "react";
import "../stylesheets/App.css";
import List from "./List";
import Sumary from "./Sumary";
import Discounts from "./Discounts";
import Header from "./Header";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countShirt: 0,
      countMug: 0,
      countCap: 0,
      priceShirt: 20,
      priceMug: 5,
      priceCap: 10,
      discountShirt: 0
    };
  }

  incrementShirt = () => {
    this.setState({
      countShirt: this.state.countShirt + 1
    });
  };

  decrementShirt = () => {
    this.setState({
      countShirt: this.state.countShirt > 0 ? this.state.countShirt - 1 : 0
    });
  };

  incrementMug = () => {
    this.setState({
      countMug: this.state.countMug + 1
    });
  };

  decrementMug = () => {
    this.setState({
      countMug: this.state.countMug > 0 ? this.state.countMug - 1 : 0
    });
  };

  incrementCap = () => {
    this.setState({
      countCap: this.state.countCap + 1
    });
  };

  decrementCap = () => {
    this.setState({
      countCap: this.state.countCap > 0 ? this.state.countCap - 1 : 0
    });
  };

  render() {
    return (
      <main className="App">
        <section className="products">
          <h1 className="main">Shopping cart</h1>
          <Header />
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
            priceShirt={this.state.priceShirt}
            priceMug={this.state.priceMug}
            priceCap={this.state.priceCap}
          />
        </section>

        <aside className="summary">
          <h1 className="main">Order Summary</h1>

          <Sumary
            countShirt={this.state.countShirt}
            countMug={this.state.countMug}
            countCap={this.state.countCap}
            priceShirt={this.state.priceShirt}
            priceMug={this.state.priceMug}
            priceCap={this.state.priceCap}
          />

          <Discounts
            countShirt={this.state.countShirt}
            priceShirt={this.state.priceShirt}
            countMug={this.state.countMug}
            priceMug={this.state.priceMug}
            countCap={this.state.countCap}
            priceCap={this.state.priceCap}
          />
        </aside>
        <Modal />
      </main>
    );
  }
}

export default App;
