import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useVerifyLoginMutation } from "../../api/auth/queryHooks";
import { useEffect, useLayoutEffect, useState } from "react";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import { FullScreenLoader } from "../../components/Loader";
import { useDispatch } from "react-redux";
import { set_user_data } from "../../store/actions/AuthActions/index.types";
import { useQueryClient } from "react-query";
import WebTokenStorer from "../../utils/webTokenStorer";

const Protected = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);

  const warns = [
    {
      message: "Please Wait",
      time: 2000,
    },
    {
      message: "Please wait. The server is taking a longer time than usual.",
      time: 6000,
    },
    {
      message: "Lagata hai server fata.",
      time: 12000,
    },
    {
      message: "Tujhe lge toh refresh kr le page.",
      time: 18000,
    },
  ];

  const { mutate } = useVerifyLoginMutation({
    onSuccess: (data) => {
      dispatch(set_user_data(data));
      setLoading(false);
    },
    onError: () => {
      WebTokenStorer.clear();
      navigate(ROUTES.LOGIN);
      notify.info("Login required!");
    },
  });

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    mutate();
    return () => {
      queryClient.removeQueries();
    };
  }, [mutate, queryClient]);

  if (loading) return <FullScreenLoader warns={warns} />;

  return <Outlet />;
};

export default Protected;
