import styles from "../Chat.module.css";

const MultiPeerChat = ({ space }) => {
  return <div className={styles.Chat}>{space.name}</div>;
};

export default MultiPeerChat;
