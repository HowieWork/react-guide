import { NavLink } from 'react-router-dom';

import styles from './Button.module.css';

const Button = (props) => {
  // DEFINING STYLING CLASSES
  const buttonSize = `button--${props.size || 'default'}`;
  let buttonColor;
  if (props.primary) buttonColor = 'button--primary';
  if (props.secondary) buttonColor = 'button--secondary';

  // 1. ANCHOR
  // ${props.danger && styles['button--danger']}
  if (props.href) {
    return (
      <a
        className={`${styles.button} ${styles[`${buttonSize}`]} ${
          styles[`${buttonColor}`]
        } ${props.danger && styles['button--danger']}`}
        href={props.href}
        target={props.isOpenNewTab && '_blank'}
        rel={props.rel}
      >
        {props.children}
      </a>
    );
  }

  // 2. NAVLINK/LINK
  if (props.to)
    return (
      <NavLink
        className={`${styles.button} ${styles[`${buttonSize}`]} ${
          styles[`${buttonColor}`]
        } ${props.danger && styles['button--danger']}`}
        to={props.to}
      >
        {props.children}
      </NavLink>
    );

  // 3. (DEFAULT) BUTTON
  return (
    <button
      className={`${styles.button} ${styles[`${buttonSize}`]} ${
        styles[`${buttonColor}`]
      } ${props.danger && styles['button--danger']}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
