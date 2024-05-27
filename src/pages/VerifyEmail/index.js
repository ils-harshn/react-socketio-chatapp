import { useLocation } from "react-router-dom";
import styles from "./verifyEmail.module.css";
import { VerifyEmailSchema } from "../../formSchemas/AuthFormsSchemas";
import { useFormik } from "formik";
import Label from "../../components/Label";
import TextInput from "../../components/Input/TextInput";
import Button from "../../components/Button";
import FormInputError from "../../components/Error";

const VerifyEmailForm = ({ email }) => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: VerifyEmailSchema,
    onSubmit: (values, actions) => {},
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
            value={email}
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
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

const VerifyEmail = () => {
  const { email } = useLocation().state;
  return <VerifyEmailForm email={email} />;
};

export default VerifyEmail;
