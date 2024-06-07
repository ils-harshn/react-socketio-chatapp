import { useSelector } from "react-redux";
import styles from "./CNavbar.module.css";
import { CrossIcon, ExitChannelIcon, SearchIcon } from "../../assests/icons";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import InviteMembersModal from "../Modals/InviteMembersModal";
import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDebounce } from "use-debounce";
import { useChannelMemberSearch } from "../../api/channel/queryHooks";
import { FirstLetter } from "../Avatar";
import { Spinner } from "../Loader";
import CHANNEL_SOCKET_EVENTS from "../../pages/channel/channel_socket_events";

const Member = ({ member, setOpen }) => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);

  const startConversation = () => {
    socket.emit(CHANNEL_SOCKET_EVENTS.REQ_CREATE_CONVERSATION, member);

    setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  return (
    <li className={styles.MemberSearchLiContainer} onClick={startConversation}>
      <span>
        <FirstLetter title={member.memberName} size={"sm"} />
      </span>
      <span className="ml-8">
        @<span>{member.memberName}</span>
      </span>
    </li>
  );
};

const MemberSearch = ({ searchText, setOpen }) => {
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);
  const { data, isLoading, isError, refetch } = useChannelMemberSearch(
    {
      channelId: channel._id,
      name: searchText,
    },
    {
      enabled: false,
      cacheTime: 0,
      staleTime: 0,
    }
  );

  useEffect(() => {
    if (searchText) {
      refetch();
    }
  }, [searchText, refetch]);

  if (isLoading)
    return (
      <div className={styles.MemberLoaderContainer}>
        <Spinner />
      </div>
    );
  if (isError) return null;

  if (data && data.length)
    return (
      <div className={styles.MemberSearchContainer}>
        <h3 className={styles.MemberSearchContainerLabel}>Members</h3>
        <ul className={styles.MemberSearchUlContainer}>
          {data.map((member) => (
            <Member key={member._id} member={member} setOpen={setOpen} />
          ))}
        </ul>
      </div>
    );

  return (
    <div className={styles.NoMemberFound}>
      <p>No Member Found</p>
    </div>
  );
};

const EditableContent = ({ setOpen }) => {
  const [input, setInput] = useState("");
  const [dinput] = useDebounce(input, 200);
  const inputRef = useRef();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClear = () => {
    setInput("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className={styles.EditableContentContainer}>
        <div className={styles.EdSearchIcon}>
          <SearchIcon />
        </div>
        <div
          className={styles.EditableContent}
          tabIndex={-1}
          onFocus={() => {}}
        >
          <input
            ref={inputRef}
            tabIndex={"0"}
            placeholder="Search (well it's better then scrolling)"
            className={styles.EditableContentInput}
            onChange={handleInput}
            value={input}
          ></input>
        </div>
        <div className={styles.EdCrossIcon} onClick={handleClear}>
          <CrossIcon />
        </div>
      </div>

      {dinput ? (
        <>
          <MemberSearch searchText={dinput} setOpen={setOpen} />
        </>
      ) : (
        <div className={styles.EmptyMessage}>
          Please type something to make a search
        </div>
      )}
    </>
  );
};

const Search = ({ setOpen }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <div className={styles.Search}>
        <EditableContent setOpen={setOpen} />
      </div>
    </OutsideClickHandler>
  );
};

const CNavbar = () => {
  const navigate = useNavigate();
  const { channel, user } = useSelector(
    (reducers) => reducers.useChannelReducer
  );
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={styles.CNavbar}>
      <div className={styles.RightOptions}>
        {user.is_admin ? <InviteMembersModal /> : null}
        <ExitChannelIcon
          title={`Exit ${channel.name}`}
          className={`${styles.RightOptionIcons} ml-8`}
          onClick={() => {
            notify.info("You have disconnected form the channel!");
            navigate(ROUTES.DASHBOARD);
          }}
        />
      </div>
      <div className={styles.SearchBoxContainer} onClick={() => setOpen(true)}>
        Search {channel.name} <SearchIcon className={styles.SearchIcon} />
        {isOpen ? <Search setOpen={setOpen} /> : null}
      </div>
    </nav>
  );
};

export default CNavbar;
