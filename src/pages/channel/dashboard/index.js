import { useSelector } from "react-redux";

const ChannelDashboard = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);
  return <h2>{socket.id}</h2>;
};
export default ChannelDashboard;
