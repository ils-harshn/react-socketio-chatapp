import { useParams } from "react-router-dom";

const ChannelDashboard = () => {
  const { channelId } = useParams();
  return <h2>{channelId}</h2>;
};
export default ChannelDashboard;
