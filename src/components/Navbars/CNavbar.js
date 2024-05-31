import { useSelector } from "react-redux";
import styles from "./CNavbar.module.css";
import { ExitChannelIcon, SearchIcon } from "../../assests/icons";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";

const CNavbar = () => {
  const navigate = useNavigate();
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);
  return (
    <nav className={styles.CNavbar}>
      <ExitChannelIcon
        title="Exit Channel"
        className={styles.ExitIcon}
        onClick={() => {
          notify.info("You have disconnected form the channel!");
          navigate(ROUTES.DASHBOARD);
        }}
      />
      <div className={styles.SearchBoxContainer}>
        Search {channel.name} <SearchIcon className={styles.SearchIcon} />
      </div>
    </nav>
  );
};

export default CNavbar;
