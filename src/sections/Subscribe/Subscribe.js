import React from 'react'
import Button from '../../components/Button/Button'

export default function Subscribe() {
  return (
    <section className='container'>
        <div>
            <p>35,000+ Already joined</p>
            <h2>Stay up-to-date with what we're doing.</h2>
        </div>

        <form>
            <input type="email" placeholder='Enter your email address'/>
            <Button variant="secondary">Contact Us</Button>
        </form>
    </section>
  )
}
