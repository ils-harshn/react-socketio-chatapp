import { Outlet, useNavigate } from "react-router-dom";
import { useVerifyLoginMutation } from "../../api/auth/queryHooks";
import { useEffect, useState } from "react";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";
import { FullScreenLoader } from "../../components/Loader";

const Protected = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { mutate } = useVerifyLoginMutation({
    onSuccess: () => setLoading(false),
    onError: () => {
      navigate(ROUTES.LOGIN);
      notify.info("Login required!");
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  if (loading) return <FullScreenLoader />;

  return <Outlet />;
};

export default Protected;
