
import React from 'react'
import "./hero.css";
import Button from '../../components/Button/Button';

export const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-img'>
          <img src="/images/illustration-hero.svg" alt="hero image" />
        </div>
        <div className='hero-content-wrapper'>

          <div className='container hero-content'>
            <div>
              <h1>A Simple Bookmark Manager</h1>
              <p>A clean and simple interface to organize your favourite websites.
                  Open a new browser tab and see your sites load instantly. Try it for free.
              </p>
              <div className='hero-btns'>
                  <Button variant="primary">Get it on Chrome</Button>
                  <Button variant="outline">Get it on Firefox</Button>
              </div>
              </div>
          </div>
        </div>
    </section>
  )
}
