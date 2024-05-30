import { useFormik } from "formik";
import Button from "../../components/Button";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import ROUTES from "../../router/ROUTES";
import styles from "./login.module.css";
import { LoginSchema } from "../../formSchemas/AuthFormsSchemas";
import FormInputError from "../../components/Error";
import { useLoginMutation } from "../../api/auth/queryHooks";
import notify from "../../utils/notify";
import { useNavigate } from "react-router-dom";
import WebTokenStorer from "../../utils/webTokenStorer";

const LoginFooter = () => {
  return (
    <div className={`${styles.formContainer} text-center`}>
      <p className="fs-14">New to ChatApp?</p>
      <Link size="md" to={ROUTES.REGISTER}>
        Sign up here
      </Link>
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useLoginMutation({
    onSuccess: (data) => {
      WebTokenStorer.set(data);
      navigate(ROUTES.DASHBOARD);
      notify.success(`Logged in successfully`);
    },
    onError: (error) => {
      notify.error(`${error.response.data.message}`);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, actions) => {
      WebTokenStorer.clear();
      mutate(values);
    },
  });

  return (
    <div className={`${styles.formContainer}`}>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-16">
          <Label className="mb-8">Email address</Label>
          <TextInput
            type="text"
            placeholder="Enter Email"
            width="full"
            tabIndex={1}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextInput>
          {formik.touched.email && formik.errors.email && (
            <FormInputError className="mt-4">
              {formik.errors.email}
            </FormInputError>
          )}
        </div>
        <div className="mb-16">
          <div className={`mb-8 ${styles.forgetPassword}`}>
            <Label>Password</Label>
            <Link to={ROUTES.FORGET_PASSWORD}>Forgot password?</Link>
          </div>
          <TextInput
            type="password"
            placeholder="Enter Password"
            width="full"
            tabIndex={2}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextInput>
          {formik.touched.password && formik.errors.password && (
            <FormInputError className="mt-4">
              {formik.errors.password}
            </FormInputError>
          )}
        </div>
        <div>
          <Button type="submit">
            {isLoading ? "Please wait..." : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <>
      <LoginForm />
      <LoginFooter />
    </>
  );
};

export default Login;
