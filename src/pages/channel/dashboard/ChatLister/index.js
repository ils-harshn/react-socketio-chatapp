import { useSelector } from "react-redux";
import styles from "./ChatLister.module.css";
import { useEffect, useState } from "react";
import CHANNEL_SOCKET_EVENTS from "../../channel_socket_events";
import { CaretDownIcon, CaretRightIcon } from "../../../../assests/icons";

const Conversations = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleCreateConversation = (convers) => {
      setdata((prev) => {
        let isConversationOnFE = false;
        prev.forEach((item) => {
          if (item._id === convers.member._id) {
            isConversationOnFE = true;
          }
        });

        if (isConversationOnFE) return prev;
        return [...prev, convers.member];
      });
    };

    socket.on(
      CHANNEL_SOCKET_EVENTS.RES_CREATE_CONVERSATION,
      handleCreateConversation
    );

    const handleConversationList = (convers) => {
      let _data = convers.map((item) => ({
        _id: item.to._id,
        memberName: item.to.memberName,
        role: item.to.role,
      }));

      setdata(_data);
    };

    socket.on(
      CHANNEL_SOCKET_EVENTS.RES_CONVERSATION_LIST,
      handleConversationList
    );

    socket.emit(CHANNEL_SOCKET_EVENTS.REQ_CONVERSATION_LIST);

    return () => {
      socket.off(
        CHANNEL_SOCKET_EVENTS.RES_CONVERSATION_LIST,
        handleConversationList
      );
      socket.off(
        CHANNEL_SOCKET_EVENTS.RES_CREATE_CONVERSATION,
        handleCreateConversation
      );
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
        <div className={styles.SpaceLabel}>DMs</div>
      </div>
      {open ? (
        <ul className={styles.SpacesListContainer}>
          {data.map((member) => (
            <li className={styles.Space} key={member._id}>
              {member.memberName}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

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
      <Conversations />
    </div>
  );
};

export default ChatLister;
