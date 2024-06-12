import { useSelector } from "react-redux";
import CHAT_TYPES from "./chat.types";
import MultiPeerChat from "./MultiPeerChat";
import PeerChat from "./PeerChat";

const Chat = () => {
  const data = useSelector((reducers) => reducers.useSelectedChatReducer);
  if (data.type === CHAT_TYPES.PEER) return <PeerChat member={data.member} />;
  else if (data.type === CHAT_TYPES.MULTIPEER)
    return <MultiPeerChat space={data.space} />;
  else return <div>Select any member or a space to start communication.</div>;
};

export default Chat;
