import { ReactNode } from 'react';
import './ErrorPage.scss';

import { Link } from 'react-router-dom';

const ErrorPage = (): ReactNode => (
  <section className='error' data-testid='error-page'>
    <h1 className='error__title'>404</h1>
    <h2 className='error__description'>Page not found</h2>
    <Link className='error__link' to='/'>
      Go to main page
    </Link>
  </section>
);

export default ErrorPage;
