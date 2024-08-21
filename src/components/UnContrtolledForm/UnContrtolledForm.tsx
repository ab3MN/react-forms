import { ReactNode, useState } from 'react';

import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { ValidationError } from 'yup';

import { countriesList } from '../../Constants/Country';
import userSchema from '../../Constants/UserSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { saveUser } from '../../redux/slices/user/userSlice';
import { getBase64 } from '../../utils/convertBase64';
import StrengthPassword from '../StrengthPassword/StrengthPassword';

interface FormFields {
  name: HTMLInputElement;
  age: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  repeatPassword: HTMLInputElement;
  gender: HTMLInputElement;
  conditions: HTMLInputElement;
  image: HTMLInputElement;
  country: HTMLInputElement;
}

const UnContrtolledForm = (): ReactNode => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [password, setPassword] = useState('');
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);

  const validateErrors = (err: ValidationError): void => {
    const errorsMessages: { [key: string]: string } = {};

    err.inner.forEach(({ path, message }) => {
      if (path) errorsMessages[path] = message;
    });
    setErrors(errorsMessages);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement & FormFields> = async (e): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      age: +form.age.value,
      email: form.email.value,
      password: form.password.value,
      repeatPassword: form.repeatPassword.value,
      gender: form.gender.value,
      conditions: form.conditions.checked,
      image: form.image.files,
      country: form.country.value,
    };

    try {
      const isValidate = await userSchema.validate(data, { abortEarly: false });

      if (isValidate && form.image.files) {
        const imageToBase64 = await getBase64(form.image.files[0]);

        const user = { ...data, image: imageToBase64, id: uuidv4() };

        dispatch(saveUser(user));
        navigate('/');
      }
    } catch (err) {
      if (err instanceof ValidationError) validateErrors(err);
    }
  };

  return (
    <section>
      <h2 className='form__title'>ContrtolledForm</h2>
      <form onSubmit={onSubmitHandler}>
        <div className='input__container'>
          <label htmlFor='name'>Name</label> <input id='name' type='text' autoComplete='on' name='name' required />
          {errors.name && <p className='form__error'>{errors.name}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor='age'>Age</label> <input id='age' type='number' autoComplete='on' name='number' required />
          {errors.age && <p className='form__error'>{errors.age}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor='email'>Email</label> <input id='email' type='email' autoComplete='on' name='email' required />
          {errors.email && <p className='form__error'>{errors.email}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' autoComplete='on' name='password' required onChange={onChangePassword} />
          {password && <StrengthPassword password={password} />}
          {errors.password && <p className='form__error'>{errors.password}</p>}
        </div>

        <div className='input__container'>
          <label htmlFor='repeatPassword'>Repeat password</label>
          <input id='repeatPassword' type='password' autoComplete='on' name='repeatPassword' required />{' '}
          {errors.repeatPassword && <p className='form__error'>{errors.repeatPassword}</p>}
        </div>
        <h3>Gender</h3>
        <div>
          <label htmlFor='female'>Female</label>{' '}
          <input id='female' type='radio' value='female' name='gender' required />
          <label htmlFor='male'>Male</label>
          <input id='male' type='radio' value='male' name='gender' required />{' '}
          {errors.gender && <p className='form__error'>{errors.gender}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor='conditions'>
            I accept Terms and Conditions agreement
            <input id='conditions' type='checkbox' name='conditions' required />{' '}
            {errors.conditions && <p className='form__error'>{errors.conditions}</p>}
          </label>
        </div>
        <div className='input__container'>
          <label htmlFor='image'>Upload an image</label>
          <input type='file' accept='.jpeg,.jpg,.png,.webp' id='image' name='image' required />{' '}
          {errors.image && <p className='form__error'>{errors.image}</p>}
        </div>
        <div className='input__container'>
          <label htmlFor='country'>Country:</label>{' '}
          <input type='text' id='country' list='countriesList' name='country' required autoComplete='on' />
          <datalist id='countriesList'>
            {countriesList.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>{' '}
          {errors.country && <p className='form__error'>{errors.country}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default UnContrtolledForm;
