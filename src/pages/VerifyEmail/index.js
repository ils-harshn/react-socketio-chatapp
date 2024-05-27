import { useLocation, useNavigate } from "react-router-dom";
import styles from "./verifyEmail.module.css";
import { VerifyEmailSchema } from "../../formSchemas/AuthFormsSchemas";
import { useFormik } from "formik";
import Label from "../../components/Label";
import TextInput from "../../components/Input/TextInput";
import Button from "../../components/Button";
import FormInputError from "../../components/Error";
import { useVerifyEmailMutation } from "../../api/auth/queryHooks";
import ROUTES from "../../router/ROUTES";
import notify from "../../utils/notify";

const VerifyEmailForm = ({ data }) => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useVerifyEmailMutation({
    onSuccess: () => {
      notify.success(`Your account is verified`);
      notify.info(`You can now login`);
      navigate(ROUTES.LOGIN);
    },
    onError: (error) => {
      notify.error(`${error.response.data.message}`);
    },
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: VerifyEmailSchema,
    onSubmit: (values, actions) => {
      let payload = {
        otp: values.otp,
        _id: data._id,
      };

      mutate(payload);
    },
  });
  return (
    <div className={`${styles.formContainer}`}>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-16">
          <Label className="mb-8">Email</Label>
          <TextInput
            type="text"
            width="full"
            name="email"
            value={data.email}
            disabled
          ></TextInput>
        </div>
        <div className="mb-16">
          <Label className="mb-8">OTP</Label>
          <TextInput
            type="text"
            placeholder="Enter OTP"
            width="full"
            tabIndex={1}
            name="otp"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextInput>
          {formik.touched.otp && formik.errors.otp && (
            <FormInputError className="mt-4">
              {formik.errors.otp}
            </FormInputError>
          )}
        </div>
        <div>
          <Button type="submit">
            {isLoading ? "Verifying..." : "Verify OTP"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const VerifyEmail = () => {
  const data = useLocation().state;
  return <VerifyEmailForm data={data} />;
};

export default VerifyEmail;
