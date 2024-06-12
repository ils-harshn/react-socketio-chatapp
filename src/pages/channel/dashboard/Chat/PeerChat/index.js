import styles from "../Chat.module.css";

const PeerChat = ({ member }) => {
  return <div className={styles.Chat}>{member.memberName}</div>;
};

export default PeerChat;
