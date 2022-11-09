import { Fragment, useState, useRef } from 'react';

import Button from '../../customButton/components/Button';
import styles from './Form.module.css';

const Form = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [notes, setNotes] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const notesRef = useRef();

  const nameInputHandler = () => {
    setName(nameRef.current.value);
  };
  const emailInputHandler = () => {
    setEmail(emailRef.current.value);
  };
  const notesInputHandler = () => {
    setNotes(notesRef.current.value);
  };

  // FORM HANDLER
  const formHandler = (event) => {
    event.preventDefault();

    window.alert(
      `Here is your submitted information: 
      Name: ${name} 
      Email: ${email}
      Notes: ${notes}`
    );
  };

  return (
    <Fragment>
      {/* TASK DESCRIPTION */}
      <div className='content-container__task'>
        <h2>Form</h2>
        <div>
          <p>1. Build a simple form component;</p>
          <p>2. Build a custom form hook handling more complicate inputs.</p>
        </div>
      </div>

      {/* --- DIVIDER --- */}
      <div>
        <h3 className='center-text'>Simple Form</h3>
        <form className='center-flex-column'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              placeholder='Please type in your name.'
              ref={nameRef}
              onChange={nameInputHandler}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              type='text'
              placeholder='Please type in your email.'
              ref={emailRef}
              onChange={emailInputHandler}
            />
          </div>
          <div>
            <label htmlFor='notes'>Notes</label>
            <textarea
              id='notes'
              placeholder='Please type in your notes.'
              rows='5'
              ref={notesRef}
              onChange={notesInputHandler}
            />
          </div>
          <Button size='default' primary type='submit' onClick={formHandler}>
            SUBMIT
          </Button>
        </form>
      </div>

      <div>
        <h3 className='center-text'>Custom Form Hook</h3>
      </div>
    </Fragment>
  );
};

export default Form;
