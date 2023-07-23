import React from 'react'
import "./card.css"
import Button from '../Button/Button'

export default function Card() {
  return (
    <div className='card'>
        <img src="/images/logo-chrome.svg" alt="chrome logo" />
        <div>
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
        </div>

        <Button variant="primary">
            Add & Install Extensioin
        </Button>
    </div>
  )
}
