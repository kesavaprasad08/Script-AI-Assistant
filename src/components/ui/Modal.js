import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed h-screen w-full bg-black z-20 opacity-20"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverLay = (props) => {
  return (
    <div className="fixed w-5/12 bg-blue-100 p-6 rounded z-30 top-1/4 left-1/4 shadow-lg">
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
