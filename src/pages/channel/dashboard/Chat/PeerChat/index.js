import CCMemberNav from "../../../../../components/ChatComponents/CCMemberNav";
import TextInput from "../../../../../components/Input/TextInput";
import styles from "../Chat.module.css";

const Messages = ({ of }) => {
  return <div className={styles.MessagesContainer}>{of}</div>;
};

const MessageInput = () => {
  return (
    <div className={styles.MessageInputContainer}>
      <TextInput width="full" />
    </div>
  );
};

const PeerChat = ({ member }) => {
  return (
    <div className={styles.Chat}>
      <CCMemberNav member={member} />
      <Messages of={member.peer} />
      <MessageInput />
    </div>
  );
};

export default PeerChat;
