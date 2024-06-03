import { useSelector } from "react-redux";
import styles from "./CNavbar.module.css";
import { ExitChannelIcon, SearchIcon } from "../../assests/icons";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import InviteMembersModal from "../Modals/InviteMembersModal";

const CNavbar = () => {
  const navigate = useNavigate();

  const { channel, user } = useSelector(
    (reducers) => reducers.useChannelReducer
  );

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
      <div className={styles.SearchBoxContainer}>
        Search {channel.name} <SearchIcon className={styles.SearchIcon} />
      </div>
    </nav>
  );
};

export default CNavbar;
