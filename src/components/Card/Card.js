import React from 'react'
import "./card.css"
import Button from '../Button/Button'

export default function Card() {
  return (
    <div className='card'>
        <div className='card-content'>
          <img src="/images/logo-chrome.svg" alt="chrome logo" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
        </div>
        <img src="/images/bg-dots.svg" alt="background dots" />
        <div className='card-footer'>
          <Button variant="primary" className='w-full'>
              Add & Install Extensioin
          </Button>
        </div>
    </div>
  )
}
