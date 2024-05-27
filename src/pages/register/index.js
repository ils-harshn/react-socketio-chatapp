import Logo from "../../assests/img/logo.png";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import styles from "./register.module.css";

const RegisterForm = () => {
  return (
    <form>
      <div className="mb-8">
        <Label className="mb-8">Email address</Label>
        <TextInput type="text" placeholder="Email" width="full"></TextInput>
      </div>
      <div>
        <div>
          <Label className="mb-8">Password</Label>
        </div>
        <TextInput
          type="password"
          placeholder="Password"
          width="full"
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
          <img src={Logo} className={styles.logo} />
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
