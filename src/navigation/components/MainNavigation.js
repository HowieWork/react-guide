import { Fragment, useState } from 'react';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';

import styles from './MainNavigation.module.css';

const MainNavigation = ({ isMobile }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = (event) => {
    event.preventDefault();
    setIsDrawerOpen((prev) => !prev);
  };

  const displayNav = isMobile ? (
    <Fragment>
      <header className={styles.navigation}>
        <h1 className={styles['navigation__logo']}>LOGO</h1>
        <button
          className={styles['navigation__menu-btn']}
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
      </header>
      {isDrawerOpen && (
        <SideDrawer>
          <NavLinks isMobile={isMobile} />
        </SideDrawer>
      )}
    </Fragment>
  ) : (
    <Fragment>
      <header className={styles.navigation}>
        <h1 className={styles['navigation__logo']}>LOGO</h1>
        <nav>
          <NavLinks isMobile={isMobile} />
        </nav>
      </header>
    </Fragment>
  );

  return <Fragment>{displayNav}</Fragment>;
};

export default MainNavigation;
