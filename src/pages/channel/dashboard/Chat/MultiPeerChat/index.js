import CCSpaceNav from "../../../../../components/ChatComponents/CCSpaceNav";
import styles from "../Chat.module.css";

const MultiPeerChat = ({ space }) => {
  return (
    <div className={styles.Chat}>
      <CCSpaceNav space={space} />
    </div>
  );
};

export default MultiPeerChat;
