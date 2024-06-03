import { useState } from "react";
import ModalWrapper from "../Wrapper";
import styles from "./InviteMembersModal.module.css";
import { AddUserIcon, CloseIcon } from "../../../assests/icons";
import { useSelector } from "react-redux";

const ModalBody = ({ closeModal }) => {
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);

  return (
    <>
      <div className="banner">
        <span className="title">
          <AddUserIcon className="add-icon" />
          Invite people to {channel.name}
        </span>
        <CloseIcon className="close" onClick={closeModal} />
      </div>

      <div className="modal-body"></div>
    </>
  );
};

export const InviteMembersModal = () => {
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
      <AddUserIcon onClick={openModal} className={styles.AddIcon} />
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

export default InviteMembersModal;
