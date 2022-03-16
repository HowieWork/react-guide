import { Fragment } from 'react';

import MainNavigation from '../components/MainNavigation';

import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Fragment>
      {/* TASK DESCRIPTION */}
      <div className='content-container__task'>
        <h2>Navigation</h2>
        <div>
          <p>1. Build a Navigation component</p>
          <p>2. Responsive with side drawer</p>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div className='center-text'>width: 768px</div>
      <div className={styles['nav-container--web']}>
        <MainNavigation isMobile={false} />
      </div>

      <div className='center-text'>width: 384px</div>
      <div className={styles['nav-container--mobile']}>
        <MainNavigation isMobile={true} />
      </div>
    </Fragment>
  );
};

export default Navigation;
