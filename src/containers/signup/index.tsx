import React from "react";
import { Formik } from "formik";
import Input from "../../components/Input";
import { AccountLayout } from "../../layouts";
import Button from "../../components/Button";
import SignUpForm from "./components/SignUpForm";

const SignUpContainer: React.FC = () => {
  return (
    <AccountLayout
      pageTitle="Sign up"
      title="Sign up for Moodboard"
      subHeading="Create a profile, shop and follow your favourite stores."
    >
      <SignUpForm />
    </AccountLayout>
  );
};

export default SignUpContainer;
