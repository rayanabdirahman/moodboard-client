import React from 'react';
import AccountLayout from '../../../components/layouts/AccountLayout';
import SignUpForm from '../../../components/features/signup/Form';

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
