import React from "react";
import "./modal.css";

const Modal = ({ handleClose, show, children, ...props }) => {
  const showHide = show ? "modal display-block" : "modal display-none";
  return (
    <React.Fragment>
      <div className={showHide}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Search Again</button>
        </section>
        <div className="sprite">
          <h1>{props.name}</h1>
          <img src={props.img} alt="" />
        </div>
        <div className="white-bar one">
          <h4>{props.xp}</h4>
        </div>
        <div className="white-bar two">
          {" "}
          <h4>{props.type}</h4>
        </div>
        <div className="white-bar three">
          {" "}
          <h4 className="move">{props.move}</h4>
        </div>

        <div className="white-bar four">
          {" "}
          <h4>{props.height}</h4>
        </div>

        <div className="white-bar five">
          {" "}
          <h4>{props.weight}</h4>
        </div>

        <div className="blue-bar one">
          <h2>XP</h2>
        </div>
        <div className="blue-bar two">
          <h2>Type</h2>
        </div>
        <div className="blue-bar three">
          <h2>Ability</h2>
        </div>
        <div className="blue-bar four">
          <h3>Height</h3>
        </div>

        <div className="blue-bar five">
          <h3>Weight</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
