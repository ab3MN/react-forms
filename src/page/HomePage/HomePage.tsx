import { ReactNode } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';

const HomePage = (): ReactNode => {
  const users = useAppSelector((state) => state.userReducer.users);

  return (
    <section className='section'>
      <ul className='user__list'>
        {users.map(({ name, age, email, image, id, gender, country }) => (
          <li key={id} className='user__item'>
            <article className='user'>
              <div className='image__container'>
                <img src={image} alt='user' />
              </div>
              <div className='user__info'>
                <p>
                  <span>Name:</span> {name}
                </p>
                <p>
                  <span>Age:</span> {age}
                </p>
                <p>
                  <span>Gender:</span> {gender}
                </p>
                <p>
                  <span>Country:</span> {country}
                </p>
                <p>
                  <span>Email:</span> {email}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
