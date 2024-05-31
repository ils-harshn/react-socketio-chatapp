import { useEffect } from "react";
import { useSelector } from "react-redux";
import CNavbar from "../../../components/Navbars/CNavbar";

const ChannelDashboard = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  useEffect(() => {}, [socket]);
  return (
    <>
      <CNavbar />
    </>
  );
};
export default ChannelDashboard;
