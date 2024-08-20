import { lazy, ReactNode, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './Header/Header';

const UnControlledFormPage = lazy(() => import('../page/UnControlledFormPage/UnControlledFormPage'));
const ControlledFormPage = lazy(() => import('../page/ControlledFormPage/ControlledFormPage'));
const ErrorPage = lazy(() => import('../page/ErrorPage/ErrorPage'));

const App = (): ReactNode => (
  <>
    <Header />
    <Suspense>
      <Routes>
        <Route path='/' element={<Navigate to='/' />} />
        <Route element={<ControlledFormPage />} path='/ControlledForm' />
        <Route element={<UnControlledFormPage />} path='/UnControlledForm' />
        <Route element={<ErrorPage />} path='*' />
      </Routes>
    </Suspense>
  </>
);

export default App;
