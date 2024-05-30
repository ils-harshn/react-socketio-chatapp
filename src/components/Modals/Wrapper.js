import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Wrapper.module.css";

const ModalWrapper = ({
  isOpen,
  className = "",
  children,
  onClose,
  ...props
}) => {
  if (!isOpen) return null;

  if (!onClose) {
    onClose = () => {};
  }

  return ReactDOM.createPortal(
    <div className={`${styles.modaloverlay} ${className || ""}`} {...props}>
      <OutsideClickHandler onOutsideClick={onClose}>
        {children}
      </OutsideClickHandler>
    </div>,
    document.body
  );
};

export default ModalWrapper;
