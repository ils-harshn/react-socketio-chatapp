import { useSelector } from "react-redux";
import styles from "./ChatLister.module.css";
import { useEffect, useState } from "react";
import CHANNEL_SOCKET_EVENTS from "../../channel_socket_events";
import { CaretDownIcon, CaretRightIcon } from "../../../../assests/icons";

const Spaces = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(true);

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
    <div className={styles.SpacesContainer}>
      <div
        className={styles.SpaceLabelContainer}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.CaretState}>
          {open ? (
            <CaretDownIcon className={styles.CaretIcon} />
          ) : (
            <CaretRightIcon className={styles.CaretIcon} />
          )}
        </div>
        <div className={styles.SpaceLabel}>Spaces</div>
      </div>
      {open ? (
        <ul className={styles.SpacesListContainer}>
          {data.map((item) => (
            <li className={styles.Space} key={item.space._id}>
              {item.space.name}
            </li>
          ))}
        </ul>
      ) : null}
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
