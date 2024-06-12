import { useDispatch, useSelector } from "react-redux";
import styles from "./ChatLister.module.css";
import { useEffect, useState } from "react";
import CHANNEL_SOCKET_EVENTS from "../../channel_socket_events";
import { CaretDownIcon, CaretRightIcon } from "../../../../assests/icons";
import {
  set_selected_member_chat,
  set_selected_space_chat,
} from "../../../../store/actions/SelectedChatActions/index.types";

const Member = ({ member }) => {
  const dispatch = useDispatch();
  const selected_chat = useSelector(
    (reducers) => reducers.useSelectedChatReducer
  );

  const handleClick = () => {
    dispatch(set_selected_member_chat(member));
  };

  return (
    <li
      className={`${styles.Space} ${
        selected_chat?.member?._id === member._id ? styles.ActiveSpace : ""
      }`}
      onClick={handleClick}
    >
      {member.memberName}
    </li>
  );
};

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
        <div className={styles.SpaceLabel}>Direct messages</div>
      </div>
      {open ? (
        <ul className={styles.SpacesListContainer}>
          {data.map((member) => (
            <Member member={member} key={member._id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const Space = ({ data }) => {
  const dispatch = useDispatch();
  const selected_chat = useSelector(
    (reducers) => reducers.useSelectedChatReducer
  );
  const handleClick = () => {
    dispatch(set_selected_space_chat(data.space));
  };
  return (
    <li
      className={`${styles.Space} ${
        selected_chat?.space?._id === data.space._id ? styles.ActiveSpace : ""
      }`}
      key={data.space._id}
      onClick={handleClick}
    >
      {data.space.name}
    </li>
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
            <Space data={item} key={item.space._id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const WorkspaceName = () => {
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);
  return <div className={styles.WorkspaceName}>{channel.name}</div>;
};

const ChatLister = () => {
  return (
    <div className={styles.ChatLister}>
      <WorkspaceName />
      <Spaces />
      <Conversations />
    </div>
  );
};

export default ChatLister;
