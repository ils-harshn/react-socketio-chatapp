import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import notify from "../../../utils/notify";
import { FullScreenLoader } from "../../../components/Loader";
import { useDispatch } from "react-redux";
import { set_socket } from "../../../store/actions/SocketActions/index.types";

const ChannelLayout = () => {
  const { channelId } = useParams();
  const [isConnected, setConnected] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io(
      `${process.env.REACT_APP_SOCKET_URI}channel-${channelId}`
    );

    const handleConnect = () => {
      notify.success("Connection Established");
      dispatch(
        set_socket({
          socket,
        })
      );
      setConnected(true);
    };

    const handleDisconnect = () => {
      setConnected(false);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.close();
    };
  }, [channelId, dispatch]);

  if (isConnected) return <Outlet />;
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
