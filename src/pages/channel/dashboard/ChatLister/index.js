import { useSelector } from "react-redux";
import styles from "./ChatLister.module.css";
import { useEffect, useState } from "react";
import CHANNEL_SOCKET_EVENTS from "../../channel_socket_events";

const Spaces = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const handleSpaceList = (data) => {
      setdata(data);
    };

    socket.emit(CHANNEL_SOCKET_EVENTS.REQ_SPACE_LIST);
    socket.on(CHANNEL_SOCKET_EVENTS.RES_SPACE_LIST, handleSpaceList);

    return () => {
      socket.off(CHANNEL_SOCKET_EVENTS.RES_SPACE_LIST, handleSpaceList);
    };
  }, [socket]);
  return (
    <div>
      <div>Spaces</div>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.space._id}>{item.space.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ChatLister = () => {
  return (
    <div className={styles.ChatLister}>
      <Spaces />
    </div>
  );
};

export default ChatLister;
