import { useSelector } from "react-redux";
import styles from "./CNavbar.module.css";
import { CrossIcon, ExitChannelIcon, SearchIcon } from "../../assests/icons";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import InviteMembersModal from "../Modals/InviteMembersModal";
import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const EditableContent = () => {
  const [input, setInput] = useState("");
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
    </>
  );
};

const Search = ({ setOpen }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <div className={styles.Search}>
        <EditableContent />
      </div>
    </OutsideClickHandler>
  );
};

const CNavbar = () => {
  const navigate = useNavigate();
  const { channel, user } = useSelector(
    (reducers) => reducers.useChannelReducer
  );
  const [isOpen, setOpen] = useState(true);

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
