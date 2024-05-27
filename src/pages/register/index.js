import Logo from "../../assests/img/logo.png";
import Button from "../../components/Button";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import ROUTES from "../../router/ROUTES";
import styles from "./register.module.css";

const RegisterFooter = () => {
  return (
    <div className={`${styles.formContainer} text-center`}>
      <p className="fs-14">Already have an account?</p>
      <Link size="md" to={ROUTES.LOGIN}>
        Sign in here
      </Link>
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
          ></TextInput>
        </div>
        <div className={`${styles.nameContainer} mb-16`}>
          <div>
            <Label className="mb-8">First name</Label>
            <TextInput
              type="text"
              placeholder="Enter First Name"
              width="full"
            ></TextInput>
          </div>
          <div>
            <Label className="mb-8">Last name</Label>
            <TextInput
              type="text"
              placeholder="Enter Last Name"
              width="full"
            ></TextInput>
          </div>
        </div>
        <div className="mb-16">
          <div className="mb-8">
            <Label>Password</Label>
          </div>
          <TextInput
            type="password"
            placeholder="Enter Password"
            width="full"
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
          ></TextInput>
        </div>
        <div>
          <Button type="submit">Sign Up</Button>
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
