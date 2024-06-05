import { useNavigate, useParams } from "react-router-dom";
import { FullScreenLoader } from "../../../components/Loader";
import { useChannelAcceptInviteMutation } from "../../../api/channel/queryHooks";
import { useEffect } from "react";
import Link from "../../../components/Link";
import ROUTES, { ROUTES_FUCN } from "../../../router/ROUTES";

const AcceptChannelInvitation = () => {
  const navigate = useNavigate();
  const { invitationId } = useParams();
  const { mutate, isLoading, isSuccess, isError } =
    useChannelAcceptInviteMutation({
      onSuccess: (data) => {
        setTimeout(() => {
          navigate(ROUTES_FUCN.CHANNELDASHBOARD(data.channelId));
        }, 1000);
      },
      onError: () => {
        setTimeout(() => {
          navigate(ROUTES.DASHBOARD);
        }, 1000);
      },
    });

  useEffect(() => {
    mutate({ invitationId });
  }, [mutate, invitationId]);

  if (isLoading)
    return (
      <FullScreenLoader
        warns={[
          {
            message: "Checking Invitation Info",
            time: 0,
          },
        ]}
      />
    );

  if (isSuccess)
    return (
      <div className="full-screen-center">
        <div className="text-center">
          <p>Invitation Accepted</p>
          <Link>Please wait redirecting...</Link>
        </div>
      </div>
    );
  if (isError)
    return (
      <div className="full-screen-center">
        <div className="text-center">
          <p>No Invitation Found</p>
          <Link>Please wait redirecting...</Link>
        </div>
      </div>
    );
};

export default AcceptChannelInvitation;
