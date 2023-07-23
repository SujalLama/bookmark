import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Button from '../../components/Button/Button'

export default function Faq() {
  return (
    <div className='faq container'>
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any 
            other questions you'd like answered please feel free
            to email us.
        </p>
        <Accordion />
        <Button variant="primary">More Info</Button>
    </div>
  )
}
