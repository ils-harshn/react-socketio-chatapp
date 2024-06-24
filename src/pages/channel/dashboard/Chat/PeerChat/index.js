import { useState } from "react";
import CCMemberNav from "../../../../../components/ChatComponents/CCMemberNav";
import styles from "../Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add_dm } from "../../../../../store/actions/DmsActions/index.types";

const Messages = ({ of }) => {
  const { [of]: dm } = useSelector((reducers) => reducers.useDmsReducer);
  return <div className={styles.MessagesContainer}>{dm?.messages.length}</div>;
};

const MessageInput = ({ member, of }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with text:", text);
    dispatch(add_dm(text, "me", of));
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
      <Messages of={member.peer} member={member} />
      <MessageInput member={member} of={member.peer} />
    </div>
  );
};

export default PeerChat;
