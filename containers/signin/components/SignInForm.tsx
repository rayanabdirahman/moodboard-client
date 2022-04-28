import React from "react";
import { Formik } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const SignInForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log("form values: ", values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button>Submit</Button>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
