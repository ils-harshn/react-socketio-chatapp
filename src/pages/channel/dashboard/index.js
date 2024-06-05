import { useEffect } from "react";
import { useSelector } from "react-redux";
import CNavbar from "../../../components/Navbars/CNavbar";
import LeftMenu from "./LeftMenu/LeftMenu";
import styles from "./dashboard.module.css";

const ChannelDashboard = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  useEffect(() => {}, [socket]);
  return (
    <>
      <CNavbar />
      <main className={styles.Main}>
        <LeftMenu />
        <div className={styles.Chater}></div>
      </main>
    </>
  );
};
export default ChannelDashboard;
