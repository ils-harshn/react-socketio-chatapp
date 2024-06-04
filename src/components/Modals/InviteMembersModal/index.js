import { useEffect, useRef, useState } from "react";
import ModalWrapper from "../Wrapper";
import styles from "./InviteMembersModal.module.css";
import {
  AddUserIcon,
  CloseIcon,
  CricledExclaimationIcon,
  CrossIcon,
} from "../../../assests/icons";
import { useSelector } from "react-redux";
import { EMAIL_REGEX } from "../../../utils/regex";

const EmailTag = ({ email, remove }) => {
  const isCorrectEmail = EMAIL_REGEX.test(email);
  return (
    <div
      className={`${styles.EmailTag} ${
        isCorrectEmail ? "" : styles.EmailTagWrong
      }`}
    >
      {isCorrectEmail ? null : (
        <span className={styles.WrongEmailIcon}>
          <CricledExclaimationIcon title="Invalid Email" />
        </span>
      )}
      <span>{email}</span>
      <span onClick={remove}>
        <CrossIcon className={`${styles.EmailTagClose}`} />
      </span>
    </div>
  );
};

const EditableContent = () => {
  const [input, setInput] = useState("");
  const [emails, setEmails] = useState([]);
  const inputRef = useRef();
  const { user } = useSelector((reducers) => reducers.useChannelReducer);

  const handleInput = (e) => setInput(e.target.value?.trim());

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      setEmails([...emails, input]);
      setInput("");
    }
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className={styles.EditableContent}
      tabIndex={-1}
      onFocus={() => inputRef.current.focus()}
    >
      {input === "" && emails.length === 0 ? (
        <span className={styles.EditableContentPlaceholder}>
          name@{user.domain}
        </span>
      ) : null}
      <div className={styles.EditableContentContainer}>
        {emails.map((email, index) => (
          <EmailTag
            key={index}
            email={email}
            remove={() => handleRemoveEmail(email)}
          />
        ))}
        <input
          ref={inputRef}
          tabIndex={"0"}
          className={styles.EditableContentInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          value={input}
        ></input>
      </div>
    </div>
  );
};

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

      <div className="modal-body">
        <h4>To:</h4>
        <EditableContent />
      </div>
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
