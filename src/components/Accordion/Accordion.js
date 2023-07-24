import React, { useState } from 'react'
import "./accordion.css";

export default function Accordion() {
  const [indexedContent, setIndexedContent] = useState(0);
  

  return (
    <div className='accordion'>
        <button className={`accordion-header ${indexedContent === 0 ? 'active' : ''}`} onClick={() => setIndexedContent(0)}>
          What is Bookmark?
          <img src='/images/icon-arrow.svg' alt='arrow icon' />
        </button>
        <div className={`accordion-content ${indexedContent === 0 ? 'visible' : 'invisible'}`}>
          <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas placerat lorem in felis accumsan, 
        eu pretium dui consequat. Class aptent taciti sociosqu ad litora torquent 
        per conubia nostra, per inceptos himenaeos. In ultricies sapien sed elit suscipit, 
        vel pulvinar justo consectetur.</p> </div>

        <button className={`accordion-header ${indexedContent === 1 ? 'active' : ''}`} onClick={() => setIndexedContent(1)}>
          What is Bookmark?
          <img src='/images/icon-arrow.svg' alt='arrow icon' />
        </button>
        <div className={`accordion-content ${indexedContent === 1 ? 'visible' : 'invisible'}`}>
          <p >Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Maecenas placerat lorem in felis accumsan, 
          eu pretium dui consequat. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. In ultricies sapien sed elit suscipit, 
          vel pulvinar justo consectetur. </p>
        </div>
        
        <button className={`accordion-header ${indexedContent === 2 ? 'active' : ''}`} onClick={() => setIndexedContent(2)}>
          What is Bookmark?
          <img src='/images/icon-arrow.svg' alt='arrow icon' />
        </button>
        <div className={`accordion-content ${indexedContent === 2 ? 'visible' : 'invisible'}`}>
          <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Maecenas placerat lorem in felis accumsan, 
        eu pretium dui consequat. Class aptent taciti sociosqu ad litora torquent 
        per conubia nostra, per inceptos himenaeos. In ultricies sapien sed elit suscipit, 
        vel pulvinar justo consectetur. </p></div>
    </div>
  )
}
