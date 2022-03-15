import { NavLink } from 'react-router-dom';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`center-text center-flex-column ${styles.hero}`}>
      <div>
        <h3>React Interview</h3>
        <ul>
          <li>
            <NavLink to='/fetchAPI'>Fetch API</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={styles['current-status']}>General Components</h3>
        <ul>
          <li>
            <NavLink to='/navigation'>Navigation</NavLink>
          </li>
          <li>
            <div>Custom Buttons</div>
          </li>
          <li>
            <div>Modal</div>
          </li>
          <li>
            <div>Form *custom hook</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
