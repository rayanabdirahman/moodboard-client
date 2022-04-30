import React from "react";
import AccountLayout from "../../../components/layouts/AccountLayout";
import SignInForm from "../../../components/features/signin/Form";

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
