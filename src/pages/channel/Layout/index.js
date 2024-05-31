import { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import notify from "../../../utils/notify";
import { FullScreenLoader } from "../../../components/Loader";
import { useDispatch } from "react-redux";
import { set_socket } from "../../../store/actions/SocketActions/index.types";
import WebTokenStorer from "../../../utils/webTokenStorer";
import ROUTES from "../../../router/ROUTES";

const SOCKET_STATUS = {
  CONNECTIING: 0,
  CONNECTED: 1,
  DISCONNECTED: 2,
  CONNECT_ERROR: 3,
};

const ChannelLayout = () => {
  const { channelId } = useParams();
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

    const handleConnect = () => {
      notify.success("Connection Established");
      dispatch(
        set_socket({
          socket,
        })
      );
      setSocketStatus(SOCKET_STATUS.CONNECTED);
    };

    const handleDisconnect = () => {
      setSocketStatus(SOCKET_STATUS.DISCONNECTED);
    };

    const handleConnectError = () => {
      setSocketStatus(SOCKET_STATUS.CONNECT_ERROR);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("connect_error", handleConnectError);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("connect_error", handleConnectError);
      socket.close();
    };
  }, [channelId, dispatch]);

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
