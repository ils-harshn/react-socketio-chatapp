import { useEffect } from "react";
import { useSelector } from "react-redux";
import CNavbar from "../../../components/Navbars/CNavbar";
import LeftMenu from "./LeftMenu/LeftMenu";
import styles from "./dashboard.module.css";
import ChatLister from "./ChatLister";
import Chat from "./Chat";
import Logger from "./Logger/Logger";

const ChannelDashboard = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  useEffect(() => {}, [socket]);
  return (
    <>
      <Logger />
      <CNavbar />
      <main className={styles.Main}>
        <LeftMenu />
        <div className={styles.Chater}>
          <ChatLister />
          <Chat />
        </div>
      </main>
    </>
  );
};
export default ChannelDashboard;
