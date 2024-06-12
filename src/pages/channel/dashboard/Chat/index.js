import { useSelector } from "react-redux";
import styles from "./Chat.module.css";
import CHAT_TYPES from "./chat.types";

const MultiPeerChat = ({ space }) => {
  return <div className={styles.Chat}>{space.name}</div>;
};

const PeerChat = ({ member }) => {
  return <div className={styles.Chat}>{member.memberName}</div>;
};

const Chat = () => {
  const data = useSelector((reducers) => reducers.useSelectedChatReducer);

  if (data.type === CHAT_TYPES.PEER) return <PeerChat member={data.member} />;
  else if (data.type === CHAT_TYPES.MULTIPEER)
    return <MultiPeerChat space={data.space} />;
  else return <div>Select any member or a space to start communication.</div>;
};

export default Chat;
