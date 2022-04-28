import React from "react";
import { Formik } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { SignInValidationSchema } from "../../../validation/AccountValidation";

const SignInForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInValidationSchema}
      onSubmit={(values) => console.log("form values: ", values)}
    >
      {(formik) => (
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            errorMessage={formik.errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            errorMessage={formik.errors.password}
          />
          <Button disabled={!formik.isValid || !formik.dirty}>Submit</Button>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
