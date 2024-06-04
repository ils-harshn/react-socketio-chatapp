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
import XButton from "../../Button/XButton/XButton";
import notify from "../../../utils/notify";
import { useChannelInviteMutation } from "../../../api/channel/queryHooks";

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

const EditableContent = ({ handleSubmit }) => {
  const [input, setInput] = useState("");
  const [emails, setEmails] = useState([]);
  const inputRef = useRef();
  const [emailErrorCount, setEmailErrorCount] = useState(0);
  const { user } = useSelector((reducers) => reducers.useChannelReducer);

  const handleInput = (e) => setInput(e.target.value?.trim());

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && input === "" && emails.length !== 0) {
      setEmails((prevEmails) => prevEmails.slice(0, -1));
    }

    if (
      e.key === "Tab" ||
      e.key === "Enter" ||
      e.key === "," ||
      e.key === " "
    ) {
      e.preventDefault();
      let email = input.trim();
      if (email && !emails.some((eml) => eml === email)) {
        setEmails([...emails, input]);
        setInput("");
      }
    }
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    let pastedText = e.clipboardData.getData("Text");
    let newEmails = pastedText.split(",").map((email) => email.trim());
    newEmails = newEmails.filter((email) => email.length);
    setEmails([...emails, ...newEmails]);
  };

  const handleRemoveEmail = (emailToRemove) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  const handleRemoveErrorEmails = () => {
    setEmails(emails.filter((email) => EMAIL_REGEX.test(email)));
  };

  const handleErrorCount = (count) => {
    setEmailErrorCount(count);
    inputRef.current?.focus();
  };

  const handleSendClick = () => {
    if (emailErrorCount === 0 || emails.length !== 0) handleSubmit(emails);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const correctEmails = emails.filter((email) => EMAIL_REGEX.test(email));
    const errorCounts = emails.length - correctEmails.length;
    handleErrorCount(errorCounts);
  }, [emails]);

  return (
    <>
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
            onPaste={handleOnPaste}
            value={input}
          ></input>
        </div>
      </div>

      {emailErrorCount ? (
        <div className="mt-4 flex-al-center">
          <span>
            <CricledExclaimationIcon className={styles.ErrorCountIcon} />{" "}
          </span>
          <span className="mr-8">{emailErrorCount} error.</span>
          <span
            className={styles.ErrorRemovalButton}
            onClick={handleRemoveErrorEmails}
          >
            Remove all items with errors
          </span>
        </div>
      ) : null}

      <div className={styles.sendButtonContainer}>
        <XButton
          onClick={handleSendClick}
          disabled={emailErrorCount !== 0 || emails.length === 0}
        >
          SEND
        </XButton>
      </div>
    </>
  );
};

const ModalBody = ({ closeModal, handleSubmit }) => {
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
        <EditableContent handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export const InviteMembersModal = () => {
  const [open, setOpen] = useState(false);
  const [isExited, setExited] = useState(false);
  const { mutate } = useChannelInviteMutation();
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);

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

  const handleSubmit = (emails) => {
    const payload = {
      emails,
      channelId: channel._id,
    };
    notify.promise(
      new Promise((resolve, reject) => {
        mutate(payload, {
          onSuccess: resolve,
          onError: reject,
        });
      }),
      {
        pending: "Sending Invitation...",
        success: "Invitation Sent Successfully!",
        error: "Error sending invitation",
      }
    );
    closeModal();
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
          <ModalBody closeModal={closeModal} handleSubmit={handleSubmit} />
        </div>
      </ModalWrapper>
    </>
  );
};

export default InviteMembersModal;
