import { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import notify from "../../../utils/notify";
import { FullScreenLoader } from "../../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { set_socket } from "../../../store/actions/SocketActions/index.types";
import WebTokenStorer from "../../../utils/webTokenStorer";
import ROUTES from "../../../router/ROUTES";
import { set_channel_data } from "../../../store/actions/ChannelActions/index.types";
import CHANNEL_SOCKET_EVENTS from "../channel_socket_events";
import { CLEAR_CHANNEL_DASHBOARD_DATA } from "../../../store/actions/index.types";

const SOCKET_STATUS = {
  CONNECTIING: 0,
  CONNECTED: 1,
  DISCONNECTED: 2,
  CONNECT_ERROR: 3,
};

const ChannelLayout = () => {
  const { channelId } = useParams();
  const user = useSelector((reducers) => reducers.userDataReducer);
  const [socketStatus, setSocketStatus] = useState(SOCKET_STATUS.CONNECTIING);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(
      `${process.env.REACT_APP_SOCKET_URI}channel-${channelId}`,
      {
        auth: {
          token: WebTokenStorer.get(),
        },
      }
    );

    const handleConnect = (data) => {
      data.user["is_admin"] = data.channel.adminId === user._id;
      data.user["domain"] = user.email.split("@")[1];
      dispatch(set_channel_data(data));
      notify.success("Connection Established");
      dispatch(
        set_socket({
          socket,
        })
      );
      setSocketStatus(SOCKET_STATUS.CONNECTED);

      document.title = data.channel.name;
    };

    const handleDisconnect = () => {
      setSocketStatus(SOCKET_STATUS.DISCONNECTED);
    };

    const handleConnectError = () => {
      setSocketStatus(SOCKET_STATUS.CONNECT_ERROR);
    };

    socket.on(CHANNEL_SOCKET_EVENTS.CONNECTED, handleConnect);
    socket.on(CHANNEL_SOCKET_EVENTS.DISCONNECT, handleDisconnect);
    socket.on(CHANNEL_SOCKET_EVENTS.CONNECT_ERROR, handleConnectError);

    return () => {
      socket.off(CHANNEL_SOCKET_EVENTS.CONNECTED, handleConnect);
      socket.off(CHANNEL_SOCKET_EVENTS.DISCONNECT, handleDisconnect);
      socket.off(CHANNEL_SOCKET_EVENTS.CONNECT_ERROR, handleConnectError);
      socket.close();
      dispatch({ type: CLEAR_CHANNEL_DASHBOARD_DATA });
    };
  }, [channelId, dispatch, user._id, user.email]);

  if (socketStatus === SOCKET_STATUS.CONNECTED) return <Outlet />;
  if (socketStatus === SOCKET_STATUS.DISCONNECTED) {
    notify.info("You have disconnected from the server.");
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  if (socketStatus === SOCKET_STATUS.CONNECT_ERROR) {
    notify.error("Could not connect to that channel.");
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  return (
    <FullScreenLoader
      warns={[
        {
          message: "Connecting Please Wait...",
          time: 200,
        },
        {
          message: "Please Wait. The server taking longer time then usual",
          time: 6000,
        },
        {
          message:
            "Contact the admin to look into the issue.\n Seem like something went wrong",
          time: 18000,
        },
      ]}
    />
  );
};

export default ChannelLayout;
