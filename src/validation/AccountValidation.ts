import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password is too short - must be 8 characters minimum')
});

export const SignUpValidationSchema = Yup.object().shape({
  first_name: Yup.string().required('First name required'),
  last_name: Yup.string().required('Last name required'),
  username: Yup.string().required('Username required'),
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password is too short - must be 8 characters minimum')
});
