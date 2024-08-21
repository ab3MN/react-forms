import * as yup from 'yup';

import { countriesList } from './Country';

const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 32;
const MAX_FILE_SIZE = 102400;

const nameValidate = (string: string): boolean => /^[A-Z]+[a-zA-Z\s()-]*$/.test(string);

const emailValidate = (email: string): boolean => /^\s*[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}\s*$/.test(email);

const passwordValidate = (password: string): boolean =>
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g.test(password);

const validImageExtensions = ['jpg', 'png', 'jpeg', 'webp'];

const isImageValid = (file: unknown): boolean => {
  if (file instanceof FileList && file[0]) {
    const format = file[0].type.split('/').pop();

    if (format) return validImageExtensions.includes(format);
  }

  return false;
};

const userSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Name is required')
    .min(MIN_NAME_LENGTH, `Should contain at least ${MIN_NAME_LENGTH} symbols`)
    .test('is-uppercase', 'The first letter must be capitalized and contain only letters ', (name) =>
      nameValidate(name),
    ),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age should be a positive number')
    .integer('Age should be not a negative value'),
  email: yup
    .string()
    .trim()
    .email()
    .required('Email is required')
    .test('is-uppercase', 'Should be an email format', (email) => emailValidate(email)),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, `Should contain at least ${MIN_PASSWORD_LENGTH} symbols`)
    .max(MAX_PASSWORD_LENGTH, `Max length is ${MAX_PASSWORD_LENGTH} symbols`)
    .required('Password is required')
    .test(
      'is-valid-password',
      'The password should contains at least:1 numeric, 1 uppercase letter, 1 lowercase letter, 1 special character',
      (password) => passwordValidate(password),
    ),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords should match')
    .required('Please confirm password'),
  gender: yup.string().required('Please select gender'),
  conditions: yup
    .boolean()
    .oneOf([true], 'Please accept terms and conditions')
    .required('Please accept terms and conditions'),
  image: yup
    .mixed<FileList>()
    .required('Image is required')
    .test('is-valid-format', 'The image format must be jpg, png, jpeg or webp', (file): boolean => isImageValid(file))
    .test(
      'is-valid-size',
      'Max size allowed is 1KB',
      (file) => file instanceof FileList && file[0] && file[0].size <= MAX_FILE_SIZE,
    ),

  country: yup.string().required('Please select the Country').oneOf(countriesList, 'Please, choose valid country'),
});

export default userSchema;
