import { FirstLetter } from "../../Avatar";
import styles from "./CCMemberNav.module.css";

const CCMemberNav = ({ member }) => {
  return (
    <div className={styles.CCMemberNav}>
      <div className={styles.MemberNameC}>
        <FirstLetter title={member.memberName} size={"sm"} className={"mr-8"} />
        <div className={styles.MemberName}>{member.memberName}</div>
      </div>
    </div>
  );
};

export default CCMemberNav;
