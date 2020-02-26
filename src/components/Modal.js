import React from "react";
import "../stylesheets/modal.scss";
import modalImg from "../img/tshirt.jpg";

function Modal(props) {
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <img className="modal-img" src={modalImg} alt=""></img>
        <aside className="modal-aside">
          <div className="modal-close">x</div>
          <div className="modal-info">
            <h1>Shirt</h1>
            <h1>20€</h1>
          </div>
          <p className="modal-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales
            semper elit sit amet interdum. Praesent volutpat sed elit vel
            consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum
            imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis
            bibendum id.
          </p>
          <p className="product-code">Product code X7R2OPX</p>
        </aside>
      </div>
    </div>
  );
}

export default Modal;
