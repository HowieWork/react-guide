import { NavLink } from 'react-router-dom';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`center-text center-flex-column ${styles.hero}`}>
      <div>
        <h3>React Interview</h3>
        <ul>
          <li>
            <NavLink to='/fetchAPI'>1. Fetch API</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h3>General Components</h3>
        <ul>
          <li>
            <NavLink to='/navigation'>2. Navigation</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
