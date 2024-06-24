import { useEffect, useRef, useState } from "react";
import CCMemberNav from "../../../../../components/ChatComponents/CCMemberNav";
import styles from "../Chat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { add_dm } from "../../../../../store/actions/DmsActions/index.types";
import CHANNEL_SOCKET_EVENTS from "../../../channel_socket_events";
import { FirstLetter } from "../../../../../components/Avatar";
import { formatTimeHH_MM_X } from "../../../../../utils/time";

const Message = ({ dm, member }) => {
  const { user } = useSelector((reducers) => reducers.useChannelReducer);
  return (
    <div className={styles.DmContainer}>
      <div className={styles.DmAvatar}>
        <FirstLetter
          title={dm.from === member._id ? member.memberName : user.name}
          size={"md"}
          className={dm.from === member._id ? "" : styles.YOU_AVATAR}
        />
      </div>
      <div className={styles.Dm}>
        <div className={styles.DmCon}>
          <span className={styles.DmFromName}>
            {dm.from === member._id ? member.memberName : user.name}
          </span>
          <span className={styles.DmTime}>{formatTimeHH_MM_X(dm.time)}</span>
        </div>
        <div className={styles.DmContent}>{dm.content}</div>
      </div>
    </div>
  );
};

const Messages = ({ of, member }) => {
  const { [of]: dm } = useSelector((reducers) => reducers.useDmsReducer);
  const messagesEndRef = useRef(0);

  useEffect(() => {
    messagesEndRef.current?.scroll(0, messagesEndRef.current?.scrollHeight);
  }, [dm?.messages.length, messagesEndRef]);

  return (
    <div className={styles.MessagesContainer}>
      <div
        ref={messagesEndRef}
        className={`${styles.MessagesContainerInner} custom-scrollbar`}
      >
        {dm?.messages.map((msg, index) => (
          <Message key={index} dm={msg} member={member} />
        ))}
      </div>
    </div>
  );
};

const MessageInput = ({ member, of }) => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_dm(text, "me", of));
    socket.emit(CHANNEL_SOCKET_EVENTS.SEND_DM, {
      of: of,
      to: member._id,
      content: text,
    });
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
