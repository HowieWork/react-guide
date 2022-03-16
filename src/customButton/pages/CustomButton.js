import Button from '../components/Button';

import styles from './CustomButton.module.css';

const CustomButton = () => {
  const generalButtonHandler = (event) => {
    event.preventDefault();
    window.alert('Hi! I am just a button.');
  };

  return (
    <div>
      {/* TASK DESCRIPTION */}
      <div className='content-container__task'>
        <h2>Custom Buttons</h2>
        <div>
          <p>1. Build general button component. Button needs to be flexible:</p>
          <p>(1) Anchor: redirect to outside sites;</p>
          <p>(2) Link/NavLink: redirect to internal routes;</p>
          <p>(3) Button: general button *default</p>
          <p>2. Button can be customizable, e.g. add specific style classes.</p>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div className={styles.container}>
        <h3 className='center-text'>Anchor: redirect to outside sites</h3>
        <div className={styles['container__buttons']}>
          <Button
            size='small'
            primary
            href='https://www.example.com/'
            isOpenNewTab={true}
            rel='noreferrer'
          >
            Visit Example.com
          </Button>
          <Button
            size='default'
            primary
            href='https://www.example.com/'
            isOpenNewTab={true}
            rel='noreferrer'
          >
            Visit Example.com
          </Button>
          <Button
            size='large'
            primary
            href='https://www.example.com/'
            isOpenNewTab={true}
            rel='noreferrer'
          >
            Visit Example.com
          </Button>
        </div>
      </div>

      <div>
        <h3 className='center-text'>Link/NavLink: redirect to other routes</h3>
        <div className={styles['container__buttons']}>
          <Button size='default' secondary danger to='/'>
            Back to Homepage
          </Button>
        </div>
      </div>

      <div>
        <h3 className='center-text'>Button: a normal button</h3>
        <div className={styles['container__buttons']}>
          <Button
            size='default'
            primary
            type='button'
            onClick={generalButtonHandler}
            disabled={false}
          >
            Click Me !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomButton;
