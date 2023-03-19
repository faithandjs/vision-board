import * as yup from 'yup';

export const signupVal = yup.object().shape({
  displayName: yup.string().required().max(20, '4-20 characters'),
  email: yup.string().email().required('Email?'),
  password: yup
    .string()
    .min(4, '4-20 characters')
    .max(20, '4-20 characters')
    .required('Password please :)'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Mismatch :('),
});

export const loginVal = yup.object().shape({
  email: yup.string().email().required('Email?'),
  password: yup
    .string()
    .min(4, '4-20 characters')
    .max(20, '4-20 characters')
    .required('Password please :)'),
});

