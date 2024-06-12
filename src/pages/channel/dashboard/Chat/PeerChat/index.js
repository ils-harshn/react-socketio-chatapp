import CCMemberNav from "../../../../../components/ChatComponents/CCMemberNav";
import styles from "../Chat.module.css";

const PeerChat = ({ member }) => {
  return (
    <div className={styles.Chat}>
      <CCMemberNav member={member} />
    </div>
  );
};

export default PeerChat;
