import { useEffect } from "react";
import { useSelector } from "react-redux";
import CHANNEL_SOCKET_EVENTS from "../../channel_socket_events";

const Logger = () => {
  const { socket } = useSelector((reducers) => reducers.useSocketReducer);

  useEffect(() => {
    const handleLog = (msg) => {
      console.log(msg);
    };
    socket.on(CHANNEL_SOCKET_EVENTS.LOGGER, handleLog);
    return () => {
      socket.off(CHANNEL_SOCKET_EVENTS.LOGGER, handleLog);
    };
  }, [socket]);

  return null;
};

export default Logger;
