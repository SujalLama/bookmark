import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import "./subscribe.css"

export default function Subscribe() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
  }

  const changeHandler = (e) => {
    setEmail(e.target.value)
    setError(false);
  }
  
  return (
    <section className='subscribe'>
      <div className='container'>
        <div className='subscribe-inner'>
          <div className='subscribe-header'>
              <p>35,000+ Already joined</p>
              <h2>Stay up-to-date with what we're doing.</h2>
          </div>

          <form onSubmit={submitHandler} className='form-subscribe'>
              <div className='form-field'>
                <input className={`input ${error ? 'input-error' : ''}`} value={email} onChange={changeHandler} type="email" placeholder='Enter your email address'/>
                {error && <span className='error-msg'>Whoops make sure that its an email</span>}
              </div>
              <Button variant="secondary" aria-label="subscribe btn">Contact Us</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
