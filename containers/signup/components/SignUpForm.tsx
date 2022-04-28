import React from "react";
import { Formik } from "formik";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

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
      onSubmit={(values) => console.log("form values: ", values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
          <Input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
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

export default SignUpForm;
