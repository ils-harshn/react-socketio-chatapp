import { useEffect } from "react";
import { useSelector } from "react-redux";

const ChannelDashboard = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  useEffect(() => {}, [socket]);
  return <h2>{socket.id}</h2>;
};
export default ChannelDashboard;
