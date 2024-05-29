import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Wrapper.module.css";
import { useEffect } from "react";

const ModalWrapper = ({
  isOpen,
  className = "",
  children,
  onClose,
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [isOpen]);

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
