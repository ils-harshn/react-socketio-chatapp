import { useSelector } from "react-redux";
import DNavbar from "../../components/Navbars/DNavbar";
import { useChannelList } from "../../api/channel/queryHooks";
import { Spinner } from "../../components/Loader";
import styles from "./dashboard.module.css";
import { FirstLetter } from "../../components/Avatar";
import FooterP1 from "../../components/Footer";
import XButton from "../../components/Button/XButton/XButton";

const ChannelList = () => {
  const user_data = useSelector((reducers) => reducers.userDataReducer);
  const { data, isLoading } = useChannelList();
  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className={styles.ChannelListContainer}>
      <div className={styles.ChannelsForInfo}>
        Workspaces for {user_data.email}
      </div>
      <div className={styles.ChannelLists}>
        <ul>
          {data.map((item) => {
            const channel = item.channel;
            return (
              <li key={channel._id}>
                <div>
                  {channel.image ? (
                    <></>
                  ) : (
                    <FirstLetter title={channel.name} className="mr-16" />
                  )}
                </div>
                <div className={styles.ChannelDetails}>
                  <div>
                    <h2>{channel.name}</h2>
                    <div>{channel.description}</div>
                  </div>
                  <div>
                    <XButton>LUNCH</XButton>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const user_data = useSelector((reducers) => reducers.userDataReducer);

  return (
    <main>
      <DNavbar />
      <div className="p-16">
        <h1 className="mb-16">
          Welcome {user_data.firstName} {user_data.lastName}!
        </h1>
        <ChannelList />
      </div>
      <FooterP1 />
    </main>
  );
};

export default Dashboard;
