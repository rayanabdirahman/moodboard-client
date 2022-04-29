import React from "react";
import { AccountLayout } from "../../layouts";
import SignInForm from "./components/SignInForm";

const SignInContainer: React.FC = () => {
  return (
    <AccountLayout
      pageTitle="Sign in"
      title="Sign into Moodboard"
      subHeading="Create a profile, shop and follow your favourite stores."
    >
      <SignInForm />
    </AccountLayout>
  );
};

export default SignInContainer;
