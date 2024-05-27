import { useFormik } from "formik";
import Button from "../../components/Button";
import TextInput from "../../components/Input/TextInput";
import Label from "../../components/Label";
import Link from "../../components/Link";
import ROUTES from "../../router/ROUTES";
import styles from "./register.module.css";
import { RegisterSchema } from "../../formSchemas/AuthFormsSchemas";
import FormInputError from "../../components/Error";

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
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
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
        <div className={`${styles.nameContainer} mb-16`}>
          <div>
            <Label className="mb-8">First name</Label>
            <TextInput
              type="text"
              placeholder="Enter First Name"
              width="full"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextInput>
            {formik.touched.firstName && formik.errors.firstName && (
              <FormInputError className="mt-4">
                {formik.errors.firstName}
              </FormInputError>
            )}
          </div>
          <div>
            <Label className="mb-8">Last name</Label>
            <TextInput
              type="text"
              placeholder="Enter Last Name"
              width="full"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextInput>
            {formik.touched.lastName && formik.errors.lastName && (
              <FormInputError className="mt-4">
                {formik.errors.lastName}
              </FormInputError>
            )}
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
        <div className="mb-16">
          <div className="mb-8">
            <Label>Confirm Password</Label>
          </div>
          <TextInput
            type="password"
            placeholder="Re-Enter Password"
            width="full"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextInput>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <FormInputError className="mt-4">
              {formik.errors.confirmPassword}
            </FormInputError>
          )}
        </div>
        <div>
          <Button type="submit" disabled={formik.isSubmitting}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <>
      <RegisterForm />
      <RegisterFooter />
    </>
  );
};

export default Register;
