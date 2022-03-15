import { NavLink } from 'react-router-dom';

import styles from './NavLinks.module.css';

const NavLinks = ({ isMobile }) => {
  return (
    <ul
      className={`${styles['nav__links']} ${
        !isMobile ? styles['nav__links--web'] : styles['nav__links--mobile']
      }`}
    >
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/navigation'>About</NavLink>
      </li>
      <li>
        <NavLink to='/navigation'>Projects</NavLink>
      </li>
      <li>
        <NavLink to='/navigation'>Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
