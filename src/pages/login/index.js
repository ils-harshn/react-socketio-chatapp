import Logo from "../../assests/img/logo.png";
import Button from "../../components/Button";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import ROUTES from "../../router/ROUTES";
import styles from "./login.module.css";

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
  return (
    <div className={`${styles.formContainer}`}>
      <form>
        <div className="mb-16">
          <Label className="mb-8">Email address</Label>
          <TextInput
            type="text"
            placeholder="Enter Email"
            width="full"
            tabIndex={1}
          ></TextInput>
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
          ></TextInput>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className={`full-screen-jcenter ${styles.container}`}>
      <div>
        <div className="text-center">
          <img src={Logo} className={styles.logo} alt="wow" />
        </div>
        <h1 className={`text-center ${styles.title}`}>Sign In with ChatApp</h1>
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
};

export default Login;
