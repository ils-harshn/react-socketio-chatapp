import Logo from "../../assests/img/logo.png";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import ROUTES from "../../router/ROUTES";
import styles from "./register.module.css";

const RegisterForm = () => {
  return (
    <form>
      <div className="mb-16">
        <Label className="mb-8">Email address</Label>
        <TextInput
          type="text"
          placeholder="Email"
          width="full"
          tabIndex={1}
        ></TextInput>
      </div>
      <div className="mb-16">
        <div className={`mb-8 ${styles.forgetPassword}`}>
          <Label>Password</Label>
          <Link to={ROUTES.FORGET_PASSWORD} tabIndex={3}>
            Forget Password?
          </Link>
        </div>
        <TextInput
          type="password"
          placeholder="Password"
          width="full"
          tabIndex={2}
        ></TextInput>
      </div>
    </form>
  );
};

const Register = () => {
  return (
    <div className={`full-screen-jcenter ${styles.container}`}>
      <div>
        <div className="text-center">
          <img src={Logo} className={styles.logo} alt="wow" />
        </div>
        <h1 className={`text-center ${styles.title}`}>Sign up with ChatApp</h1>
        <div className={`${styles.formContainer}`}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
