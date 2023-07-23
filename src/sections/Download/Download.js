import React from 'react'
import "./download.css";
import CardList from '../../components/CardList/CardList';

const Download = () => {
  return (
    <section className='container'>
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite 
            you'd like us to prioritize.
        </p>
        <CardList />
    </section>
  )
}

export default Download