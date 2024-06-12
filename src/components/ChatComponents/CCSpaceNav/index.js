import { FirstLetter } from "../../Avatar";
import styles from "./CCSpaceNav.module.css";

const CCSpaceNav = ({ space }) => {
  return (
    <div className={styles.CCSpaceNav}>
      <div className={styles.SpaceNameC}>
        <FirstLetter title={space.name} size={"sm"} className={"mr-8"} />
        <div className={styles.SpaceName}>{space.name}</div>
      </div>
    </div>
  );
};

export default CCSpaceNav;
