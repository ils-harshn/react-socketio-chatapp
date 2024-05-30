import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useVerifyLoginMutation } from "../../api/auth/queryHooks";
import { useEffect, useLayoutEffect, useState } from "react";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import { FullScreenLoader } from "../../components/Loader";
import { useDispatch } from "react-redux";
import { set_user_data } from "../../store/actions/AuthActions/index.types";
import { useQueryClient } from "react-query";

const Protected = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);
  const { mutate } = useVerifyLoginMutation({
    onSuccess: (data) => {
      dispatch(set_user_data(data));
      setLoading(false);
    },
    onError: () => {
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

  if (loading) return <FullScreenLoader />;

  return <Outlet />;
};

export default Protected;
