import { useState } from "react";
import CCMemberNav from "../../../../../components/ChatComponents/CCMemberNav";
import styles from "../Chat.module.css";

const Messages = ({ of }) => {
  return <div className={styles.MessagesContainer}>{of}</div>;
};

const MessageInput = ({ member }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with text:", text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.MessageInputContainer}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Message ${member.memberName}`}
          className={`${styles.MessageInput} custom-scrollbar`}
        />
      </div>
    </form>
  );
};

const PeerChat = ({ member }) => {
  return (
    <div className={styles.Chat}>
      <CCMemberNav member={member} />
      <Messages of={member.peer} />
      <MessageInput member={member} />
    </div>
  );
};

export default PeerChat;
