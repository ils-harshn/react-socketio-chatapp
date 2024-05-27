import { toast } from "react-toastify";

const toastConfig = {
  //   position: toast.,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  className: "Toaster",
};

const notify = {
  success: (message) => {
    toast.success(message, toastConfig);
  },
  error: (message) => {
    toast.error(message, toastConfig);
  },
  info: (message) => {
    toast.info(message, toastConfig);
  },
};

export default notify;
