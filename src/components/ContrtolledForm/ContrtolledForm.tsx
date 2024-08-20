import { ReactNode, useState } from 'react';

import { countriesList } from '../../Constants/Country';

const ContrtolledForm = (): ReactNode => {
  const [state, setState] = useState('');

  return (
    <section>
      <h2 className='form__title'>ContrtolledForm</h2>
      <form>
        <div className='input__container'>
          <label htmlFor='name'>Name</label> <input id='name' type='text' />
        </div>
        <div className='input__container'>
          <label htmlFor='age'>Age</label> <input id='age' type='number' />
        </div>
        <div className='input__container'>
          <label htmlFor='email'>Email</label> <input id='email' type='email' />
        </div>
        <div className='input__container'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' />
        </div>

        <div className='input__container'>
          <label htmlFor='repeat_password'>Repeat password</label>
          <input id='repeat_password' type='password' />
        </div>
        <h3>Gender</h3>
        <div>
          <label htmlFor='female'>Female</label> <input id='female' type='radio' name='gender' />
          <label htmlFor='male'>Male</label> <input id='male' type='radio' name='gender' />
        </div>
        <div className='input__container'>
          <label htmlFor='conditions'>
            I accept Terms and Conditions agreement <input id='conditions' type='checkbox' />
          </label>
        </div>
        <div className='input__container'>
          <label htmlFor='image'>Upload an image</label>
          <input type='file' accept='.jpeg,.jpg,.png,.webp' id='image' />
        </div>
        <div className='input__container'>
          <label htmlFor='country'>Country:</label>{' '}
          <input type='text' id='country' list='countriesList' autoComplete='on' />
          <datalist id='countriesList'>
            {countriesList.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>
      </form>
    </section>
  );
};

export default ContrtolledForm;
