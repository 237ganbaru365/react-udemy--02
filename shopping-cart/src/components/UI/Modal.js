import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

//React Portalを背景のオーバーレイのために使う
//React Portalとはコンポーネントから直接html DOMを操作すること
//そのためにindex.htmlを直接いじることが必要

//sub compornents
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

//main compornent
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
