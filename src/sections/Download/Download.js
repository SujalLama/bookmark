import React from 'react'
import "./download.css";
import CardList from '../../components/CardList/CardList';

const Download = () => {
  return (
    <section className='container download'>
      <div className='download-header'>
          <h2>Download the extension</h2>
          <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite 
              you'd like us to prioritize.
          </p>
      </div>
      <CardList />
    </section>
  )
}

export default Download