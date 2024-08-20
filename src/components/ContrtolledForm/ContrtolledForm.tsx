import { ReactNode } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import { countriesList } from '../../Constants/Country';
import userSchema from '../../Constants/UserSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { saveUser } from '../../redux/slices/user/userSlice';
import { IUser } from '../../types/User';
import { getBase64 } from '../../utils/convertBase64';

const ContrtolledForm = (): ReactNode => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    resolver: yupResolver(userSchema),
  });

  const onSubmitHandler: SubmitHandler<IUser> = async (data): Promise<void> => {
    try {
      const imageToBase64 = await getBase64(data.image[0]);
      const user = { ...data, image: imageToBase64, id: uuidv4() };

      dispatch(saveUser(user));
      reset();
      navigate('/');
    } catch (e) {
      console.log('Convert image to base64 with error');
    }

    reset();
  };

  return (
    <section>
      <h2 className='form__title'>ContrtolledForm</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='input__container'>
          <label htmlFor='name'>Name</label> <input id='name' type='text' {...register('name')} />{' '}
          <p className='form__error'>{errors.name?.message}</p>
        </div>
        <div className='input__container'>
          <label htmlFor='age'>Age</label> <input id='age' type='number' {...register('age')} />{' '}
          <p className='form__error'>{errors.age?.message}</p>
        </div>
        <div className='input__container'>
          <label htmlFor='email'>Email</label> <input id='email' type='email' {...register('email')} />{' '}
          <p className='form__error'>{errors.email?.message}</p>
        </div>
        <div className='input__container'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' {...register('password')} />
          <p className='form__error'>{errors.password?.message}</p>
        </div>

        <div className='input__container'>
          <label htmlFor='repeatPassword'>Repeat password</label>
          <input id='repeatPassword' type='password' {...register('repeatPassword')} />{' '}
          <p className='form__error'>{errors.repeatPassword?.message}</p>
        </div>
        <h3>Gender</h3>
        <div>
          <label htmlFor='female'>Female</label>{' '}
          <input id='female' type='radio' value='female' {...register('gender')} />
          <label htmlFor='male'>Male</label>
          <input id='male' type='radio' value='male' {...register('gender')} />
          <p className='form__error'>{errors.gender?.message}</p>
        </div>
        <div className='input__container'>
          <label htmlFor='conditions'>
            I accept Terms and Conditions agreement
            <input id='conditions' type='checkbox' {...register('conditions')} />
            <p className='form__error'>{errors.conditions?.message}</p>
          </label>
        </div>
        <div className='input__container'>
          <label htmlFor='image'>Upload an image</label>
          <input type='file' accept='.jpeg,.jpg,.png,.webp' id='image' {...register('image')} />
          <p className='form__error'>{errors.image?.message}</p>
        </div>
        <div className='input__container'>
          <label htmlFor='country'>Country:</label>{' '}
          <input type='text' id='country' list='countriesList' autoComplete='on' {...register('country')} />
          <datalist id='countriesList'>
            {countriesList.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <p className='form__error'>{errors.country?.message}</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContrtolledForm;
