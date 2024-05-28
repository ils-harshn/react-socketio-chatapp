const WebTokenStorer = {
  set: (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("_id", data._id);
    localStorage.setItem("email", data.email);
  },
  get: () => {
    return {
      token: localStorage.getItem("token"),
      _id: localStorage.getItem("_id"),
      email: localStorage.getItem("email"),
    };
  },
  clear: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("email");
  },
};

export default WebTokenStorer;
