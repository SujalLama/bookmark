import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'
import './faq.css';

export default function Faq() {
  return (
    <div className='faq container'>
      <div className='faq-header'>
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any 
            other questions you'd like answered please feel free
            to email us.
        </p>
      </div>
      <div className='faq-content'>
        <Accordion />
      </div>
      <Button variant="primary">More Info</Button>
    </div>
  )
}
