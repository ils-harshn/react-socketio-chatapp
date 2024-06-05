import { useSelector } from "react-redux";
import { FirstLetter } from "../../../components/Avatar";
import styles from "./LeftMenu.module.css";

const LeftMenu = () => {
  const { channel } = useSelector((reducers) => reducers.useChannelReducer);
  return (
    <nav className={styles.Nav}>
      <div>
        <FirstLetter title={channel.name} size={"md"} />
      </div>
    </nav>
  );
};

export default LeftMenu;
