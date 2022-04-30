import React from "react";
import { Formik } from "formik";
import { SignUpValidationSchema } from "../../../../validation/AccountValidation";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";

const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={SignUpValidationSchema}
      onSubmit={(values) => console.log("form values: ", values)}
    >
      {(formik) => (
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            errorMessage={formik.errors.first_name}
          />
          <Input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            errorMessage={formik.errors.last_name}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            errorMessage={formik.errors.username}
          />
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

export default SignUpForm;
