import Logo from "../../assests/img/logo.png";
import Button from "../../components/Button";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import styles from "./register.module.css";

const RegisterFooter = () => {
  return (
    <div className={`${styles.formContainer} text-center`}>
      <p className="fs-14">Already have an account?</p>
      <Link size="md">Sign in here</Link>
    </div>
  );
};

const RegisterForm = () => {
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
          <div className="mb-8">
            <Label>Password</Label>
          </div>
          <TextInput
            type="password"
            placeholder="Enter Password"
            width="full"
            tabIndex={2}
          ></TextInput>
        </div>
        <div className="mb-16">
          <div className="mb-8">
            <Label>Confirm Password</Label>
          </div>
          <TextInput
            type="password"
            placeholder="Re-Enter Password"
            width="full"
            tabIndex={2}
          ></TextInput>
        </div>
        <div>
          <Button>Sign Up</Button>
        </div>
      </form>
    </div>
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
        <RegisterForm />
        <RegisterFooter />
      </div>
    </div>
  );
};

export default Register;
