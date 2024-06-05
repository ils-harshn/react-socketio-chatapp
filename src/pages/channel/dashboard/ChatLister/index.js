import { useSelector } from "react-redux";
import styles from "./ChatLister.module.css";
import { useEffect, useState } from "react";

const Spaces = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  const [data, setdata] = useState([]);

  useEffect(() => {
    socket.emit("space:req:list");
    socket.on("space:list", (data) => {
      setdata(data);
    });
  }, [socket]);
  return (
    <div>
      <div>Channels</div>
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
