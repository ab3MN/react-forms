import { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const isNavLinkActive = ({ isActive }: { isActive: boolean }): string =>
  `${styles.nav__link} ${isActive ? styles.active : ''}`;

const Header = (): ReactNode => (
  <header>
    <nav>
      <ul className={styles.nav__list}>
        <li key={0}>
          <NavLink className={isNavLinkActive} to='/ControlledForm'>
            ControlledForm
          </NavLink>
        </li>
        <li key={1}>
          <NavLink className={isNavLinkActive} to='/UnControlledForm'>
            UnControlledForm
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
