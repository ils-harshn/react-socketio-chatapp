import { useState } from "react";
import XButton from "../../Button/XButton/XButton";
import ModalWrapper from "../Wrapper";
import styles from "./CreateChannelModal.module.css";
import { AddchannelIcon, CloseIcon } from "../../../assests/icons";

const ModalBody = ({ closeModal }) => {
  return (
    <>
      <div className="banner">
        <span className="title">
          <AddchannelIcon className="title-icon"/>
          Create Channel
        </span>
        <CloseIcon className="close" onClick={closeModal} />
      </div>

      <div className="modal-body">
        <XButton>Create</XButton>
      </div>
    </>
  );
};

export const CreateChannelModal = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [isExited, setExited] = useState(false);

  const closeModal = () => {
    setExited(true);
    setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  const openModal = () => {
    setExited(false);
    setOpen(true);
  };

  return (
    <>
      <XButton onClick={openModal}>CREATE A NEW CHANNEL</XButton>
      <ModalWrapper
        isOpen={open}
        className={`${isExited ? "close" : ""}`}
        onClose={closeModal}
      >
        <div className={`modal ${styles.modal}`}>
          <ModalBody closeModal={closeModal} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default CreateChannelModal;
